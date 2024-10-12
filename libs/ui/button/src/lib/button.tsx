'use client'
import React, { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss'; // Import your SCSS module

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'; // Define variants for the button
}

export const Button: React.FC<ButtonProps>  = ({ children, className = '', variant = 'primary', ...props }) => {

  const buttonClass = variant === 'primary' ? styles.primaryButton : styles.secondaryButton;

  return (
    <button
      className={`${buttonClass} ${className}`}  // Combine styles and custom className provided for this button
      {...props}  // Spread props to pass other btn properties
    >
      {children}
    </button>
  );
};

export default Button;