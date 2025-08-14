import React from 'react'

export default function Price () {
    const plans = [
        { //1
            title: 'Free',
            heading: 'FREE',
            features: [
                'Introductory courses', 
                'Basic resources', 
                'Limited support', 
                'Sample materials',
            ]
        },
        { //2
            title: 'Basic',
            heading: 'KSH.5,000',
            features: [
                'Core course access',
                'Standard resources', 
                'Email support', 
                'Course completion certificate', 
            ]
        },
        { //3
            title: 'Standard',
            heading: 'KSH.10,000',
            features: [
                'Full course access', 
                'Advanced resources', 
                'Priority support', 
                'Personalized feedback', 
                'Progress tracking', 
            ]
        },
        { //4
            title: 'Premium',
            heading: 'KSH.15,000',
            features: [
                'Unlimited course access',
                'Exclusive content', 
                'One-on-one mentoring', 
                'Early access to new features', 
                'Personalized learning plans',
            ]
        },
    ]
  return (
    <div className='bg-[#EEF5FF] mt-32 py-9 md:px-28 px-14'>
        <div>
            <h1 className='font-extrabold text-[#0F1A4F] text-3xl leading-20'>PRICING</h1>
            <h2 className='font-extrabold text-[#0F1A4F] text-4xl leading-16'>Cost-effective solutions</h2>
            <p className='font-normal text-[17px] leading-7'>EduNova offers flexible and cost-effective pricing models to fit your budget and learning needs. <br />  
                Choose from our options to find the best value for your educational goals and start your journey <br className='hide'/> with ease.
            </p>
        </div>
      
      {/* --- price cards --- */}
      <div className='text-center flex flex-col md:flex-row items-center gap-5 mt-11'>
        {plans.map((plan, index) => (
          <div key={index} className='card-community rounded-xl border-[3] border-[#0830E4] py-7 w-[350] flex flex-col items-center text-center'>
            <h1 className='font-medium text-[19px] leading-8'>{plan.title}</h1>
            <hr className='border-[1] border-[#0000004A] mt-3 w-full' />
            <h2 className='font-bold text-3xl leading-8 mt-5'>{plan.heading}</h2>

            <ul className='list-disc list-inside text-left ml-12 font-normal mt-4 text-lg leading-8'>
              {plan.features.map((feature,index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className='btn-gradient mt-5'>Get Started</button>
          </div>
        ))}
      </div>

    </div>
  )
}