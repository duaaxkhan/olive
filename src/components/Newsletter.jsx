import React from 'react'

function Newsletter() {
  return (
    <div>

   
    <div className='w-full  h-[400px] mx-auto bg-[#F1F8FF] justify-items-center'style={{
        textAlign: "center"
      }}>
        <div className='justify-centre align-middle font-semibold py-6'>
        <h1 className='text-4xl py-6 mx-70 my-3'  style={{
        textAlign: "center"
      }}>Subscribe to Newsletter</h1>
      <h1 className='text-xl  mx-70 my-3'  style={{
        textAlign: "center"
      }}>Enter your email address to register to our newsletter subscription!</h1>
      </div>

      <div className='  justify-content-center  md:w-[900px] sm:w-[500px] mx-auto'style={{
        alignItems: "center"
      }}>
            <input
              className='p-3  w-full rounded-full text-black justify-content-center '
              type='email'
              placeholder='Enter Email'
            />
          </div>
          <button className='bg-[#1D5ADE] text-white rounded-full font-medium w-[150px] justify-items-center  m-3 my-7 px-6 py-3'>
              Notify Me
            </button>
      
    </div>
    </div>
  )
}

export default Newsletter
