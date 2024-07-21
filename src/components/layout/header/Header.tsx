import Image from 'next/image';

const Header = () => {
  return (
    <header className='fixed top-0 z-10 w-screen border-b border-gray-200 bg-white p-4'>
      <Image
        src='/abc-logo.svg'
        alt='ABC Health System Logo'
        className='dark:invert'
        width={153}
        height={38}
        priority
      />
    </header>
  );
};

export default Header;
