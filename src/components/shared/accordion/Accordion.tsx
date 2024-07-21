import { FC, ReactNode } from 'react';
import cn from '@/utils/cn';

type AccordionProps = {
  title?: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

export const Accordion: FC<AccordionProps> = ({
  className,
  title,
  description,
  children,
}) => (
  <div className={cn('text-primary', className)}>
    {title && <h3 className='pb-4 text-3xl font-extrabold'>{title}</h3>}
    {description && <div className='text-lg pb-6'>{description}</div>}
    {children}
  </div>
);
