import Link from 'next/link';

export default function Home() {
  return (
    <main className='relative min-h-screen h-screen w-full bordex-box pt-16'>
      <div className='flex h-1/2 w-full items-center justify-center'>
        <div className='mx-auto flex max-w-sm flex-col items-center gap-y-4 px-2 sm:px-0'>
          <h1 className='font-serif text-3xl font-bold text-primary-foreground'>
            Hi, Taylor
          </h1>
          <p className='text-base text-center font-sans tracking-[0.2px]'>
            You have 6 medical bills ready from ABC Health System. You can pay
            your bills here or verify your identity to view full bill details.
          </p>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 h-1/2 w-screen rounded-t-[32px] bg-white p-8'>
        <div className='mx-auto max-w-sm'>
          <div className='mb-6 flex items-center justify-between'>
            <div className='text-base font-bold tracking-[0.2px] text-muted'>
              Total due
            </div>
            <div className='font-serif text-3xl font-bold text-primary-foreground'>
              $600
            </div>
          </div>
          <Link href='/payment' className='button'>
            Pay total
          </Link>
        </div>
      </div>
    </main>
  );
}
