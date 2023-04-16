import React from 'react'
import Counter from './Counter'
import Footer from './Footer'

function Home() {
  return (
    <div>
        <div className='flex justify-around my-10 mx-5'>
        <div className='leading-loose tracking-wide'>
            <p className='text-2xl text-white'>This is a simple webpage <br /> with a clickable button and
            <br /> a click count and also stores <br /> the previous clicks in the
              <br /> localstorage </p>
        </div>
        <div>
            <Counter />
        </div>
    </div>
    <div className='border-solid border-2 border-pink-400 border-x-transparent 
    border-b-transparent mt-60'>
        <Footer />
    </div>
    </div>
    
  )
}

export default Home;
