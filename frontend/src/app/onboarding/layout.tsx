'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const steps = [
  {
    title: 'Provide your details',
    content: 'Please provide your personal details',
    href: '/onboarding/details'
  },
  {
    title: 'Select your learning path',
    content: 'Please select your preferred learning path',
    href: '/onboarding/learning-path'
  },
  {
    title: 'Confirm payment information',
    content: 'Please confirm your payment details',
    href: '/onboarding/payment'
  },
  {
    title: 'Account successfully created',
    content: "You're free to start your journey!",
    href: '/onboarding/success'
  },
]

  return (
      <div className="mx-28 my-8 flex">
      <div className="bg-[#DCDCDC61] w-[850] h-[1100] rounded-tl-3xl flex flex-col px-5 py-3">
        <svg width="60" height="20" viewBox="0 0 56 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#FE4949"/><circle cx="28" cy="8" r="8" fill="#F1C40F"/><circle cx="48" cy="8" r="8" fill="#1F9935"/></svg>
        {/* --- paths --- */}
        <div className="mt-16 flex flex-col gap-20">
          {steps.map((step) => (
            <Link href={step.href} key={step.href}  className={`flex gap-3 ${pathname === step.href ? 'text-[#000000]' : 'text-[#0000008A]' }`}>
              <svg width="21" height="21"  viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.833008 9.99998C0.833008 4.93748 4.93717 0.833313 9.99967 0.833313C15.0622 0.833313 19.1663 4.93748 19.1663 9.99998C19.1663 15.0625 15.0622 19.1666 9.99967 19.1666C4.93717 19.1666 0.833008 15.0625 0.833008 9.99998ZM9.99967 17.5C9.01476 17.5 8.03949 17.306 7.12955 16.9291C6.21961 16.5522 5.39281 15.9997 4.69637 15.3033C3.99993 14.6068 3.44749 13.78 3.07058 12.8701C2.69367 11.9602 2.49967 10.9849 2.49967 9.99998C2.49967 9.01506 2.69367 8.0398 3.07058 7.12985C3.44749 6.21991 3.99993 5.39312 4.69637 4.69668C5.39281 4.00024 6.21961 3.44779 7.12955 3.07088C8.03949 2.69397 9.01476 2.49998 9.99967 2.49998C11.9888 2.49998 13.8965 3.29016 15.303 4.69668C16.7095 6.1032 17.4997 8.01086 17.4997 9.99998C17.4997 11.9891 16.7095 13.8968 15.303 15.3033C13.8965 16.7098 11.9888 17.5 9.99967 17.5Z" fill={pathname === step.href ? '#1A38BB' : '#00000094' }/><path d="M9.53583 14.0725L6 10.5358L7.17833 9.3575L9.53583 11.7142L14.2492 7L15.4283 8.17917L9.53583 14.0725Z" fill={pathname === step.href ? '#1A38BB' : '#00000094' }/>
              </svg>
              <div className="-mt-3">
                <h1 className="text-lg font-bold">{step.title}</h1>
                <p className="font-medium ">{step.content}</p>
               </div> 
            </Link>
          ))}
        </div>

        {/* --- copyrigt --- */}
        <div className="flex items-center text-[#00000091] font-medium text-[14px] mt-auto">
          <p>&copy; 2024</p>
          <a href="mailto:EduNova@outlook.com" className="hover:underline ml-auto">
            EduNova@outlook.com
          </a>
        </div>
      </div> 

      {/* Right Side */}
      <div className="w-full">
        {children}
      </div>

    </div>
  )
}