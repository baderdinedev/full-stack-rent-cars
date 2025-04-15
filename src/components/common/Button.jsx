import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  rounded = 'lg',
  className = '',
  icon,
  ...props 
}) => {
  const variants = {
    primary: 'bg-primary-900 hover:bg-primary-800 text-white',
    secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white',
    outline: 'border-2 border-primary-900 text-primary-900 hover:bg-primary-50',
    ghost: 'text-primary-900 hover:bg-primary-100',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const roundedStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };

  return (
    <button
      className={`
        flex items-center justify-center gap-2
        font-medium transition-all duration-300
        ${variants[variant]} 
        ${sizes[size]}
        ${roundedStyles[rounded]}
        ${className}
      `}
      {...props}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;