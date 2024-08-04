import React from 'react'
import './Service.css'
import Services_Data from  '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Service = () => {
  return (
    <div className='Services' id='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src="" alt="" />
        </div>
        <div className="services-container">
    {Services_Data.map((service, index) => (
        <div key={index} className="service-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p> 
        <div className="services-readmore">
            <p>Read more</p>
            <img src={arrow_icon} alt="" />
        </div>
        </div>
    ))}
</div>
    </div>
  )
}

export default Service