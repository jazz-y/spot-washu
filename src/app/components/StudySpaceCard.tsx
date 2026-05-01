/**
 * Study Space Card Component
 *
 * Design approach:
 * - Uses .card-base for consistent card styling (white bg, shadow, hover effect)
 * - Consolidated font declarations into .font-lato and .text-brand-body utilities
 * - Semantic spacing using Tailwind's numeric scale (p-5, mb-2.5) for maintainability
 */

export default function StudySpaceCard({
  image,
  title,
  description,
  onClick,
}: {
  image: string;
  title: string;
  description: string;
  onClick?: () => void;
}) {
  return (
    <button onClick={onClick} className="card-base overflow-hidden text-left">
      <div className="w-full aspect-[4/3]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <h3 className="font-lato text-2xl font-bold tracking-[0.4px] mb-2.5">{title}</h3>
        <p className="text-brand-body text-black">{description}</p>
      </div>
    </button>
  );
}
