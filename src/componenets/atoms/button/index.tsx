import React from 'react'
import clsx from 'clsx'

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, disabled }) => {
  return (
    <button className={clsx("rounded-lg font-semibold text-lg mx-2 p-2", className)} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
