import React from 'react';

function Slider() {
  return (
    <>
        {/* <!-- SLIDER Start --> */}

<div className="slider flex flex-col-reverse lgx:bg-blue-200 lgx:flex-row">
  <div
    className="left z-10 bg-slate-100 shadow-lg pl-5 text-left md:flex-row mdx:w-[96%] mdx:mx-3 mdx:-my-10 mdx:pt-10 mdx:pb-7 lgx:shadow-transparent lgx:mx-auto lgx:my-auto lgx:items-center md:pl-14 lgx:bg-blue-200">
    <div className="text-sm font-medium mx-4 my-1 py-1 px-3 mt-2 bg-yellow-400 w-fit">
      New
    </div>
    <div className="text-2xl font-medium mx-4 my-1">Surface Pro 9</div>
    <p className="mx-4 my-2 text-sm">
      Tablet versatility and laptop power — all in one ultra-portable device
    </p>
    <button className="mx-4 my-2 bg-[#0067b8] text-white text-sm font-medium px-4 py-2">
      Learn more
    </button>
  </div>
  <div className="right">
    <img src="./images/slider/office/Office_1083x600.avif" class="" alt="Loding..." />
  </div>
</div>

{/* <!-- SLIDER Ends --> */}
    </>
  )
}

export default Slider;