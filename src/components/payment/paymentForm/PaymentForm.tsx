'use client';

import { useState } from 'react';
import {
  Form,
  FormField,
  FormControl,
  Input,
  Button,
} from '@/components/shared';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface IPaymentInformation {
  cardNumber: string;
  cardExpirationDate: string;
  cardSecurityCode: string;
  cardHolderName: string;
  cardZipCode: string;
}

const PaymentInformationShema = z.object({
  cardNumber: z
    .string({ required_error: 'This field is required' })
    .regex(/^\d{16}$/, 'Card number must be 16 digits'),
  cardExpirationDate: z
    .string({ required_error: 'This field is required' })
    .length(4, { message: 'Expiry date must be in MM/YY format' }),
  cardSecurityCode: z
    .string({ required_error: 'This field is required' })
    .regex(/^\d{3}$/, 'Security code must be 3 digits'),
  cardHolderName: z
    .string({ required_error: 'This field is required' })
    .min(2, {
      message: 'Name must be at least 2 characters',
    })
    .max(60, {
      message: 'Too many characters',
    }),
  cardZipCode: z
    .string({ required_error: 'This field is required' })
    .regex(/^\d{5}$/, 'ZIP code must be 5 digits'),
});

interface PaymentFormProps {
  setActiveId: (value: string) => void;
  setFilled: (value: boolean) => void;
  setUserCard: (value: string) => void;
}

export const PaymentForm = ({
  setActiveId,
  setFilled,
  setUserCard,
}: PaymentFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const defaultPaymentInfo: IPaymentInformation = {
    cardNumber: '',
    cardExpirationDate: '',
    cardSecurityCode: '',
    cardHolderName: '',
    cardZipCode: '',
  };

  const form = useForm<z.infer<typeof PaymentInformationShema>>({
    resolver: zodResolver(PaymentInformationShema),
    defaultValues: defaultPaymentInfo,
  });

  async function onSubmit(data: z.infer<typeof PaymentInformationShema>) {
    setIsLoading(true);
    setErrorMsg(false);

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'example',
        body: data.cardHolderName,
        card: data.cardNumber,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('res', json);
        setIsLoading(false);
        setActiveId('review');
        setFilled(true);
        setUserCard(json.card as string);
      })
      .catch((error) => {
        setErrorMsg(true);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='flex w-full flex-col gap-y-3'>
          <FormField
            control={form.control}
            name='cardNumber'
            render={({ field, fieldState }) => (
              <FormControl>
                <Input
                  label='Card number'
                  id={field.name}
                  placeholder=''
                  error={fieldState?.error?.message}
                  maxLength={16}
                  cardZipCode
                  {...field}
                />
              </FormControl>
            )}
          />
          <div className='flex w-full items-start justify-between gap-4'>
            <FormField
              control={form.control}
              name='cardExpirationDate'
              render={({ field, fieldState }) => (
                <FormControl>
                  <Input
                    label='Expires (MM/YY)'
                    id={field.name}
                    placeholder=''
                    maxLength={5}
                    formatDate
                    error={fieldState?.error?.message}
                    {...field}
                  />
                </FormControl>
              )}
            />
            <FormField
              control={form.control}
              name='cardSecurityCode'
              render={({ field, fieldState }) => (
                <FormControl>
                  <Input
                    label='Security code (CVV)'
                    id={field.name}
                    placeholder=''
                    error={fieldState?.error?.message}
                    maxLength={3}
                    cardZipCode
                    {...field}
                  />
                </FormControl>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='cardHolderName'
            render={({ field, fieldState }) => (
              <FormControl>
                <Input
                  label='Name on card'
                  id={field.name}
                  placeholder=''
                  error={fieldState?.error?.message}
                  {...field}
                />
              </FormControl>
            )}
          />
          <FormField
            control={form.control}
            name='cardZipCode'
            render={({ field, fieldState }) => (
              <FormControl>
                <Input
                  label='Zip code'
                  id={field.name}
                  placeholder=''
                  error={fieldState?.error?.message}
                  maxLength={5}
                  cardZipCode
                  {...field}
                />
              </FormControl>
            )}
          />
          <Button
            text={isLoading ? 'Sending...' : 'Continue'}
            disabled={isLoading}
          />
          {errorMsg ? (
            <div className='mt-4 rounded-xl border border-error p-2 text-center text-error'>
              Something went wrong! Try checking your internet connection
            </div>
          ) : null}
        </div>
      </form>
    </Form>
  );
};
