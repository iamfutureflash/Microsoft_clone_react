import React from 'react';

function Footer() {
  return (
    <>
          {/* <!-- footer starts --> */}
  <footer className=" text-gray-600 pt-4">
    <div className="footer-top flex flex-row flex-wrap lg:justify-evenly gap-4 space-y-4 mx-4 my-4">

      <div className="whats-new hidden cursor-none">
      </div>
      <div className="whats-new w-full xsm:w-fit">
        <ol className="space-y-3">
          <li className="text-black text-sm font-medium">What's new</li>
          <ol  className="text-xs space-y-3" >
            <li className=" cursor-pointer hover:underline hover:text-black">Microsoft 365</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Surface Pro X</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Surface Pro 7</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Surface Laptop 3</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Windows 11 apps</li>
          </ol>
        </ol>
      </div>
      <div className="Microsoft-stor w-full xsm:w-fit">
        <ol className="space-y-3">
          <li className="text-black text-sm font-medium">Microsoft Store</li>
          <ol className="text-xs space-y-3" >
            <li className=" cursor-pointer hover:underline hover:text-black">Account profile</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Downlode center</li>
            <li className=" cursor-pointer hover:underline hover:text-black"> Microsoft Store Support</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Returns</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Order tracking</li>
          </ol>
        </ol>
      </div>
      <div className="Education w-full xsm:w-fit">
        <ol className="space-y-3">
          <li className="text-black text-sm  font-medium">Education</li>
          <ol className="text-xs space-y-3" >
            <li className=" cursor-pointer hover:underline hover:text-black">Microsoft in education</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Devices for education</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Microsoft Teams for Education</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Microsoft 365 Education</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Office Education</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Educator training and development</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Deals for students and parents</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Azure for students</li>
          </ol>
        </ol>
      </div>
      <div className="Business w-full xsm:w-fit">
        <ol className="space-y-3">
          <li className="text-black text-sm  font-medium">Business</li>
          <ol className="text-xs space-y-3" >
            <li className=" cursor-pointer hover:underline hover:text-black">Microsoft Cloud</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Microsoft Security</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Azure</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Dynamics 365</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Microsoft 365</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Microsoft Advertising</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Microsoft Industry</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Microsoft Teams</li>
          </ol>
        </ol>
      </div>
      <div className="Developer-and-it w-full xsm:w-fit">
        <ol className="space-y-3">
          <li className="text-black text-sm  font-medium">Developer & IT</li>
          <ol className="text-xs space-y-3" >
            <li className=" cursor-pointer hover:underline hover:text-black">Developer Center</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Documentation</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Microsoft Learn</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Microsoft Tech Community</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Azure Marketplace</li>
            <li className=" cursor-pointer hover:underline hover:text-black">AppSource</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Microsoft Power Platform</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Visual Studio</li>
          </ol>
        </ol>
      </div>
      <div className="company w-full xsm:w-fit">
        <ol className="text-xs space-y-3" >
          <li className="text-black text-sm font-medium">Company</li>
          <ol className="space-y-3">
            <li className=" cursor-pointer hover:underline hover:text-black">Careers</li>
            <li className=" cursor-pointer hover:underline hover:text-black">About Microsoft</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Company news</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Privacy at Microsoft</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Investors</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Security</li>
            <li className=" cursor-pointer hover:underline hover:text-black">Sustainability</li>
          </ol>
        </ol>
      </div>
    </div>
    <div className="footer-bottom flex flex-row flex-wrap justify-between text-sm px-4 ">
      <div className="left my-2">
        <div className="language pr-4  hover:underline hover:text-black text-left cursor-pointer">🌍 English (India)</div>
      </div>
      <div className="right  flex flex-row flex-wrap my-2">
        <div className="contact-microsoft pr-4 hover:underline hover:text-black cursor-pointer">Contact Microsoft</div>
          <div className="privacy pr-4 hover:underline hover:text-black cursor-pointer">Privacy</div>
          <div className="terms-of-use pr-4 hover:underline hover:text-black cursor-pointer">Terms of use</div>
          <div className="trademarks pr-4 hover:underline hover:text-black cursor-pointer">Trademarks</div>
          <div className="about-our-ads pr-4 hover:underline hover:text-black cursor-pointer">About our ads</div>
          <div className="microsoft-2022 pr-4 hover:underline hover:text-black text-right cursor-pointer">©️ Microsoft 2022</div>
      </div>
    </div>
  </footer>
  {/* <!-- footer ends --> */}
    </>
  )
}

export default Footer;