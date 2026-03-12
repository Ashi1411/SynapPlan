import React from 'react'
import { features } from '../../Data/explanation'

export default function FeatureExplanation() {
  return (
    <div>
        <div className='grid grid-cols-3 gap-20 mx-20 mb-40 -mt-20'>
            {features.map((item, i) => {
                return (
                    <div style={{background : item.background}} className='flex flex-col items-center justify-center p-4 rounded-3xl'>
                        <div style={{background : "var(--feature-icons-background)"}} className='rounded-full p-4 m-4 mb-8'>
                            {/* icon */}
                            icon
                        </div>
                        <div className='text-center p-4'>
                            <h1 style={{fontSize : "var(--feature-heading-size)"}} className='font-semibold'> {item.heading} </h1>
                            <p style={{fontSize : "var(--feature-paragraph-size)"}} className=''> {item.paragraph} </p>
                        </div>
                        
                    </div>
                )
            })}
        </div>
    </div>
  )
}
