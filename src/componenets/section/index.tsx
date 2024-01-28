import React from 'react'
import clsx from 'clsx'

interface SectionProps {
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({children,className}) => {
  return (
    <div className={clsx('bg-black w-full border-t-4 border-gray-500 ps-20 pe-20 pb-24 flex items-center justify-between')}>
      {children}
    </div>
  )
}

export default Section
