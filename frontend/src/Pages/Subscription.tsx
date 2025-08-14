import React from 'react'

export default function Subscription () {
  return (
    <div className='bg-linear-to-tl from-[#89BAFA] via-[#5A94DE] to-[#2C6DC2] md:mx-28 mt-28 md:rounded-4xl flex items-center justify-center'>
        <div className='py-20'>
            <h1 className='text-white pl-20 font-semibold text-2xl leading-8'>Subscribe To Our Newsletter <br className=''/> and Stay Updated</h1>
            <p className='font-semibold pl-20 text-[15px] leading-5 mt-3'>Stay updated with the latest news, course updates, <br /> 
            and exclusive offers delivered straight to your inbox.</p>
            <div className='relative'>
                <input type="text" placeholder='Enter your email' className='md:w-[635] w-[400] h-[40] md:h-[81] mt-7 pl-10 md:text-xl font-semibold text-[#00000094] leading-5 bg-white rounded-[40px]'/>
                <button className=' btn-signin bg-gradient-to-b from-[#0F1A4F] to-[#0F1A4F] md:px-20 absolute md:right-0 right-20 top-7 md:h-[81]'>Send</button>
            </div>    
        </div>
    </div>
  )
}

