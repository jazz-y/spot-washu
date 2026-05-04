import { useState, useRef, useEffect } from 'react';
import { StudySpaceCard } from './components/StudySpaceCard';
import { FiltersPanel } from './components/FiltersPanel';
import { Header } from './components/Header';
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
    <div className="min-h-screen bg-white text-gray-900 font-sans relative">
      {/* top header */}
      <Header onToggleFilters={() => setIsFiltersOpen((prev) => !prev)} />

      {/* layout container */}
      <main className="max-w-[1600px] mx-auto px-4 md:px-8 pb-12 relative flex">
        {/* filters popup absolute over grid */}
        {isFiltersOpen && (
          <div 
            ref={filtersRef} 
            className="absolute z-50 left-4 md:left-8 top-0 w-[calc(100%-2rem)] md:w-80"
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

        {/* css grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
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
      </main>
    </div>
  );
}

export default App;
