import React from 'react'
import Typewriter from 'typewriter-effect';
import { Fade } from 'react-awesome-reveal';

function Techtop() {
  return (
      <>
      <div className='bg-[#13080E] relative overflow-x-hidden overflow-hidden'>
        
      <div className='absolute right-[-19rem] sm:right-[-15rem] z-0'>
        <img src="https://res.cloudinary.com/de1hkb0kq/image/upload/v1698856478/techfest/falhxnhnrsb05lajy3bl.png" alt="logo"  width='100px' className='w-[27rem]   z-0'/>
        </div>

        <div className='absolute left-[-20rem] sm:left-[-14rem] z-0'>
          <img src="https://res.cloudinary.com/de1hkb0kq/image/upload/v1698856478/techfest/falhxnhnrsb05lajy3bl.png" alt="logo"  width='100px' className='w-[27rem]   z-0'/>
        </div>
        <Fade cascade={true} damping={0.2}>
         <h1 className='text-[2.5rem] sm:text-6xl lg:text-8xl text-white pt-14 pb-2 flex justify-center ' style={{fontFamily:"ethnocentricregular"}}>YUGANTRAN</h1>
          <h2 className='text-[2rem] sm:text-6xl text-black strTxt py-6 flex justify-center stroke-cyan-500 stroke-2' style={{fontFamily:"ethnocentricregular"}}>
        Techfest 2023
        </h2>
          <h3 className='text-[1.2rem] sm:text-4xl text-white py-2 flex justify-center' style={{fontFamily:"ethnocentricregular"}}>23-24 NOVEMBER 2023</h3>
        </Fade>
      </div>
        
      </>
  )
}

export default Techtop
