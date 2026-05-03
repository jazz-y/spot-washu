import { X, LayoutGrid, Armchair, Users, Sun } from 'lucide-react';

interface SidebarProps {
  onClose: () => void;
}

export const Sidebar = ({ onClose }: SidebarProps) => {
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
          <button className="px-3 py-1 text-sm text-[#f87171] border border-[#fca5a5] rounded-full bg-white hover:bg-red-50">Social</button>
          <button className="px-3 py-1 text-sm text-[#f87171] border border-[#fca5a5] rounded-full bg-white hover:bg-red-50">Quiet</button>
          <button className="px-3 py-1 text-sm text-[#f87171] border border-[#fca5a5] rounded-full bg-white hover:bg-red-50">Silent</button>
        </div>
      </div>

      {/* features section */}
      <div>
        <h2 className="text-2xl font-normal text-gray-800 mb-4">Features</h2>
        <div className="grid grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-[#f5d0d8] group-hover:border-[#fca5a5]">
              <LayoutGrid className="text-amber-700" />
            </div>
            <span className="text-xs text-gray-700">Big Tables</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="w-12 h-12 bg-[#c6e9e4] rounded-lg flex items-center justify-center border border-transparent group-hover:border-[#a0d8cf]">
              <Armchair className="text-teal-800" />
            </div>
            <span className="text-xs text-gray-700">Couches</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-[#f5d0d8] group-hover:border-[#fca5a5]">
              <Users className="text-amber-800" />
            </div>
            <span className="text-xs text-gray-700">Group Study</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-[#f5d0d8] group-hover:border-[#fca5a5]">
              <Sun className="text-amber-600" />
            </div>
            <span className="text-xs text-gray-700">Natural Lighting</span>
          </div>
        </div>
      </div>
    </div>
  );
};