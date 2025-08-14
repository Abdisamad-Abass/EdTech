'use client';

import React from 'react';

export default function DashboardCharts() {
    const lines = [
        {number1: 4, number2: 0},
        {number1: 5, number2: 0},
        {number1: 6, number2: 0},
        {number1: 7, number2: 0},
        {number1: 8, number2: 0},
        {number1: 9, number2: 0},
        {number1: 10, number2: 0},
    ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full mt-5">

        {/* Statistics Card --- col-1 */}
        <div className="bg-white rounded-xl h-[265px] relative shadow-md shadow-[#0A0A1F08] px-4">
          <h2 className="text-lg font-semibold pt-5">Statistics</h2>
          <div className="w-full flex gap-6.5 mt-5 ">
            {/* Graph Lines (Mock SVG) */}
           {lines.map((line, index) => (
            <div key={index} className='flex flex-col items-center'>
                <p className='text-[10px]'>{line.number1}</p>
                <p className='text-[10px]'>{line.number2}</p>
                <div className='bg-gray-100 w-0.5 h-30 rounded-sm mt-2 '></div>
            </div>
           ))}
          </div>
          <div className=''>
            <svg className='absolute bottom-19 left-5' width="210" height="92" viewBox="0 0 218 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.40723 83C1.40723 83 14.2206 62.6448 32.0301 85.9972C43.3979 98.5076 52.8711 66.9341 66.6072 71.1042C80.3432 75.2743 97.6333 111.453 103.079 71.1042C109.989 19.9011 125.496 32 133.393 52.041C146.356 84.9402 158.005 85 168.917 49.0623C177.307 21.4307 188.811 50.8495 198.758 56.211C218.178 66.6788 215.878 21.4355 216.283 2" stroke="#318E87" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>

            <svg className='absolute bottom-12 ' width="230" height="92" viewBox="0 0 224 92" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.1" d="M2.2002 85.9972C2.2002 85.9972 17.3923 62.6448 35.2018 85.9972C46.5696 98.5076 56.0427 66.9341 69.7788 71.1042C83.5149 75.2743 100.805 111.453 106.25 71.1042C113.161 19.9011 127.033 27.573 136.565 52.041C148.42 82.4745 162.034 87 172.089 49.0623C179.526 21 191.982 50.8495 201.929 56.211C221.349 66.6788 221.428 21.4355 221.833 2" stroke="#318E87" strokeWidth="3" strokeLinecap="round"/>
              </svg>

              <svg className='absolute top-24 right-12' width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.66797 1C6.1012 1.00025 7.63184 2.56223 7.63184 5C7.63184 7.43777 6.1012 8.99975 4.66797 9C3.23464 9 1.70312 7.43797 1.70312 5C1.70312 2.56203 3.23464 1 4.66797 1Z" stroke="#318E87" strokeWidth="2"/>
              </svg>

              <svg className='absolute bottom-21 left-4' width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.66797 1C6.1012 1.00025 7.63184 2.56223 7.63184 5C7.63184 7.43777 6.1012 8.99975 4.66797 9C3.23464 9 1.70312 7.43797 1.70312 5C1.70312 2.56203 3.23464 1 4.66797 1Z" stroke="#318E87" strokeWidth="2"/>
              </svg>
          </div>
        </div>



        {/* Weekly Insights Card -- col-2 */}
        <div className="bg-[#FFFFFF80] rounded-xl h-[265px] border-[#FFFFFF80] border px-10 pb-5">
          <h2 className="text-lg font-semibold pt-5">Weekly Insights</h2>
          <div className="flex justify-between text-sm mt-4">
            <div>
              <p className='text-[14px]'>This Week</p>
              <p className=" font-normal text-[#0A0A1F] text-[15px]">+72.0%</p>
            </div>
            <div className='bg-black opacity-10 w-0.5 h-8 rounded-2xl'></div>
            <div>
              <p>Last Week</p>
              <p className="font-normal text-[#0A0A1F] text-[15px]">-60.0%</p>
            </div>
          </div>

          {/* Toggle Switch */}
          <div className="flex items-center gap-2 mt-5">
            <div className="w-10 h-5 bg-blue-200 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute top-0 left-0 shadow-md"></div>
            </div>
            <p className="text-[12px] text-[#0A0A1F]">Show in chart form</p>
          </div>

          {/* Bar Chart */}
          <div className="flex items-end gap-1 h-24">
            {/* Activity */}
            <div className='flex flex-col'>
              <p className="text-sm">Activity</p>
              <p className="text-[15px] text-[#0A0A1F] font-semibold">14 H <span className="text-[12px] font-normal">15 m</span></p>
            </div>
            
            <div className="w-[18px] h-8 bg-[#8B5E83] ml-auto"></div>
            <div className="w-[18px] h-16 bg-[#62D2FF] "></div>
            <div className="w-[18px] h-12 bg-[#172B85] "></div>
          </div>

        </div>




        {/* Report Card --- col-3 */}
        <div className="bg-linear-to-b from-[#FFFFFF00] to-[FFFFFF00] h-[265px] rounded-xl shadow-md px-4 py-4">
          <h2 className="text-lg text-[#0A0A1F] font-semibold ">Report Card</h2>

          {/* Bar Graph */}
          <div className="bg-[#f9fafb] px-5 rounded-lg py-2">
            <div className='flex py-1'>
              <div className='font-medium text-[#0a0a1f7c] gap-2 flex flex-col'>
                <p>80</p>
                <p>55</p>
                <p>35</p>
                <p>10</p>
              </div>
            
              <div className='ml-5 mt-11 flex flex-col'>
                <div className='flex'>
                  <div className="w-4 h-[70] bg-[#172B85] "></div>
                <div className="w-4 h-3 bg-[#b9bfda] mt-auto ml-1 "></div>
                </div>
                <p className='text-[#0a0a1f7c] font-medium'>Aug</p>
              </div>

              <div className='ml-5 mt-17 flex flex-col'>
                <div className='flex'>
                  <div className="w-4 h-12 bg-[#172B85] "></div>
                <div className="w-2 h-[29] bg-[#b9bfda] mt-auto "></div>
                </div>
                <p className='text-[#0a0a1f7c] font-medium'>Sep</p>
              </div>

              <div className='ml-5 mt-12 flex flex-col'>
                <div className='flex'>
                  <div className="w-4 h-[68] bg-[#172B85] mt-auto"></div>
                  <div className="w-4 h-[38] bg-[#b9bfda] mt-auto ml-1"></div>
                </div>
                <p className='text-[#0a0a1f7c] font-medium'>Oct</p>
              </div>
              
            </div>
            <button className="w-full mt-3 bg-gradient-to-b from-[#2C6DC2] via[#172B85] to-[#0F1A4F] text-white py-2 rounded-md shadow hover:opacity-50 cursor-pointer transition">
            View Grades
            </button>            
          </div>

        </div>


      </div>
  );
}
