import React,{useState} from 'react'
import logo from '/Users/duaashahid/Desktop/olive/src/pictures-olive/final logo 1.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {  useNavigate } from 'react-router-dom';
function Navbar() {
    const [nav,setnav]= useState(true)
    const hanleNav=()=>{
        setnav(!nav)
    }
    const navigate= useNavigate();
  return (

<>
<div>
      <div className='flex justify-between items-center h-20 max-w-[1600px] mx-10 px-100 text-black py-20'>
        <img className='md:w-[250px] sm:w-[50px]' src={logo} alt=""/>
        <ul className=' hidden md:flex '>
            <button className='p-4 hover:bg-[#F1F8FF] hover:scale-110 rounded-full 'onClick={()=>navigate('/Home')}>Home</button>
            <button className='p-4 hover:bg-[#F1F8FF] hover:scale-110 rounded-full'onClick={()=>navigate('/Services')}>Services</button>
            <button className='p-4 hover:bg-[#F1F8FF] hover:scale-110 rounded-full'onClick={()=>navigate('/About')}>About</button>
            <button className='bg-[#1D5ADE] w-[100px] rounded-full hover:scale-110 font-medium px-1 text-white hover:border-double'onClick={()=>navigate('/Contact')} >Contact</button>
        </ul>
        <div onClick={hanleNav} className='block md:hidden  sm:mx-90'>
            {!nav? <AiOutlineClose size={30}/>:<AiOutlineMenu size={30}/>}
        </div>
        <div className={!nav? 'fixed left-0 top-0 w-[40%]  h-full border-r-black ease-in-out mr-100 bg-white duration-150':'fixed left-[-100%]'}>
        <ul className='pt-5  uppercase text-black m-4'>
        <img className='p-6'src={logo} alt=""/>
            <button className='p-6 m-4 border-b border-white-600'onClick={()=>navigate('/Home')}>Home</button>
            <button className='p-7  m-5 border-b border-white-600'onClick={()=>navigate('/Services')}>Services</button>
            <button className='p-7  m-6  border-b border-white-600'onClick={()=>navigate('/About')}>About</button>
        </ul>

        </div>
      </div>
      </div>
      </>

  )
}

export default Navbar
