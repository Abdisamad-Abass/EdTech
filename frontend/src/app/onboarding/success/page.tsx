'use client'

import React from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  const pathname = usePathname()

  const steps = [
    { href: '/onboarding/details', class: 'slide-large' },
    { href: '/onboarding/learning-path', class: 'slide' },
    { href: '/onboarding/payment', class: 'slide' },
    { href: '/onboarding/success', class: 'slide' }
  ]

  const handleStart = () => {
    router.push('/dashboard/welcome') 
  }

  return (
    <div className='bg-[#FFFFFF] shadow-[#00000042] shadow-md w-[800px] h-[1100px] py-40 flex flex-col items-center rounded-r-2xl'>
      <div className='mb-5'>
        {/* Success checkmark SVG */}
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#2ECC71" strokeWidth="2" fill="#DFF5E3" />
          <path d="M7 13L10.5 16.5L17 10" stroke="#2ECC71" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <h1 className='font-bold text-3xl text-[#142987] mb-3'>Account Successfully Created!</h1>
      <p className='text-lg text-[#0000008A] mb-6 text-center w-[70%]'>
        Your account has been created successfully. You’re now ready to start exploring.
      </p>

      <button 
        onClick={handleStart}
        className='btn-gradient bg-gradient-to-r from-[#0F1A4F] to-[#213CB5] text-white px-8 py-3 rounded-full text-lg font-semibold'
      >
        Continue to Dashboard
      </button>

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
