import * as React from 'react';
import { SVGProps } from 'react';

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 25 24'
    width='1em'
    height='1em'
    fill='none'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='m20.5 6-11 11-5-5'
    />
  </svg>
);
export default CheckIcon;
