/**
 * Main App Component - Study Space Finder
 *
 * Design approach:
 * - Uses CSS Grid for the main layout (user requirement) via .grid-spaces utility class
 * - Consolidated repeated styles into theme.css to reduce inline class clutter
 * - Brand colors defined as CSS variables for easy theming
 * - Responsive design: mobile-first approach with breakpoints at md (tablet) and lg (desktop)
 */

import { useState } from "react";
import svgPaths from "../imports/Home/svg-l7emdjwf5s";
import imgImageDisplay from "../imports/Home/60a16251afd26d1e5f2c65ce8731f699358cccc9.png";
import imgImageDisplay1 from "../imports/Home/ccb724feeceeb3faa2bedb6d5202e4b9394d0058.png";
import imgImageDisplay2 from "../imports/Home/cbe9642145ee4b1a2c4a06f4ddebcfb048e960b3.png";
import imgImageDisplay3 from "../imports/Home/c4ccf3b00241a0b9e5718cfc660f8ad3eb1c8563.png";
import imgImageDisplay4 from "../imports/Home/f2ab9e9551566076c9dab8fa89eefb62b0cdd754.png";
import imgImageDisplay5 from "../imports/Home/f250c7a785190e21dcea8df87ed625c8a3887ab1.png";
import imgImageDisplay6 from "../imports/Home/9171414a32193993a42967f60b8ee83cfaeb6d5e.png";
import imgImageDisplay7 from "../imports/Home/12ce3662dee06023a285db66ab9f85a6b94925e9.png";
import imgImageDisplay8 from "../imports/Home/ce78a56a6079c3f58d025fd5f0f6794b5fe00762.png";
import StudySpaceCard from "./components/StudySpaceCard";
import FiltersPopup from "./components/FiltersPopup";

const studySpaces = [
  {
    id: 1,
    image: imgImageDisplay,
    title: "Olin First Floor",
    description: "Main floor of the library. The help desk is located here, where you can borrow books, chargers, and other equipment.",
  },
  {
    id: 2,
    image: imgImageDisplay1,
    title: "Olin Second Floor",
    description: "Second floor of the library. Lots of comfy seats and access to the sky room. Often described as being quiet but not too quiet.",
  },
  {
    id: 3,
    image: imgImageDisplay2,
    title: "Olin Third Floor",
    description: "Third floor of the library. Known for being very quiet with individual study spaces.",
  },
  {
    id: 4,
    image: imgImageDisplay3,
    title: "Commons Area",
    description: "Great collaborative space with large tables and charging stations.",
  },
  {
    id: 5,
    image: imgImageDisplay4,
    title: "Study Lounge",
    description: "Comfortable seating with natural lighting, perfect for long study sessions.",
  },
  {
    id: 6,
    image: imgImageDisplay5,
    title: "Group Study Room",
    description: "Private room for group projects and collaborative work.",
  },
];

export default function App() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f5f5] p-5 md:p-10">
      <div className="max-w-[1400px] mx-auto mb-10">
        <div className="flex items-center justify-between flex-wrap gap-5">
          <div className="flex items-center gap-2.5">
            <div className="size-[73px] flex items-center justify-center">
              <PoodleIcon />
            </div>
            <h1 className="text-brand-logo">Spot</h1>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="size-12 md:size-16 btn-brand flex items-center justify-center"
            >
              <FiltersIcon />
            </button>
            <div className="btn-brand px-8 py-2.5 h-16 md:h-20 w-[300px] md:w-[415px] flex items-center justify-between">
              <input
                type="text"
                placeholder="Olin Library, ..."
                className="flex-1 bg-transparent font-lato italic text-[--brand-pink-muted] text-2xl md:text-[40px] outline-none placeholder:text-[--brand-pink-muted]"
              />
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto">
        <div className="grid-spaces">
          {studySpaces.map((space) => (
            <StudySpaceCard
              key={space.id}
              image={space.image}
              title={space.title}
              description={space.description}
            />
          ))}
        </div>
      </div>

      {showFilters && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-5 z-50">
          <FiltersPopup onClose={() => setShowFilters(false)} />
        </div>
      )}
    </div>
  );
}

/**
 * SVG Icon Components
 * Design decision: Extracted common stroke properties to avoid repetition.
 * Uses CSS variables for colors so icons automatically update with theme changes.
 */
const strokeProps = {
  stroke: "var(--brand-red)",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: "2",
};

function PoodleIcon() {
  return (
    <svg className="size-full" fill="none" viewBox="0 0 52.4604 57.3036">
      <path d={svgPaths.p2c333d00} {...strokeProps} />
      <path d={svgPaths.p2db75600} {...strokeProps} />
      <path d={svgPaths.p2cc52b00} {...strokeProps} />
      <path d={svgPaths.p22a32b00} {...strokeProps} />
      <path d={svgPaths.p1a1d0700} {...strokeProps} />
      <path d={svgPaths.p135ba600} {...strokeProps} />
    </svg>
  );
}

function FiltersIcon() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 27 27">
      <path d={svgPaths.p1358bd00} stroke="var(--brand-red)" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="size-11" fill="none" viewBox="0 0 45.0883 45.0904">
      <path d={svgPaths.p1ba46180} fill="var(--brand-red)" />
    </svg>
  );
}
