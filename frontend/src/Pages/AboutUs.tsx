import React from 'react'
import { assets } from '@/assets/assets';
import Image from "next/image";

export default function AboutUs () {
  const features = [
    {
      number: '1',
      heading: 'Sign Up',
      content: 'Easily create your account and get started.'
    },
     {
      number: '2',
      heading: 'Pick your path',
      content: 'Select a program tailored to your goals.'
    },
    {
      number: '3',
      heading: 'Connect with Mentors',
      content: 'Receive expert guidance and personalized support.'
    },
     {
      number: '4',
      heading: 'Earn Certification',
      content: 'Complete the course and earn your certification.'
    }
  ]
  return (
    <div className='bg-[#FFFFE2] flex md:flex-row flex-col px-20 md:px-28 mt-20 scroll-mt-20' id='about'>
      {/* ---col-1 ---*/}
      <div>
        <Image src={assets.study_group.src} alt="Study group" className=" md:w-[1400px] md:h-[500px]" width={1400}
          height={500} unoptimized/>
      </div>
      
      {/* ---col-2 ---*/}
      <div className='relative py-20 md:ml-20'>
        <h1 className="text-4xl font-extrabold">Achieve<span className="text-[#FCC21B]"> Mastery!</span></h1>
        <p className='font-medium text-lg leading-6 mt-3'>Begin your journey with our expertly designed programs to gain deep 
            knowledge and skills. Start now to unlock your potential and reach 
            new heights in your field.
        </p>
            
        <div className='mt-5'>
          {features.map((feature, index) => (
            <div key={index} className='flex items-center mt-3 relative'>
              <span className='w-10 h-10 text-white rounded-[50%] bg-[#FCC21B] text-xl font-bold p-3 inline-flex items-center justify-center'>{feature.number}</span>
              
              <div className='flex flex-col ml-10'>
                <h2 className='font-extrabold text-xl'>{feature.heading}</h2>
                <p className='text-[16px] md:text-lg'>{feature.content}</p>
              </div>
               
               {index !==features.length - 1 &&(
                 <div className='w-1 h-6.5 absolute top-11 left-4.5 bg-[#FCC21B]'></div>
               )}
            </div>
          ))}

          <button className='btn-gradient md:ml-48 ml-32 bg-linear-to-r from-[#DFAD1D] via-[#E18E22] to-[#E37B25]'>Learn More</button>
        </div>

        <Image src={assets.about_anim.src} alt="" className='absolute md:top-72 top-99 right-0 md:right-5 ' width={92} height={273} unoptimized/>
      </div>
      
    </div>
  )
}

