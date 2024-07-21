import * as React from 'react';
import { SVGProps } from 'react';

const AlertCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='1em'
    height='1em'
    fill='none'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm9-11C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1Zm-1.5 7c-.002-1 .5-2 1.5-2s1.498 1 1.5 2c.002 1 0 6-1.5 6-1.489 0-1.498-4.922-1.5-5.976V8Zm.5 8a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z'
      clipRule='evenodd'
    />
  </svg>
);
export default AlertCircleIcon;
