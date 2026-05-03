import { Search, SlidersHorizontal } from 'lucide-react';

interface HeaderProps {
  onToggleFilters: () => void;
}

export const Header = ({ onToggleFilters }: HeaderProps) => {
  return (
    <header className="bg-deep-red-6 py-4 px-6 md:px-8 mb-6 flex items-center gap-4">
      {/* logo */}
      <div className="flex items-center gap-2 text-deep-red-1 mr-auto">
        <img src="/poodle.svg" alt="Spot Logo" className="w-10 h-10" />
        <h1 className="text-3xl font-serif">Spot</h1>
      </div>

      <div className="flex items-stretch gap-4 h-12">
        {/* filter btn */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onToggleFilters();
          }}
          className="px-4 border border-[#fca5a5] text-[#f87171] rounded-full bg-white hover:bg-red-50 transition-colors flex items-center justify-center">
          <SlidersHorizontal size={20} />
        </button>

        {/* search bar */}
        <div className="relative w-64 md:w-96 flex h-full">
          <input 
            type="text" 
            placeholder="Olin Library, ..." 
            className="w-full h-full bg-[#fce8ed] border border-[#fca5a5] rounded-full px-4 pr-10 text-[#f87171] placeholder-[#fca5a5] focus:outline-none focus:ring-2 focus:ring-red-200 text-lg italic"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-red-600">
            <Search size={22} className="stroke-[3]" />
          </button>
        </div>
      </div>
    </header>
  );
};