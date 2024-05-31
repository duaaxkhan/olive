import React from 'react'
import mits from './../pictures-olive/Mitsubishi_Heavy_Industries 1.png'
import haldor from '/Users/duaashahid/Desktop/olive/src/pictures-olive/Haldor_Topsoe.png'
import kafco from '/Users/duaashahid/Desktop/olive/src/pictures-olive/KAFCO.png'
import lifeco from '/Users/duaashahid/Desktop/olive/src/pictures-olive/LIFECO.png'

function OverseasClients() {
  return (
    <div className=' py-20 text-left   justify-center mx-auto grid md:grid-cols-5 sm:grid-cols-2'>
      <p className='  mx-auto  flex-col py-4 text-[#9e8e8e] font-bold '>Overseas Clients</p>
      <img  className='mx-auto  flex-col'src={mits} alt=''/>
      <img className='mx-auto  flex-col'src={haldor} alt=''/>
      <img className='mx-auto  flex-col' src={kafco} alt=''/>
      <img className='mx-auto  flex-col'src={lifeco} alt=''/>
    </div>
  )
}

export default OverseasClients
