'use client';

import { useCallback, ReactNode } from 'react';
import cn from '@/utils/cn';

type AccordionItemProps = {
  title: string;
  children: ReactNode;
  id: string;
  className?: string;
  isOpen?: boolean;
  onClick?: (id: string) => void;
  number: string;
  showEdit?: boolean;
};

export const AccordionItem = ({
  title,
  children,
  id,
  className,
  isOpen = false,
  onClick = () => null,
  number,
  showEdit = false,
}: AccordionItemProps) => {
  const toggleAccordion = useCallback(() => {
    if (onClick) {
      onClick(id);
    }
  }, [onClick, id]);

  return (
    <div
      className={cn(
        'rounded-none border-b border-solid border-gray-200',
        className
      )}
      id={id}
    >
      <button
        onClick={toggleAccordion}
        className='text-[20px] flex w-full flex-row items-center justify-between bg-inherit px-4 py-4 font-bold hover:cursor-default'
      >
        <div
          className={cn('flex w-[90%] items-center text-start text-primary', {
            'text-muted': !isOpen,
          })}
        >
          <span
            className={cn(
              'mr-3 flex h-6 w-6 text-[16px] items-center justify-center rounded-full bg-button text-white',
              { 'bg-gray-200 text-input': !isOpen || showEdit },
              { 'bg-button text-white': showEdit && isOpen }
            )}
          >
            {number}
          </span>
          {title}
        </div>
        <div
          className='flex items-center text-[14px] text-button hover:cursor-pointer'
          onClick={() => onClick}
        >
          {showEdit && !isOpen ? 'Edit' : null}
        </div>
      </button>
      <div
        className={cn(
          'overflow-hidden transition-[max-height] duration-500 ease-in-out',
          {
            'max-h-0': !isOpen,
            'max-h-auto': isOpen,
          }
        )}
      >
        <div className={cn('text-base px-4 pb-4 text-primary')}>{children}</div>
      </div>
    </div>
  );
};
