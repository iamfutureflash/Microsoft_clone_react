import React from 'react'

function FullCard(props) {
  return (
    <>
        <div className="card5 my-4 flex flex-col">
        <img className=" h-[60%] object-cover mx-4"
          src={props.image} alt="Loading.." />
        <div className="description mt-10 mx-4">
          <div
            className="left text-start bg-white px-4 py-4 mx-auto w-[96%] md:flex-row   mdx:-mt-[8rem] mdx:shadow-md mdx:shadow-white  lgx:-mt-[21rem] lgx:w-[40%] lgx:mx-4 ">
            <div className="text-2xl font-normal my-1">{props.title}</div>
            <p className="my-2 text-sm">{props.description}</p>
            <button className="my-2 bg-black text-white text-sm font-medium px-4 py-2">
            {props.button}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default FullCard