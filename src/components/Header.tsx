import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

interface HeaderProps {
  onToggleFilters: () => void;
  onSearch: (query: string) => void;
}

export const Header = ({ onToggleFilters, onSearch }: HeaderProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    onSearch(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="bg-deep-red-6 py-4 px-6 md:px-8 mb-6 flex items-center gap-4">
      {/* logo */}
      <div className="flex items-center gap-2 text-deep-red-1 mr-auto">
        <img src="/poodle.svg" alt="Spot Logo" className="w-10 h-10" />
        <h1 className="text-4xl font-playfair">Spot</h1>
      </div>

      <div className="flex items-stretch gap-4 h-12">
        {/* filter btn */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onToggleFilters();
          }}
          className="px-4 border border-deep-red-5 hover:border-deep-red-1 text-deep-red-1 rounded-full bg-deep-red-7 hover:bg-deep-red-6 transition-colors flex items-center justify-center">
          <SlidersHorizontal size={20} />
        </button>

        {/* search bar */}
        <div className="relative w-64 md:w-96 flex h-full">
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Olin Library, ..." 
            className="w-full h-full bg-deep-red-7 hover:bg-deep-red-6 border border-deep-red-5 hover:border-deep-red-1 rounded-full px-4 pr-10 text-deep-red-1 placeholder:text-deep-red-3 focus:outline-none focus:ring-2 focus:ring-red-200 text-lg placeholder:italic"
          />
          <button 
            onClick={handleSearch}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-deep-red-1">
            <Search size={22} className="stroke-[3]" />
          </button>
        </div>
      </div>
    </header>
  );
};