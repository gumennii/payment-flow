import { ReactNode } from 'react';
import cn from '@/utils/cn';

type AccordionProps = {
  className?: string;
  children: ReactNode;
};

export const Accordion = ({ className, children }: AccordionProps) => (
  <div className={cn('text-primary', className)}>{children}</div>
);
