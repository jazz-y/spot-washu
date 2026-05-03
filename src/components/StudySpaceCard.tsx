// prop shape
interface StudySpaceProps {
  name: string;
  images: string[];
  description: string;
  attributes: string[];
}

export const StudySpaceCard: React.FC<StudySpaceProps> = ({ name, images, description, attributes }) => {
  return (
    // flex for cards
    <div className="flex flex-col h-full bg-[#fce8ed] rounded-2xl overflow-hidden shadow-sm border border-[#f5d0d8]">
      {/* img container*/}
      <div className="w-full h-48 bg-gray-200">
        {images.length > 0 ? (
          <img 
            src={images[0]} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
        )}
      </div>

      {/* content wrapper */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-medium text-gray-800 mb-3">{name}</h3>
        
        {/* attributes pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {attributes.map((attr, index) => (
            <span 
              key={index} 
              className="px-2 py-0.5 text-xs font-semibo ld text-[#f87171] border border-[#fca5a5] rounded-full bg-white"
            >
              {attr}
            </span>
          ))}
        </div> 

        {/* desc */}
        <p className="text-sm text-gray-700 leading-relaxed mt-auto">
          {description}
        </p>
      </div>
    </div>
  );
};