import { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react';
import cn from '@/utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: ReactNode;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ className, text, onClick, ...props }: ButtonProps) => {
  return (
    <button {...props} onClick={onClick} className={cn('button', className)}>
      {text}
    </button>
  );
};
