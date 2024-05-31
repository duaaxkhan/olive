import React from 'react'
import { AiFillStar} from 'react-icons/ai';

function Review() {
  return (
    <div className='text-left justify-center mx-40 grid md:grid-cols-2 py-10 font-semibold'>
       

        <div >
        <h3 className='text-2xl'> 4.8</h3>
        <div className=' text-2xl flex'>
        <AiFillStar /> 
             <AiFillStar /> 
             <AiFillStar /> 
             <AiFillStar /> 
             <AiFillStar /> 
           
        </div>
        <h3 className='text-2xl'>2,934 Ratings </h3>
        <h3 className='text-2xl'>Google Reviews</h3>
        </div>

        <div className='py-5'>
            <h1 className='text-3xl'>Trusted by numerous Businesses,Institutions,Individiuals</h1>
            <h2 className='text-[#1D5ADE]'>Any Name</h2>
            <h3>This technology company exceeded my expectations with their diverse range of services and impressive portfolio, making them a reliable and efficient partner for all our technical needs.</h3>
        </div>
      
    </div>
  )
}

export default Review
