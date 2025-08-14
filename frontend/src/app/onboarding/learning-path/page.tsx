'use client'
import { assets } from '@/assets/assets'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Image from 'next/image'

export default function Page() {
  const [selected, setSelected] = useState<number | null>(0);
  const router = useRouter();
  const pathname = usePathname();

  const handleSelected = (index: number) => {
    setSelected(index)
  }

  const handleContinue = () => {
    router.push('/onboarding/payment') 
  }

  const steps = [
    {href: '/onboarding/details', class: 'slide-large'},
    {href: '/onboarding/learning-path', class: 'slide'},
    {href: '/onboarding/payment', class: 'slide'},
    {href: '/onboarding/success', class: 'slide'}
  ]
  const paths = [
    { //1
      image: assets.frontend.src,
      content: 'Frontend Development',
      icon: (<svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 1C23.5393 1 30 7.29867 30 15C30 22.7013 23.5393 29 15.5 29C7.46071 29 1 22.7013 1 15C1 7.29867 7.46071 1 15.5 1Z" stroke="white" strokeWidth="2"/>
             </svg>
            )
    },
    { //2
      image: assets.python.src,
      content: 'Backend Development',
      icon: (<svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 1C23.5393 1 30 7.29867 30 15C30 22.7013 23.5393 29 15.5 29C7.46071 29 1 22.7013 1 15C1 7.29867 7.46071 1 15.5 1Z" stroke="white" strokeWidth="2"/>
             </svg>
            )
    },
    { //3
      image: assets.fullstack.src,
      content: 'Fullstack Development',
      icon: (<svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 1C23.5393 1 30 7.29867 30 15C30 22.7013 23.5393 29 15.5 29C7.46071 29 1 22.7013 1 15C1 7.29867 7.46071 1 15.5 1Z" stroke="white" strokeWidth="2"/>
             </svg>
            )
    },
    { //4
      image: assets.cloud.src,
      content: 'Cloud Computing',
      icon: (<svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 1C23.5393 1 30 7.29867 30 15C30 22.7013 23.5393 29 15.5 29C7.46071 29 1 22.7013 1 15C1 7.29867 7.46071 1 15.5 1Z" stroke="white" strokeWidth="2"/>
             </svg>
            )
    },
  ]
  return (
    <div className='bg-[#EDF5FF] w-[800] h-[1100] py-10 flex flex-col items-center rounded-r-2xl'>
      
      {/* Page Header */}
      <h1 className='font-bold text-2xl leading-10'>Explore Our Learning Paths</h1>
      <h2 className='font-bold text-3xl leading-12'>Find Your Focus</h2>
      <p className='font-medium text-lg text-[#0000008A]'>Select a category that matches your career goals and interests.</p>
      
      {/* Learning Path Cards */}
      <div className='grid grid-cols-2 grid-rows-2 gap-14 mt-11'>
        {paths.map((path, index) => (
          <div key={index} className='card-community px-14 py-14 bg-linear-to-b from-[#0F1A4F] to-[#213CB5] relative flex flex-col items-center justify-center'>
            <Image src={path.image} alt="" className='' width={148} height={128}/>

             {/* Circle Button */}
             <div onClick={() => handleSelected(index)}>
              {selected === index ? (
                // Tick icon (selected)
                <svg className='absolute top-7 right-7' width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 1C23.5393 1 30 7.29867 30 15C30 22.7013 23.5393 29 15.5 29C7.46071 29 1 22.7013 1 15C1 7.29867 7.46071 1 15.5 1Z" fill="#2C6DC2" stroke="#2266BE" strokeWidth="2"/>
                  <path d="M23.5833 9.46875L13.5833 21.9687L9 16.2396L10.175 14.7708L13.5833 19.0208L22.4083 8L23.5833 9.46875Z" fill="white"/>
                </svg>
              ) : (
                // Empty icon (unselected)
                <p className='absolute top-7 right-7'>{path.icon}</p>
              )

              }
             </div>
             
            {/* Path Title */}
            <h1 className='text-white font-medium mt-3'>{path.content}</h1>
          </div>
        ))}
      </div>

      {/* Continue Button */}
      <button onClick={handleContinue} className="btn-gradient w-[350px] mt-14 bg-linear-to-r from-[#0F1A4F] to-[#213CB5]">Continue</button>

       {/* slider progress */}
      <div className='flex items-center gap-1 mt-8'>
          {steps.map((step, index) => (
            <div key={index} className={`${pathname === step.href ? 'bg-[#1a40ebce] rounded-full' : 'bg-[#0000001c] rounded-full'}`}>
              <p className={step.class}></p>
            </div>
          ))}
        </div>
    </div>
  )
}