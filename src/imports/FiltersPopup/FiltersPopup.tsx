import imgImage2 from "./32f4b2ce6b27cf65bb722f5fa817398e1d39e81b.png";
import imgImage3 from "./52cf37aabfe5f8622ec58900b195cd6953f46240.png";
import imgImage4 from "./e8dcd20026448fa6251b2834bbee444dedfb8ca2.png";
import imgImage5 from "./658c37f32a7d1c28651d92ac50c9a00b546332d3.png";

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-black text-center tracking-[0.4px] whitespace-nowrap">
        <p className="leading-[16px]">Noise</p>
      </div>
      <button className="content-stretch cursor-pointer flex flex-col gap-[10px] items-end relative shrink-0 size-[35px]" data-name="exit button">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
          <circle cx="17.5" cy="17.5" id="Ellipse 1" r="17" stroke="var(--stroke-0, #FCDCE2)" />
        </svg>
        <div className="flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-full relative text-[#ba0c2f] text-[20px] text-center tracking-[0.1px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">x</p>
        </div>
      </button>
    </div>
  );
}

function Outline() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-name="outline">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ba0c2f] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Social</p>
      </div>
    </div>
  );
}

function Outline1() {
  return (
    <button className="content-stretch cursor-pointer flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-name="outline">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ba0c2f] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Quiet</p>
      </div>
    </button>
  );
}

function Outline2() {
  return (
    <div className="content-stretch cursor-pointer flex items-center justify-center px-[12px] py-[6px] relative shrink-0" role="button" tabIndex="0" data-name="outline">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ba0c2f] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Silent</p>
      </div>
    </div>
  );
}

function ImgHolder() {
  return (
    <div className="aspect-[70/70] relative shrink-0 w-full" data-name="img holder">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[10px] relative size-full">
          <div className="content-stretch flex items-center justify-center max-h-[50px] max-w-[50px] relative shrink-0 size-[50px]" data-name="icon type">
            <div className="flex-[1_0_0] h-full min-w-px relative" data-name="image 2">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#dfdfdf] border-[0.5px] border-solid inset-[-0.25px] pointer-events-none" />
    </div>
  );
}

function TextWrap() {
  return (
    <div className="relative shrink-0 w-full" data-name="text wrap">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[15px] text-black text-center tracking-[0.4px]">
            <p className="leading-[18px]">Big Tables</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImgHolder1() {
  return (
    <div className="aspect-[70/70] relative shrink-0 w-full" data-name="img holder">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[10px] relative size-full">
          <div className="content-stretch flex items-center justify-center max-h-[50px] max-w-[50px] relative shrink-0 size-[50px]" data-name="icon type">
            <div className="flex-[1_0_0] h-full min-w-px relative" data-name="image 3">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#dfdfdf] border-[0.5px] border-solid inset-[-0.25px] pointer-events-none" />
    </div>
  );
}

function TextWrap1() {
  return (
    <div className="relative shrink-0 w-full" data-name="text wrap">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[15px] text-black text-center tracking-[0.4px]">
            <p className="leading-[18px]">Couches</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImgHolder2() {
  return (
    <div className="aspect-[70/70] relative shrink-0 w-full" data-name="img holder">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[10px] relative size-full">
          <div className="content-stretch flex items-center justify-center max-h-[50px] max-w-[50px] relative shrink-0 size-[50px]" data-name="icon type">
            <div className="flex-[1_0_0] h-full min-w-px relative" data-name="image 4">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#dfdfdf] border-[0.5px] border-solid inset-[-0.25px] pointer-events-none" />
    </div>
  );
}

function TextWrap2() {
  return (
    <div className="relative shrink-0 w-full" data-name="text wrap">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[15px] text-black text-center tracking-[0.4px]">
            <p className="leading-[18px]">Group Study</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImgHolder3() {
  return (
    <div className="aspect-[70/70] relative shrink-0 w-full" data-name="img holder">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[10px] relative size-full">
          <div className="content-stretch flex items-center justify-center max-h-[50px] max-w-[50px] relative shrink-0 size-[50px]" data-name="icon type">
            <div className="flex-[1_0_0] h-full min-w-px relative" data-name="image 5">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#dfdfdf] border-[0.5px] border-solid inset-[-0.25px] pointer-events-none" />
    </div>
  );
}

function TextWrap3() {
  return (
    <div className="relative shrink-0 w-full" data-name="text wrap">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[15px] text-black text-center tracking-[0.4px]">
            <p className="leading-[18px]">Natural Lighting</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturesContainer() {
  return (
    <div className="content-start flex flex-wrap gap-[5px] h-[331px] items-start py-[5px] relative shrink-0 w-full" data-name="features container">
      <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-center min-w-px overflow-clip relative rounded-[8px]" data-name="group study">
        <ImgHolder />
        <TextWrap />
      </div>
      <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-center min-w-px overflow-clip relative rounded-[8px]" data-name="group study">
        <ImgHolder1 />
        <TextWrap1 />
      </div>
      <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-center min-w-px overflow-clip relative rounded-[8px]" data-name="group study">
        <ImgHolder2 />
        <TextWrap2 />
      </div>
      <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-center min-w-px overflow-clip relative rounded-[8px]" data-name="group study">
        <ImgHolder3 />
        <TextWrap3 />
      </div>
    </div>
  );
}

export default function FiltersPopup() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_0px_20px_5px_#fcdce2] size-full" data-name="filters popup">
      <div className="flex-[1_0_0] min-h-px relative rounded-[32px] w-full" data-name="popout box">
        <div className="content-stretch flex flex-col gap-[15px] items-start px-[20px] py-[30px] relative size-full">
          <Frame />
          <div className="content-stretch flex gap-[10px] items-start py-[10px] relative shrink-0" data-name="noise">
            <button className="cursor-pointer relative rounded-[8px] shrink-0" data-name="quick filter option">
              <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
                <Outline />
              </div>
              <div aria-hidden="true" className="absolute border border-[#f099aa] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </button>
            <div className="relative rounded-[8px] shrink-0" data-name="quick filter option">
              <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
                <Outline1 />
              </div>
              <div aria-hidden="true" className="absolute border border-[#f099aa] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
            <button className="cursor-pointer relative rounded-[8px] shrink-0" data-name="quick filter option">
              <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
                <Outline2 />
              </div>
              <div aria-hidden="true" className="absolute border border-[#f099aa] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </button>
          </div>
          <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-black text-center tracking-[0.4px] whitespace-nowrap">
            <p className="leading-[16px]">Features</p>
          </div>
          <FeaturesContainer />
        </div>
      </div>
    </div>
  );
}