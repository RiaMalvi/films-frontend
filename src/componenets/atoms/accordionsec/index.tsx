import React from 'react'

interface AccordianSecProps {
    heading: string;
    className?: string;
    content: string;
}

const AccordianSec: React.FC<AccordianSecProps> = ({ heading, className, content }) => {
    return (
        <div className='bg-gray-800 p-4 flex flex-col'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl font-semibold text-white pb-2'>{heading}</h1>
            </div>
            <p className='text-white text-base'>{content}</p>
        </div>
    )
}

export default AccordianSec
