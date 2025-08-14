import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

export default function Languages() {
    const cards = [
        { //1
            language: 'Javascript',
            title: 'Introduction',
            image: assets.html.src,
            percent: 75,
            bgClass: 'bg-[#369FFF]',
            shadowClass: 'shadow-[0_4px_20px_#369FFF66]'
        },
        { //2
            language: 'Python',
            title: 'Fudamentals',
            image: assets.python.src,
            percent: 50,
             bgClass: 'bg-[#FF993A]',
            shadowClass: 'shadow-[0_4px_20px_#FF993A66]'
        },
        { //3
            language: 'Cloud Computing',
            title: 'Fudamentals',
            image: assets.cloud.src,
            percent: 25,
            bgClass: 'bg-[#8AC53E]',
            shadowClass: 'shadow-[0_4px_20px_#8AC53E66]'
        },
        { //4
            language: 'Data Structures',
            title: 'Introduction',
            image: assets.fullstack.src,
            percent: 75,
            bgClass: 'bg-[#FFD143]',
            shadowClass: 'shadow-[0_4px_20px_#FFD14366]',
           // borderClass: 'border-[#FFD143] border-[1]'
        },
    ]
  return (
    <div className='grid grid-cols-2 ml-12 gap-4'>
      {cards.map((card, index) => (
        <div key={index} className={`card-community border-none w-[100%] flex px-7 py-5 ${card.bgClass} ${card.shadowClass}`}  >
            <div>
               <h1 className='text-white font-bold text-xl'>{card.language}</h1> 
               <h3 className='font-medium text-lg text-[#F0F0F0]'>{card.title}</h3>

                {/* Circular Progress */}
          <svg className="w-24 h-24 mt-4" viewBox="0 0 36 36">
                <path
                className="text-[#006ED366]"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                className="text-white"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray={`${card.percent}, 100`}
                fill="none"
                d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
            <text
                x="18"
                y="21"
                className="fill-white text-[9px]"
                textAnchor="middle"
            >
                {card.percent}%
            </text>
            </svg>
            </div>
            <Image src={card.image} alt="" className='mt-5 ml-auto' width={130} height={120} unoptimized/>
        </div>
      ))}
    </div>
  )
}
