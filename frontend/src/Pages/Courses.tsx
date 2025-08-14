import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

export default function Courses () {
    const courses = [
        {   //1
            image: assets.computing.src,
            course: 'Cloud Computing Course',
            type: 'Mastering core cloud computing fu..',
            name: 'Abdisamad Abass',
            status: 'Free',
            category: 'Development',
            rate: '5.0',
            stars: ( <svg width="91" height="15" viewBox="0 0 91 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 12.0553L12.135 15L10.905 9.45L15 5.71579L9.6075 5.23421L7.5 0L5.3925 5.23421L0 5.71579L4.095 9.45L2.865 15L7.5 12.0553Z" fill="#FF9100"/><path d="M26.5 12.0553L31.135 15L29.905 9.45L34 5.71579L28.6075 5.23421L26.5 0L24.3925 5.23421L19 5.71579L23.095 9.45L21.865 15L26.5 12.0553Z" fill="#FF9100"/><path d="M45.5 12.0553L50.135 15L48.905 9.45L53 5.71579L47.6075 5.23421L45.5 0L43.3925 5.23421L38 5.71579L42.095 9.45L40.865 15L45.5 12.0553Z" fill="#FF9100"/><path d="M64.5 12.0553L69.135 15L67.905 9.45L72 5.71579L66.6075 5.23421L64.5 0L62.3925 5.23421L57 5.71579L61.095 9.45L59.865 15L64.5 12.0553Z" fill="#FF9100"/><path d="M83.5 12.0553L88.135 15L86.905 9.45L91 5.71579L85.6075 5.23421L83.5 0L81.3925 5.23421L76 5.71579L80.095 9.45L78.865 15L83.5 12.0553Z" fill="#FF9100"/>
                     </svg>
            ),
        },
        {   //2 
            image: assets.programming.src,
            course: 'Programming Course',
            type: 'Swift programming for iOS develop..',
            name: 'Abdisamad Abass',
            status: 'KES.2500',
            category: 'Development',
            rate: '4.0',
            stars: ( <svg width="91" height="15" viewBox="0 0 91 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 12.0553L12.135 15L10.905 9.45L15 5.71579L9.6075 5.23421L7.5 0L5.3925 5.23421L0 5.71579L4.095 9.45L2.865 15L7.5 12.0553Z" fill="#FF9100"/><path d="M26.5 12.0553L31.135 15L29.905 9.45L34 5.71579L28.6075 5.23421L26.5 0L24.3925 5.23421L19 5.71579L23.095 9.45L21.865 15L26.5 12.0553Z" fill="#FF9100"/><path d="M45.5 12.0553L50.135 15L48.905 9.45L53 5.71579L47.6075 5.23421L45.5 0L43.3925 5.23421L38 5.71579L42.095 9.45L40.865 15L45.5 12.0553Z" fill="#FF9100"/><path d="M64.5 12.0553L69.135 15L67.905 9.45L72 5.71579L66.6075 5.23421L64.5 0L62.3925 5.23421L57 5.71579L61.095 9.45L59.865 15L64.5 12.0553Z" fill="#FF9100"/><path d="M83.5 12.0553L88.135 15L86.905 9.45L91 5.71579L85.6075 5.23421L83.5 0L81.3925 5.23421L76 5.71579L80.095 9.45L78.865 15L83.5 12.0553Z" fill="black" fillOpacity="0.43"/>
                     </svg>

                     
            ),
        },
        {   //3
            image: assets.computing_2.src,
            course: 'Cloud Computing Course',
            type: 'Mastering core cloud computing fu..',
            name: 'Abdisamad Abass',
            status: 'KES.3200',
            category: 'Development',
            rate: '5.0',
            stars: ( <svg width="91" height="15" viewBox="0 0 91 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 12.0553L12.135 15L10.905 9.45L15 5.71579L9.6075 5.23421L7.5 0L5.3925 5.23421L0 5.71579L4.095 9.45L2.865 15L7.5 12.0553Z" fill="#FF9100"/><path d="M26.5 12.0553L31.135 15L29.905 9.45L34 5.71579L28.6075 5.23421L26.5 0L24.3925 5.23421L19 5.71579L23.095 9.45L21.865 15L26.5 12.0553Z" fill="#FF9100"/><path d="M45.5 12.0553L50.135 15L48.905 9.45L53 5.71579L47.6075 5.23421L45.5 0L43.3925 5.23421L38 5.71579L42.095 9.45L40.865 15L45.5 12.0553Z" fill="#FF9100"/><path d="M64.5 12.0553L69.135 15L67.905 9.45L72 5.71579L66.6075 5.23421L64.5 0L62.3925 5.23421L57 5.71579L61.095 9.45L59.865 15L64.5 12.0553Z" fill="#FF9100"/><path d="M83.5 12.0553L88.135 15L86.905 9.45L91 5.71579L85.6075 5.23421L83.5 0L81.3925 5.23421L76 5.71579L80.095 9.45L78.865 15L83.5 12.0553Z" fill="#FF9100"/>
                     </svg>
            ),
        },
    ]
  return (
    <div className='mt-14 md:px-28 px-14 scroll-mt-28' id='courses'>
      <div className=' md:w-[45%]'>
        <h2 className='font-extrabold text-3xl leading-16 text-[#0F1A4F]'>COURSES</h2>
        <h1 className='font-extrabold text-4xl text-[#0F1A4F] leading-12'>Dive into Our Courses</h1>
        <p className='font-normal text-xl leading-8'>Explore Engaging Lessons, Tailored Programs, and Hands-on Learning Experiences 
            that Empower You to Unlock Your Full Potential and Achieve Success in Your Educational Journey.
        </p>
      </div>

      <div className='flex flex-col md:flex-row items-center gap-6 mt-20'>
        {courses.map((course, index) => (
            <div key={index} className='card-course overflow-hidden'>
                <Image src={course.image} alt="" width={500}
              height={250} unoptimized/>
                <div className='px-3 mt-3'>
                    <h6 className='font-semibold text-[17px] leading-7 text-[#00000094]'>{course.course}</h6>
                    <h2 className='font-bold text-[23px] leading-8'>{course.type}</h2>
                    <div className='flex items-center'>
                        <p className='font-semibold text-[17px] leading-7 text-[#00000094]'>{course.name}</p>
                        <h3 className='font-bold text-[17px] leading-8 ml-auto'>{course.status}</h3>
                    </div>
                    <div className='flex items-center mt-5'>
                        <button className={`btn-signin ${index ===0 ? 'bg-gradient-to-b from-[#F7C5C5] to-[#F7C5C5] text-[#EA3030EB]' : index ===1 ? 'bg-gradient-to-b from-[#FED8B9] to-[#FED8B9] text-[#DF5910]' : 'bg-gradient-to-b from-[#CFD4FA] to-[#CFD4FA] text-[#0C31D3]'}`}>{course.category}</button>
                        <p className='flex items-center ml-auto gap-1'><span className='font-bold text-[15px] leading-8'>{course.rate}</span>{course.stars}</p>
                    </div>
                </div>    
            </div>
        ))}
      </div>
    </div>
  )
}
