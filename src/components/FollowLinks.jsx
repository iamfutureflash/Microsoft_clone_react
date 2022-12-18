import React from 'react';

function FollowLinks() {
  return (
    <>
          {/* <!-- follow links starts --> */}
  <div className="follow-links flex gap-3 mx-4">
    <div className="follow-microsoft">
      <h1>Follow Microsoft</h1>
    </div>
    <div className="facebook">
      <img className="w-6" src="./images/svg/fb.svg" alt="" />
    </div>
    <div className="twitter">
      <img className="w-6" src="./images/svg/twitter.svg" alt="" />
    </div>
    <div className="youtube">
      <img className="w-6" src="./images/svg/yt.svg" alt="" />
    </div>
  </div>
  {/* <!-- follow links ends --> */}
    </>
  )
}

export default FollowLinks;