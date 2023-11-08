import React, { Suspense } from 'react'
import Techtop from './Techtop'
import Model3d from './Model3d'
import Team from './Team'
import Brochure from './Brochure'
import EventCards from './EventCards'
import { InfinitySpin } from 'react-loader-spinner'

function Footer() {
  return (
    <>
      <div className='bg-[#13080e]'>
        <Techtop />
        <div className='flex justify-center items-center'>
        <Suspense fallback={
        <InfinitySpin 
        width='200'
        color="#9400D3"
      />
        } >
          <Model3d />
        </Suspense>
        </div>
         <EventCards />
          <Brochure />
        <Team />
      </div>

    </>
  )
}

export default Footer
