import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

export default function Mentors () {
  return (
    <div className='flex flex-col md:flex-row justify-between bg-linear-to-b from-[#FFF6D2] to-[#FCC21BB2] mt-20 md:px-28 px-14 py-32'>
        {/* --- Mentors col1 --*/}
        <div className='md:w-[50%]'>
            <div className='flex items-center gap-14'>
                <Image src={assets.Mentor1.src} alt="" className=''  width={200} 
            height={216} unoptimized/>
                <Image src={assets.Mentor2.src} alt="" className=''  width={267} 
            height={273.1} unoptimized/>
            </div>
            <div className='flex items-center gap-14 mt-3'>
                <Image src={assets.Mentor3.src} alt="" className=''  width={259} 
            height={224} unoptimized/>
                <Image src={assets.Mentor4.src} alt="" className='' width={200} 
            height={216} unoptimized/>
            </div>
        </div>

        {/* --- content col2 --*/}
        <div className=' md:w-[50%]'>
            <h3 className='font-extrabold text-xl leading-20 text-[#0F1A4F]'>MEET YOUR MENTORS</h3>
            <h1 className='flex items-center font-extrabold -mt-5 text-[40px] md:leading-20 gap-3'>Expert Guidance <span><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.825 8.29991L31.6983 16.1749C32.1597 16.6361 32.4755 17.2226 32.6068 17.8616C32.738 18.5007 32.6789 19.1642 32.4366 19.7699L28.495 29.6249C28.2738 30.1766 27.9092 30.6591 27.4389 31.0225C26.9685 31.3859 26.4096 31.6169 25.82 31.6916L17.355 32.7499C17.1372 32.7755 16.9094 32.8066 16.6716 32.8432L15.9316 32.9632L15.545 33.0332L14.34 33.2666L13.515 33.4416L12.2733 33.7216L10.6816 34.1016L8.09497 34.7616L7.0183 35.0516C6.74659 35.1263 6.46048 35.1316 6.18618 35.067C5.91189 35.0024 5.65821 34.87 5.44838 34.6819C5.23855 34.4938 5.07931 34.256 4.98524 33.9904C4.89117 33.7248 4.86529 33.4398 4.90997 33.1616L4.96663 32.9182L5.4583 31.0649L5.8983 29.3182L6.2783 27.7266L6.55663 26.4849L6.73163 25.6582L6.96663 24.4549L7.09997 23.6932L7.20663 22.9799L8.30663 14.1799C8.3815 13.5901 8.61276 13.031 8.97643 12.5607C9.34011 12.0903 9.82298 11.7258 10.375 11.5049L20.23 7.56324C20.8357 7.32102 21.4992 7.26186 22.1382 7.3931C22.7773 7.52435 23.3637 7.83855 23.825 8.29991ZM17.6416 17.6416C17.2206 18.0629 16.9201 18.5894 16.7715 19.1662C16.6229 19.7431 16.6316 20.3492 16.7966 20.9216C16.6751 20.9927 16.5631 21.0789 16.4633 21.1782L9.69997 27.9416C9.65565 27.9866 9.62501 28.0432 9.61163 28.1049L9.4633 28.7466L9.16663 29.9849L9.0233 30.5699C9.00863 30.6262 9.00892 30.6853 9.02416 30.7414C9.03939 30.7975 9.06903 30.8486 9.11014 30.8897C9.15125 30.9308 9.20239 30.9605 9.2585 30.9757C9.3146 30.9909 9.37371 30.9912 9.42997 30.9766L10.625 30.6849L11.8966 30.3882C11.9579 30.3741 12.014 30.3429 12.0583 30.2982L18.8216 23.5349C18.9208 23.4356 19.0071 23.3242 19.0783 23.2032C19.643 23.3656 20.2407 23.3758 20.8106 23.2327C21.3806 23.0897 21.9026 22.7985 22.3237 22.3888C22.7449 21.979 23.0503 21.4652 23.2089 20.8994C23.3675 20.3335 23.3737 19.7359 23.2269 19.1669C23.0801 18.5979 22.7855 18.0778 22.3729 17.6594C21.9604 17.2409 21.4445 16.939 20.8777 16.7841C20.3108 16.6293 19.7131 16.627 19.1451 16.7776C18.5771 16.9282 18.059 17.2263 17.6433 17.6416H17.6416ZM25.405 5.16824C25.6917 4.88103 26.0735 4.70834 26.4785 4.68257C26.8836 4.65679 27.2841 4.7797 27.605 5.02824L27.7616 5.16824L34.8333 12.2382C35.1354 12.5375 35.3117 12.9409 35.3261 13.3658C35.3405 13.7908 35.192 14.2052 34.9109 14.5242C34.6297 14.8432 34.2373 15.0427 33.8139 15.0819C33.3905 15.1211 32.9682 14.9969 32.6333 14.7349L32.475 14.5949L25.405 7.52491C25.0925 7.21236 24.917 6.78851 24.917 6.34657C24.917 5.90463 25.0925 5.48079 25.405 5.16824Z" fill="black"/>
            </svg></span></h1>
            <p className='font-medium leading-8 text-xl text-[#000000DB]'>Our mentors are seasoned industry experts dedicated to guiding you with personalized support and real-world insights. With their expertise by your side, you&apos;ll have the confidence and knowledge to achieve your learning goals and excel in your chosen field.</p>
        </div>
    </div>
  )
}
