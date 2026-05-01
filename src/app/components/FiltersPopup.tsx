/**
 * Filters Popup Component
 *
 * Design approach:
 * - Uses CSS Grid (.grid-features) for the 2-column feature layout per user requirement
 * - Consolidated button styles into .btn-filter to reduce repetition
 * - Uses semantic text classes (.text-brand-title, .text-brand-body) for consistency
 * - All brand colors reference CSS variables for easy theming
 */

import imgImage2 from "../../imports/FiltersPopup/32f4b2ce6b27cf65bb722f5fa817398e1d39e81b.png";
import imgImage3 from "../../imports/FiltersPopup/52cf37aabfe5f8622ec58900b195cd6953f46240.png";
import imgImage4 from "../../imports/FiltersPopup/e8dcd20026448fa6251b2834bbee444dedfb8ca2.png";
import imgImage5 from "../../imports/FiltersPopup/658c37f32a7d1c28651d92ac50c9a00b546332d3.png";

export default function FiltersPopup({ onClose }: { onClose?: () => void }) {
  return (
    <div className="bg-white rounded-lg shadow-[0px_0px_20px_5px_var(--brand-pink-light)] p-5 md:p-8 max-w-[500px] w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-brand-title">Noise</h2>
        <button
          onClick={onClose}
          className="size-9 rounded-full border-brand-pink flex items-center justify-center hover:bg-[--brand-pink-light] transition-colors"
        >
          <span className="font-roboto font-medium text-[--brand-red] text-xl">x</span>
        </button>
      </div>

      <div className="flex gap-2.5 py-2.5 mb-4">
        <button className="btn-filter">Social</button>
        <button className="btn-filter">Quiet</button>
        <button className="btn-filter">Silent</button>
      </div>

      <h2 className="text-brand-title mb-4">Features</h2>

      <div className="grid-features py-1.5">
        <FeatureCard image={imgImage2} label="Big Tables" />
        <FeatureCard image={imgImage3} label="Couches" />
        <FeatureCard image={imgImage4} label="Group Study" />
        <FeatureCard image={imgImage5} label="Natural Lighting" />
      </div>
    </div>
  );
}

/**
 * Feature Card Component
 * Design decision: Reuses .card-base for hover effects and .border-brand for
 * the subtle gray outline. Uses aspect-square to maintain 1:1 ratio regardless
 * of grid width, keeping the layout clean and predictable.
 */
function FeatureCard({ image, label }: { image: string; label: string }) {
  return (
    <button className="card-base border-brand flex flex-col items-center">
      <div className="w-full aspect-square p-2.5 flex items-center justify-center">
        <img src={image} alt={label} className="size-12 object-cover" />
      </div>
      <div className="p-2.5 w-full">
        <p className="text-brand-body text-center">{label}</p>
      </div>
    </button>
  );
}
