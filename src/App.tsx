import { useState, useRef, useEffect } from 'react';
import { StudySpaceCard } from './components/StudySpaceCard';
import { FiltersPanel } from './components/FiltersPanel';
import { Header } from './components/Header';
import { Map } from './components/Map';
import spacesData from './data/spaces.json';

function App() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [selectedNoise, setSelectedNoise] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const filtersRef = useRef<HTMLDivElement>(null);

  const handleToggleNoise = (noise: string) => {
    setSelectedNoise(prev => 
      prev.includes(noise) ? prev.filter(n => n !== noise) : [...prev, noise]
    );
  };

  const handleToggleFeature = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    );
  };

  // when clicking outside popup works
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filtersRef.current && !filtersRef.current.contains(event.target as Node)) {
        setIsFiltersOpen(false);
      }
    }

    if (isFiltersOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFiltersOpen]);

  const filteredSpaces = spacesData.filter((space) => {
    // If no noise filters are selected, pass. Otherwise, space must match at least one selected noise level.
    const matchesNoise = selectedNoise.length === 0 || 
      selectedNoise.some(noise => space.attributes.includes(noise));
      
    // If no features are selected, pass. Otherwise, space must have ALL selected features.
    const matchesFeatures = selectedFeatures.length === 0 || 
      selectedFeatures.every(feature => space.attributes.includes(feature));

    return matchesNoise && matchesFeatures;
  });

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans relative w-full h-full">
      {/* top header */}
      <Header onToggleFilters={() => setIsFiltersOpen((prev) => !prev)} />

      {/* layout container */}
      <main className="flex gap-0 h-[calc(100vh-80px)] w-full">
        {/* filters popup absolute over grid */}
        {isFiltersOpen && (
          <div 
            ref={filtersRef} 
            className="absolute z-50 left-4 md:left-8 top-20 w-[calc(100%-2rem)] md:w-80"
          >
            <FiltersPanel 
              onClose={() => setIsFiltersOpen(false)} 
              selectedNoise={selectedNoise}
              selectedFeatures={selectedFeatures}
              onToggleNoise={handleToggleNoise}
              onToggleFeature={handleToggleFeature}
            />
          </div>
        )}

        {/* grid section - left half */}
        <section className="basis-1/2 overflow-y-auto px-4 md:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredSpaces.map((space) => (
            <StudySpaceCard 
              key={space.id}
              name={space.name}
              images={space.images}
              description={space.description}
              attributes={space.attributes}
            />
          ))}
          </div>
        </section>

        {/* map section - right half */}
        <div id="map" className="basis-1/2 h-full p-0 m-0">
          <Map filteredSpaces={filteredSpaces} />
        </div>

      </main>
    </div>
  );
}

export default App;
