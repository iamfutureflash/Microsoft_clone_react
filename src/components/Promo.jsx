import React from 'react';

function Promo() {
  return (
    <>
          {/* <!-- Promo Starts --> */}

<div className="promo mt-10 text-black text-sm font-medium underline w-full flex flex-wrap justify-center items-center">
  <div className="microsoft365 w-fit mx-4 px-4 my-1 py-2">
    <img src="./images/logo/microsoft_black.png" className="w-8 mx-auto" alt="Loading..." />
    <p className="">Choose your Microsoft 365</p>
  </div>
  <div className="SurfaceDevices w-fit mx-4 px-4 my-1 py-2">
    <img
      src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Tablet-Kickstand-Landscape-Mode-Fluent-80x80?wid=40&amp;hei=40"
      className="w-8 mx-auto" alt="Loading..." />
    <p className="">Explore Surface devices</p>
  </div>
  <div className="XBoxGames w-fit mx-4 px-4 my-1 py-2">
    <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Xbox-Logo-80x80?wid=40&amp;hei=40"
      className="w-8 mx-auto" alt="Loading..." />
    <p className="">Buy Xbox games</p>
  </div>
  <div className="Windows11 w-fit mx-4 px-4 my-1 py-2">
    <img src="./images/logo/microsoft_black.png" className="w-8 mx-auto" alt="Loading..." />
    <p className="">Get Windows 11</p>
  </div>
</div>

{/* <!-- Promo Ends --> */}
    </>
  )
}

export default Promo;