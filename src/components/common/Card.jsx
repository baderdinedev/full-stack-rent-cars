import React from 'react';

const Card = ({
  children,
  className = '',
  hoverEffect = true,
  rounded = 'xl',
  shadow = 'soft',
  ...props
}) => {
  const shadows = {
    none: 'shadow-none',
    soft: 'shadow-soft hover:shadow-hard',
    hard: 'shadow-hard',
    inner: 'shadow-inner-lg',
  };

  const roundedStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    full: 'rounded-full',
  };

  return (
    <div
      className={`
        bg-white dark:bg-dark-800
        transition-all duration-300
        ${shadows[shadow]}
        ${roundedStyles[rounded]}
        ${hoverEffect ? 'hover:-translate-y-1' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;