import React from 'react'

export default function Tracker() {
    
  return (
    <div className='mt-9 flex h-[32vh]'>
      {/* --- column 1 ---*/}
      <div className='flex flex-col bg-[#FFFFFF80] w-48 gap-3 px-4 py-4 rounded-l-xl'>
        <div className='flex items-center gap-3'>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.2541 13.4053L11.5034 23L2.75262 13.4053C2.17543 12.7835 1.72078 12.0361 1.41731 11.2102C1.11384 10.3843 0.968121 9.49783 0.989328 8.60654C1.01053 7.71524 1.19821 6.83846 1.54053 6.03141C1.88286 5.22436 2.37241 4.50452 2.97837 3.91722C3.58433 3.32992 4.29358 2.88788 5.06143 2.61894C5.82929 2.34999 6.63913 2.25998 7.43995 2.35455C8.24078 2.44913 9.01524 2.72625 9.71457 3.16846C10.4139 3.61067 11.023 4.20839 11.5034 4.92399C11.9859 4.21359 12.5956 3.62109 13.2945 3.18357C13.9933 2.74605 14.7662 2.47293 15.5648 2.38131C16.3634 2.2897 17.1705 2.38154 17.9355 2.65111C18.7005 2.92068 19.4071 3.36217 20.0109 3.94794C20.6148 4.53371 21.1029 5.25116 21.4447 6.05538C21.7866 6.8596 21.9748 7.73328 21.9976 8.62175C22.0205 9.51021 21.8774 10.3943 21.5774 11.2188C21.2774 12.0432 20.8269 12.7902 20.2541 13.413" stroke="black" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.5031 4.91626L7.66095 9.16982C7.44221 9.41205 7.31934 9.74054 7.31934 10.083C7.31934 10.4256 7.44221 10.754 7.66095 10.9963L8.2945 11.6977C9.09957 12.5889 10.4064 12.5889 11.2114 11.6977L12.3782 10.406C12.7228 10.024 13.132 9.72098 13.5825 9.51424C14.0329 9.30749 14.5158 9.20107 15.0034 9.20107C15.4911 9.20107 15.9739 9.30749 16.4244 9.51424C16.8748 9.72098 17.284 10.024 17.6286 10.406L20.2539 13.3123M12.0865 17.1874L14.42 19.7708M15.0034 13.9581L17.337 16.5415" stroke="black" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className='text-[#0A0A1F] font-normal'>Communities</p>
        </div>

        {/* ---- Tech ---- */}
        <div className='pl-3 flex flex-col gap-4'>
            <div className='flex items-center gap-3'>
                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.19141 0.599609C12.3317 0.599845 15.7822 4.30652 15.7822 9C15.7822 13.6935 12.3317 17.4002 8.19141 17.4004C4.05094 17.4004 0.599609 13.6936 0.599609 9C0.599609 4.30638 4.05094 0.599609 8.19141 0.599609Z" stroke="#82567A" strokeWidth="1.2"/>
                <path d="M0.910156 12.9999C3.18544 11.8332 8.46409 9.69988 15.0169 12.4999" stroke="#82567A" strokeWidth="1.2"/>
                <path d="M0.910156 5.45404C3.18544 6.62071 8.91915 8.3 15.472 5.5" stroke="#82567A" strokeWidth="1.2"/>
                <path d="M8.19066 1C9.25245 3.5 11.3762 9.5 8.19067 17" stroke="#82567A" strokeWidth="1.2"/>
                </svg>
                <div className='flex flex-col'>
                    <h1 className='text-[#0A0A1F] font-normal '>TechSport</h1>
                    <p className='text-[#00000080] font-normal text-[12px]'>22 Members</p>
                </div>
            </div>

            <div className='flex items-center gap-3'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.85449 0.599609C12.9948 0.599845 16.4453 4.30652 16.4453 9C16.4453 13.6935 12.9948 17.4002 8.85449 17.4004C4.71402 17.4004 1.2627 13.6936 1.2627 9C1.2627 4.30638 4.71402 0.599609 8.85449 0.599609Z" stroke="#2FE1AC" strokeWidth="1.2"/>
                <path d="M1.57324 12.9999C3.84852 11.8332 9.12718 9.69988 15.68 12.4999" stroke="#2FE1AC" strokeWidth="1.2"/>
                <path d="M1.57324 5.45404C3.84852 6.62071 9.58223 8.3 16.135 5.5" stroke="#2FE1AC" strokeWidth="1.2"/>
                <path d="M8.85374 1C9.91551 3.5 12.0392 9.5 8.85375 17" stroke="#2FE1AC" strokeWidth="1.2"/>
                </svg>

                <div className='flex flex-col'>
                    <h1 className='text-[#0A0A1F] font-normal '>TechSters</h1>
                    <p className='text-[#00000080] font-normal text-[12px]'>42 Members</p>
                </div>
            </div>

            <div className='flex items-center gap-3'>
                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.19141 0.599609C12.3317 0.599845 15.7822 4.30652 15.7822 9C15.7822 13.6935 12.3317 17.4002 8.19141 17.4004C4.05094 17.4004 0.599609 13.6936 0.599609 9C0.599609 4.30638 4.05094 0.599609 8.19141 0.599609Z" stroke="#2C6DC2" strokeWidth="1.2"/>
                <path d="M0.910156 12.9999C3.18544 11.8332 8.46409 9.69988 15.0169 12.4999" stroke="#2C6DC2" strokeWidth="1.2"/>
                <path d="M0.910156 5.45404C3.18544 6.62071 8.91915 8.3 15.472 5.5" stroke="#2C6DC2" strokeWidth="1.2"/>
                <path d="M8.19066 1C9.25242 3.5 11.3761 9.5 8.19067 17" stroke="#2C6DC2" strokeWidth="1.2"/>
                </svg>
                <div className='flex flex-col'>
                    <h1 className='text-[#0A0A1F] font-normal '>React</h1>
                    <p className='text-[#00000080] font-normal text-[12px]'>62 Members</p>
                </div>
            </div>
            </div>

      </div>
      
      {/* --- column 2 ---*/}
      <div className='bg-[#FFFFFF] py-4 px-4 w-full shadow-[#0A0A1F05] shadow-md ml-0'>
        <div className='flex justify-between'>
            <p className='text-[#0A0A1F] font-normal text-[15px] underline decoration-2 underline-offset-4'>Assignments</p>
            <p className='text-[#0A0A1F] font-normal text-[15px] pl-8'>Course</p>
            <p className='text-[#0A0A1F] font-normal text-[15px] pl-20'>Status</p>
            <p className='text-[#0A0A1F] font-normal text-[15px] pl-10'>Due Date</p>
            <div>
                <svg className='ml-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.4">
                    <circle cx="4.8" cy="11.8" r="1.8" fill="#0A0A1F"/>
                    <circle cx="12.0002" cy="11.8" r="1.8" fill="#0A0A1F"/>
                    <circle cx="19.2004" cy="11.8" r="1.8" fill="#0A0A1F"/>
                    </g>
                    </svg>
            </div>
        </div>

        <div className='border-2 border-gray-300 w-full rounded-lg flex px-3 mt-3 text-[13px] py-3'>
            <p className='text-[#0A0A1F] font-normal'>Variables</p>
            <p className='text-[#0A0A1F] font-normal ml-12'>Introduction to javascript </p>
            <p className='text-[#EA8C10] font-normal ml-10 bg-[#F5D9B6] rounded-full px-2 py-1'>INCOMPLETE</p>
            <p className='text-[#0A0A1F] font-normal ml-14'>12/04/2025</p>
        </div>

        <div className='border-2 border-gray-300 w-full rounded-lg flex px-3 mt-2.5 text-[13px] py-3'>
            <p className='text-[#0A0A1F] font-normal'>Variables</p>
            <p className='text-[#0A0A1F] font-normal ml-12'>Introduction to javascript </p>
            <p className='text-[#1F9935] font-normal ml-10 bg-[#D2FF98] rounded-full px-2 py-1'>INCOMPLETE</p>
            <p className='text-[#0A0A1F] font-normal ml-14'>12/04/2025</p>
        </div>

        <div className='mt-5 flex items-center gap-2'>
            <p className=' text-[#0A0A1F]'>View More</p> 
            <svg width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.929423 3.30615L3.81048 2.33855C3.99225 2.2775 3.99225 2.02041 3.81048 1.95936L0.929423 0.991761" stroke="black" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
            
        </div>

      </div>
      

    </div>
  )
}
