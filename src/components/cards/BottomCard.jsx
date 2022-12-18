import React from 'react'

function BottomCard(props) {
  return (
    <>
        <div className="card1 mx-4 my-4 xsm:w-[40%] lgx:w-[20%]">
        <img
          src={props.image}
          alt="" />
        <div className="description">
          <div
            className="left text-start mt-4 md:flex-row mdx:w-[96%] mdx:mx-3 mdx:-my-10 mdx:pt-10 mdx:pb-7 lgx:mx-auto lgx:my-auto lgx:items-center  ">
            {(props.new==null)?null:<div className="text-sm font-medium my-1 py-1 px-3 mt-2 bg-red-800 text-white w-fit">
            {props.new}
            </div>}
            <div className="text-2xl font-normal my-1">{props.title}</div>
            <p className="my-2 text-sm">{props.description}</p>
            <button className="my-2 bg-[#0067b8] text-white text-sm font-medium px-4 py-2">
            {props.button1}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BottomCard