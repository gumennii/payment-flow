import Link from 'next/link';
import { PaymentMethodVisaIcon } from '@/components/shared/icons';

interface IReviewProps {
  cardNumber?: string;
}

export const Review = ({ cardNumber }: IReviewProps) => {
  return (
    <div className='flex flex-col gap-6'>
      <p className='text-[20px]'>
        You’re about to make a payment of{' '}
        <span className='font-bold'>$600.00</span>
      </p>
      <div className='flex flex-col gap-1'>
        <p className='text-[14px] font-bold tracking-[0.2px] text-muted'>
          Payment method
        </p>
        <div className='flex items-center justify-start'>
          <PaymentMethodVisaIcon className='mr-3 h-6 w-6' />
          <div className='text-[14px] tracking-[0.2px]'>
            {cardNumber
              ? `Card ending in ••••${cardNumber.slice(-4)}`
              : 'Check your data entry is correct'}
          </div>
        </div>
      </div>
      <Link href='/payment/success' className='button'>
        Pay $600.00
      </Link>
    </div>
  );
};
