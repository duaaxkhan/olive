import React from 'react'
import Navbar from './Navbar'
import Newsletter from './Newsletter'
import img2 from '/Users/duaashahid/Desktop/olive/src/pictures-olive/home-page-pic2.png'
import img3 from '/Users/duaashahid/Desktop/olive/src/pictures-olive/homepage-pic-3.png'
import img4 from '/Users/duaashahid/Desktop/olive/src/pictures-olive/homepage-pic4.png'
import { useNavigate } from "react-router-dom";


function Services() {
    const navigate = useNavigate();
  return (
    <>
    <div>
        <Navbar/>
                            
                    <div className='w-full py-6 md:h-[840px] mx-auto justify-center sm:h-[800px] '>


                    <div className='text-left   justify-center mx-auto  grid md:grid-cols-2  '>
                            <h1 className='text-5xl text-black font-semibold py-10 md:mx-40'>Our Services</h1>
                            
                    </div>

                    <div className='text-left justify-center grid md:grid-cols-3 '>

                                    <div className='w-[500px] mx-auto justify-centerflex-col mx-500 my-6 px-20'>
                        <img src={img2} alt=''/>
                        <h1 className='py-6 text-xl'>Plant Maintenance services </h1>
                                    <h3 className='py-7'>Our Plant Maintenance service ensures
                            the health and longevity of your plants
                            through professional care and meticulous
                            attention to detail.</h3>
                            <button className=' font-medium  text-[#1D5ADE] justify-left hover:scale-110'onClick={() => navigate("/PlantServices")}>Read More</button>
                        </div>

                        <div className='w-[500px] mx-auto justify-center flex-col mx-500 my-6 px-20'>
                        <img src={img3} alt=''/>
                        <h1 className='py-6 text-xl'>Training Services</h1>
                                    <h3 className='py-2'>Our SAP Integration service seamlessly connects your SAP system with other applications to streamline processes and increase efficiency.</h3>
                                    <button className=' font-medium py-2 text-[#1D5ADE] justify-left hover:scale-110' onClick={() => navigate("/TrainingServices")}>Read More</button>
                        </div>


                        <div className='w-[500px] mx-auto justify-center flex-col mx-500 my-6 px-20'>
                        <img src={img4} alt=''/>
                                <h1 className='py-6 text-xl'>IT and SAP Services</h1>
                                    <h3 className='py-2'>Our IT Solutions service offers comprehensive and reliable support for all your technology needs, ensuring optimal performance and security.</h3>
                                    <button className=' font-medium py-2  text-[#1D5ADE] justify-left hover:scale-110' onClick={() => navigate("/ITServices")}>Read More</button>
                        </div>
                

                    </div>
                    </div>


        <Newsletter/>
      
    </div>
    </>
  )
}

export default Services
