import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import cn from '@/utils/cn';

import '@/styles/globals.css';
import { playfairDisplay } from '@/fonts';

import Header from '@/components/layout/header';

export const metadata: Metadata = {
  title: 'ABC Health System: Payment',
  description: 'ABC Health System Payment Process',
};

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang='en'>
      <body
        className={cn(playfairDisplay.variable, 'bg-background font-sans')}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
