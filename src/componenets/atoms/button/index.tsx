import React from 'react'
import clsx from 'clsx'

interface ButtonProps {
    children: React.ReactNode;  
    onClick?: () => void;
    className?: string;
    }

const Button: React.FC<ButtonProps> = ({children, onClick, className}) => {
  return (
    <button className={clsx("rounded-lg font-semibold text-lg mx-2 p-2",className)} onClick={onClick}>
        {children}
    </button> 
  )
}

export default Button
