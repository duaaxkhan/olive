import React from 'react'
import img2 from '/Users/duaashahid/Desktop/olive/src/pictures-olive/home-page-pic2.png'
import img3 from '/Users/duaashahid/Desktop/olive/src/pictures-olive/homepage-pic-3.png'
import img4 from '/Users/duaashahid/Desktop/olive/src/pictures-olive/homepage-pic4.png'

function ServicesHome() {
  return (
    <>
    <div className='w-full h-[700px]  mx-30 bg-[#F1F8FF]'>

         <div className='text-left  grid md:grid-cols-2  '>
          <h1 className='text-4xl text-black font-semibold py-10 mx-40'>Our Services</h1>
          <button className='bg-[#1D5ADE] w-[200px]  rounded-full font-medium   my-8 py-4 px-5 mx-80 text-white justify-left'>View all Services</button>
         </div>

         <div className='text-left justify-center grid md:grid-cols-3 '>


        <div className='w-[500px] mx-auto flex-col mx-500 my-6 px-20'>
        <img src={img2} alt=''/>
          <h1 className='py-6 text-xl'>Plant Maintenance services </h1>
                    <h3 className='py-7'>Our Plant Maintenance service ensures
            the health and longevity of your plants
            through professional care and meticulous
            attention to detail.</h3>
            <button className=' font-medium  text-[#1D5ADE] justify-left'>Read More</button>
        </div>

        <div className='w-[500px] mx-auto flex-col mx-500 my-6 px-20'>
        <img src={img3} alt=''/>
        <h1 className='py-6 text-xl'>Efficient SAP Integration Solutions 
        for Businesses </h1>
                    <h3 className='py-2'>Our SAP Integration service seamlessly connects your SAP system with other applications to streamline processes and increase efficiency.</h3>
                    <button className=' font-medium py-2 text-[#1D5ADE] justify-left'>Read More</button>
        </div>


        <div className='w-[500px] mx-auto flex-col mx-500 my-6 px-20'>
        <img src={img4} alt=''/>
                <h1 className='py-6 text-xl'>Efficient IT Solutions for Your
        Businesses</h1>
                    <h3 className='py-2'>Our IT Solutions service offers comprehensive and reliable support for all your technology needs, ensuring optimal performance and security.</h3>
                    <button className=' font-medium py-2  text-[#1D5ADE] justify-left'>Read More</button>
        </div>

     </div>
    </div>
     
     </>
  )
}

export default ServicesHome
