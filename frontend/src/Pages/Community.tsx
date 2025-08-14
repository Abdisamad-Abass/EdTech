import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

export default function Community () {
  const mentors = [
    { //1
      image: assets.sarah.src,
      content: 'EduNova revolutionized my learning experience with its innovative approach. The interactive courses, combined with expert instructors, provided me with practical skills that I could immediately apply in my career.',
      name: 'Sarah L.',
      special: 'Data Analyst'
    },
    { //2
      image: assets.john.src,
      content: "I was amazed by how engaging EduNova's is. The flexibility to learn at my own pace, coupled with the support from  mentors, helped me excel . The platform’s  interactive content transformed my learning journey.",
      name: 'John M.',
      special: 'Software Engineer'
    },
    { //3
      image: assets.michael.src,
      content: 'Joining EduNova was the best decision I made for my  growth. The courses are meticulously structured and the community support is exceptional. The interactive elements and  guidance helped me gain skills that have opened new opportunities.',
      name: 'Michael T.',
      special: 'Marketing Specialist'
    },
  ]
  return (
    <div className='mt-20 md:px-28 px-14'>
      <div className='text-center'>
        <h1 className='font-bold text-4xl '>Read <span className='text-[#2266BE]'>Testimonials</span> from Our <br /> Community of Learners</h1>
        <p>Our community of learners has shared their experiences and successes with us, <br className='hide'/> providing valuable insights 
          into the impact of our courses. Read their testimonials <br className='hide'/> to see how our programs have helped them grow and achieve 
          their goals.</p>
      </div>

      {/* --- cards ----*/}
      <div className='flex flex-col md:flex-row items-center md:gap-4 gap-16 mt-16'>
        {mentors.map((mentor, index) => (
          <div key={index} className='card-community relative'>
            <Image src={mentor.image} alt="" className='absolute -top-10 left-16' width={77}
              height={80} unoptimized/>
            <div className='mt-18 px-10'>
              <p className='font-normal text-[17px] leading-5'>{mentor.content}</p>
              <div className=' flex items-center pt-6 pb-4'>
                <div>
                  <h2 className='font-bold text-[15px] leading-5'>{mentor.name}</h2>
                  <h1 className='font-bold text-[15px] leading-5 text-[#808080]'>{mentor.special}</h1>
                </div>
                <p className='ml-auto'><svg width="58" height="40" viewBox="0 0 58 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_42_308)"><path d="M15.4637 28.3667L14.1237 28.6334V33.3334H15.7904C20.4287 33.3334 23.967 32.0484 26.3054 29.5134C29.4504 26.1001 29.1337 21.7167 29.1237 21.6667V8.33341C29.1237 7.89139 28.9481 7.46746 28.6355 7.1549C28.323 6.84234 27.8991 6.66675 27.457 6.66675H15.7904C13.952 6.66675 12.457 8.16175 12.457 10.0001V21.6667C12.457 22.1088 12.6326 22.5327 12.9452 22.8453C13.2577 23.1578 13.6817 23.3334 14.1237 23.3334H20.9204C20.8844 24.1573 20.6383 24.9582 20.2054 25.6601C19.3604 26.9951 17.7654 27.9051 15.4637 28.3667Z" fill="#FCC21B"/></g><g clipPath="url(#clip1_42_308)">
                      <path d="M34.3338 28.3667L32.9938 28.6334V33.3334H34.6605C39.2988 33.3334 42.8371 32.0484 45.1755 29.5134C48.3205 26.1001 48.0038 21.7167 47.9938 21.6667V8.33341C47.9938 7.89139 47.8182 7.46746 47.5057 7.1549C47.1931 6.84234 46.7692 6.66675 46.3271 6.66675H34.6605C32.8221 6.66675 31.3271 8.16175 31.3271 10.0001V21.6667C31.3271 22.1088 31.5027 22.5327 31.8153 22.8453C32.1279 23.1578 32.5518 23.3334 32.9938 23.3334H39.7905C39.7545 24.1573 39.5084 24.9582 39.0755 25.6601C38.2305 26.9951 36.6355 27.9051 34.3338 28.3667Z" fill="#0F1A4F"/></g><defs><clipPath id="clip0_42_308"><rect width="37.74" height="40" fill="white" transform="translate(0.790039)"/></clipPath><clipPath id="clip1_42_308"><rect width="37.74" height="40" fill="white" transform="translate(19.6602)"/></clipPath></defs>
                  </svg>
                </p>
              </div>
            </div>  

          </div>
        ))}
      </div>

    </div>
  )
}
