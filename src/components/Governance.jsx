import React from 'react'
import img4 from '/Users/duaashahid/Desktop/olive/src/pictures-olive/MAK.png'
import img5 from '/Users/duaashahid/Desktop/olive/src/pictures-olive/AFK.png'
import img6 from '/Users/duaashahid/Desktop/olive/src/pictures-olive/SAR.png'
import img7 from '/Users/duaashahid/Desktop/olive/src/pictures-olive/SBK.png'

function Governance() {
  return (
    <div>
        <h1 className='text-4xl text-black font-semibold py-14 mx-40'>Governance</h1>
         <div className='text-left grid md:grid-cols-4 '>

         <div className='w-[500px] mx-auto flex-col mx-500 my-6 px-20'>
        <img src={img4} alt=''/>
          <h1 className='py-4 text-xl mx-1'>Muhammad Aleem Khan </h1>
                    <h3 className=' text-[#695f5f]'>CEO</h3>   
        </div>


        <div className='w-[500px] mx-auto flex-col mx-500 my-6 px-20'>
        <img src={img5} alt=''/>
          <h1 className='py-4 text-xl mx-2'>Akbar Fida Hussain </h1>
                    <h3 className=' text-[#695f5f]'>Director</h3>   
        </div>


        <div className='w-[500px] mx-auto flex-col mx-500 my-6 px-20'>
        <img src={img6} alt=''/>
          <h1 className='py-4 text-xl mx-1'>Sarfaraz Ahmed Rehman </h1>
                    <h3 className=' text-[#695f5f]'>Chairman</h3>   
        </div>


        <div className='w-[500px] mx-auto flex-col mx-500 my-6 px-20'>
        <img src={img7} alt=''/>
          <h1 className='py-4 text-xl mx-1'>Syed Bakhtiyar Kazmi </h1>
                    <h3 className='  text-[#695f5f]'>Director</h3>   
        </div>


         </div>
      
    </div>
  )
}

export default Governance
