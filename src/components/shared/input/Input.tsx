'use client';

import * as React from 'react';
import cn from '@/utils/cn';
import { AlertCircleIcon, CheckIcon } from '@/components/shared/icons';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  error?: string;
  placeholder?: string;
  value?: string;
  cardZipCode?: boolean;
  formatDate?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      id,
      error,
      placeholder,
      value,
      cardZipCode = false,
      formatDate = false,
      ...props
    },
    ref
  ) => {
    let inputValue = value;

    const formatData = (input: string) => {
      const cleanedInput = input.replace(/\D/g, '');
      const formattedInput = cleanedInput.replace(/(\d{2})(\d{2})/, '$1/$2');
      return formattedInput;
    };

    if (cardZipCode && value) {
      inputValue = value.toString().replace(/\D/g, '');
    }

    if (formatDate && value) {
      inputValue = formatData(value);
    }

    return (
      <div
        className={cn(
          'flex w-full flex-col items-start justify-start',
          className
        )}
      >
        {label && (
          <label
            htmlFor={id}
            className='text-[14px] font-bold tracking-[0.2px] text-muted'
          >
            {label}
          </label>
        )}
        <div className='relative mt-2 w-full rounded-xl shadow-sm'>
          <input
            value={inputValue}
            type={type}
            className={cn(
              'focus-visible:ring-ring text-base file:text-lg h-[48px] w-full rounded-xl border border-input bg-white px-4 py-3 ring-offset-background file:bg-transparent file:font-medium placeholder:font-normal placeholder:text-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50',
              {
                'border border-error text-error placeholder:text-error focus-visible:ring-0 focus-visible:ring-offset-0':
                  error,
              }
            )}
            placeholder={placeholder}
            id={id}
            ref={ref}
            {...props}
          />
          {error ? (
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
              <AlertCircleIcon
                aria-hidden='true'
                className='h-6 w-6 text-error'
              />
            </div>
          ) : null}
          {value && !error ? (
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
              <CheckIcon
                aria-hidden='true'
                className='h-6 w-6 text-[#227C6C]'
              />
            </div>
          ) : null}
        </div>
        {error ? <p className='mt-2 text-[14px] text-error'>{error}</p> : null}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
