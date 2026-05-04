import { useState, useRef, useEffect } from 'react';
import { StudySpaceCard } from './components/StudySpaceCard';
import { FiltersPanel } from './components/Sidebar';
import { Header } from './components/Header';
import spacesData from './data/spaces.json';

function App() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const filtersRef = useRef<HTMLDivElement>(null);

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
            <FiltersPanel onClose={() => setIsFiltersOpen(false)} />
          </div>
        )}

        {/* css grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {spacesData.map((space) => (
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
