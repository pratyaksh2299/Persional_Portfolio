import React from 'react'
import './MyWork.css'
import mywok_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const MyWork = () => {
  return (
    <div className='mywork' id='work'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src="" alt="" />
        </div>
        <div className="mywork-container">
        {
            mywok_data.map((work,index) =>{
                return <img key={index} src={work.w_img} alt=''></img>
            })
        } </div>
        <div className="mywork-showmore">
            <a href=" https://github.com/pratyaksh2299" className='show-more'>show more</a>
            <img src={arrow_icon} alt="" />
        </div>
       
    </div>
  )
}

export default MyWork