'use client';

import React, { useState } from 'react';
import { PaymentForm, Review } from '@/components/payment';
import { Accordion, AccordionItem } from '@/components/shared';

export default function Page() {
  const [activeId, setActiveId] = useState<string | null>('paymentInformation');
  const [filledForm, setFilledForm] = useState(false);
  const [userCard, setUserCard] = useState('');

  return (
    <div className='mx-auto max-w-xl bg-white pt-20 md:mt-24 md:rounded-xl md:p-6'>
      <Accordion>
        <AccordionItem
          title='Payment information'
          id='paymentInformation'
          isOpen={activeId === 'paymentInformation'}
          number='1'
          showEdit={filledForm}
          onClick={() => setActiveId('paymentInformation')}
        >
          <PaymentForm
            setActiveId={setActiveId}
            setFilled={setFilledForm}
            setUserCard={setUserCard}
          />
        </AccordionItem>
        <AccordionItem
          title='Review and pay'
          id='review'
          isOpen={activeId === 'review'}
          number='2'
          className='border-none'
        >
          <Review cardNumber={userCard} />
        </AccordionItem>
      </Accordion>
    </div>
  );
}
