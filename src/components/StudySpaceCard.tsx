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
    <div className="flex flex-col h-full bg-deep-red-8 rounded-2xl overflow-hidden shadow-sm border border-deep-red-6">
      {/* img container*/}
      <div className="w-full h-48 bg-deep-red-7">
        {images.length > 0 ? (
          <img 
            src={`src/img/${images[0]}`} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
        )}
      </div>

      {/* content wrapper */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-2xl font-source-sans font-bold text-deep-red-1 mb-3">{name}</h3>
        
        {/* attributes pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {attributes.map((attr, index) => (
            <span 
              key={index} 
              className="px-2 py-0.5 text-xs font-semibo font-medium ld text-deep-red-1 border border-deep-red-5 rounded-full bg-deep-red-7"
            >
              {attr}
            </span>
          ))}
        </div> 

        {/* desc */}
        <p className="text-base text-deep-red-1 leading-relaxed mt-auto">
          {description}
        </p>
      </div>
    </div>
  );
};