import React from 'react'
import { TopCardData, FullCardData, BottomCardData } from '../data/Data'
import TopCard from './cards/TopCard';
import FullCard from './cards/FullCard';
import BottomCard from './cards/BottomCard';


function Cards(props) {
  return (
    <>
  {/* <!-- Cards Starts --> */}
  <div className="cards">
    <div className="top-four-card xsm:flex xsm:justify-center  xsm:flex-wrap">
      {TopCardData.map((val)=>{
        return(
          <TopCard
            image={val.image}
            status={val.status===null?"":val.status}
            title={val.title}
            description={val.description}
            button1={val.button1}
            button2={val.button2}
          />
        )
      })}
    </div>
    <div className="full-card-on-lg-devices ">
      {FullCardData.map((val)=>{
        return(
          <FullCard
            image={val.image}
            title={val.title}
            description={val.description}
            button={val.button}
          />
        )
      })}
    </div>
    <div className="text-2xl font-medium my-4 mx-4 md:text-center md:mt-14">For business</div>
    <div className="bottom-four-card xsm:flex xsm:justify-center  xsm:flex-wrap">
      {BottomCardData.map((val)=>{
        return(
          <BottomCard
            image={val.image}
            new={val.status}
            title={val.title}
            description={val.description}
            button1={val.button1}
          />
        )
      })}
    </div>
  </div>
  {/* <!-- Cards Ends --> */}
    </>
  )
}

export default Cards