import React from 'react'
import Navbar from './Navbar'
import Newsletter from './Newsletter'

function About() {
  return (
    <>
    <div>
        <Navbar/>
        

        <div className='w-[1200px]  h-[500px] mx-auto bg-[#F1F8FF] justify-items-center'style={{
        textAlign: "left"
      }}>
         <h1 className='text-4xl font-semibold'>About Us</h1>
                    <h2 className='text-xl py-8'>OLIVE Technical Services (Pvt.) Ltd. Is a subsidiary
            of Fauji Fertilizer Company which is one of Pakistan’s
            largest and well-known organizations. Incorporated
            in 1978, the parent company FFC has vast experience
            in operating three highly efficient ammonia and urea
            plants. Demonstrated urea production is nearly
            2.5 million tons per annum. Service & Capacity
            factors of our plants surpass international standards
            and our process licensors from Italy & Denmark
            regard them as ‘role models’ for their clients from
            all over the world.FFC also holds pride in winning
            various international awards in production and
            safety. FFC is ISO 9001, ISO 14001 and OHSAS
            18001 and IFA Protect-and-Sustain certified.
            Based on our expertise, we are offering various
            services to petrochemical plants worldwide.</h2>
        </div>
        <div className='w-[300px]  h-[100px] mx-auto justify-items-center'style={{
        
      }}>
      </div>
        <Newsletter/>
    </div>
    </>
  )
}

export default About
