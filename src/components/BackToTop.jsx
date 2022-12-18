import React from 'react';

function BackToTop() {
  return (
    <>
         {/* <!-- back to top starts --> */}
  <div className="back-to-top flex mx-4 my-3  xsm:justify-end xsm:items-end  cursor-pointer">
    <div className="bg bg-gray-300 flex flex-row gap-3 px-4 py-2 rounded-sm w-full xsm:w-fit justify-center hover:bg-slate-200">
      <div className="arrow-up-icon ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <button>Back to top</button>
    </div>
  </div>
  {/* <!-- back to top ends --> */}
    </>
  )
}

export default BackToTop;