import { X, LayoutGrid, Armchair, Users, Sun } from 'lucide-react';

interface FiltersPanelProps {
  onClose: () => void;
  selectedNoise: string[];
  selectedFeatures: string[];
  onToggleNoise: (noise: string) => void;
  onToggleFeature: (feature: string) => void;
}

export const FiltersPanel = ({ 
  onClose, 
  selectedNoise, 
  selectedFeatures, 
  onToggleNoise, 
  onToggleFeature 
}: FiltersPanelProps) => {
  return (
    <div className="w-full bg-[#fce8ed] rounded-2xl p-6 flex flex-col border border-[#f5d0d8] shadow-2xl">
      {/* noise section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-normal text-gray-800">Noise</h2>
          <button 
            onClick={onClose}
            className="text-[#f87171] border border-[#fca5a5] rounded-full p-1 bg-white hover:bg-red-50 transition-colors">
            <X size={16} />
          </button>
        </div>
        <div className="flex gap-2">
          {['Social', 'Quiet', 'Silent'].map(noise => (
            <button 
              key={noise}
              onClick={() => onToggleNoise(noise)}
              className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
                selectedNoise.includes(noise) 
                  ? 'bg-deep-red-1 text-white border border-deep-red-1' 
                  : 'text-deep-red-1 border border-deep-red-5 bg-deep-red-7 hover:brightness-95'
              }`}
            >
              {noise}
            </button>
          ))}
        </div>
      </div>

      {/* features section */}
      <div>
        <h2 className="text-2xl font-normal text-gray-800 mb-4">Features</h2>
        <div className="grid grid-cols-4 gap-4 text-center">
          <div onClick={() => onToggleFeature('Big Tables')} className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center border transition-colors ${selectedFeatures.includes('Big Tables') ? 'bg-[#fce8ed] border-[#f87171]' : 'bg-white border-[#f5d0d8] group-hover:border-[#fca5a5]'}`}>
              <LayoutGrid className="text-amber-700" />
            </div>
            <span className="text-xs text-gray-700">Big Tables</span>
          </div>
          <div onClick={() => onToggleFeature('Couches')} className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center border transition-colors ${selectedFeatures.includes('Couches') ? 'bg-[#c6e9e4] border-teal-800' : 'bg-white border-[#f5d0d8] group-hover:border-[#fca5a5]'}`}>
              <Armchair className="text-teal-800" />
            </div>
            <span className="text-xs text-gray-700">Couches</span>
          </div>
          <div onClick={() => onToggleFeature('Group Study')} className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center border transition-colors ${selectedFeatures.includes('Group Study') ? 'bg-[#fce8ed] border-[#f87171]' : 'bg-white border-[#f5d0d8] group-hover:border-[#fca5a5]'}`}>
              <Users className="text-amber-800" />
            </div>
            <span className="text-xs text-gray-700">Group Study</span>
          </div>
          <div onClick={() => onToggleFeature('Natural Lighting')} className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center border transition-colors ${selectedFeatures.includes('Natural Lighting') ? 'bg-[#fce8ed] border-[#f87171]' : 'bg-white border-[#f5d0d8] group-hover:border-[#fca5a5]'}`}>
              <Sun className="text-amber-600" />
            </div>
            <span className="text-xs text-gray-700">Natural Lighting</span>
          </div>
        </div>
      </div>
    </div>
  );
};