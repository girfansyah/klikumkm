import React from 'react';
import Logod from '@/assets/logo-d.png';
import Logom from '@/assets/logo-m.png';
import useMediaQuery from '@/hooks/useMediaQuery';

function Header() {
  const isDesktop = useMediaQuery('(min-width:960px)');
  return (
    <header className='items-center justify-center bg-black p-4 inline-flex w-full mx-auto'>
      <a href='/'>
        {isDesktop ? (
          <img src={Logod} alt='' className='h-15 w-28' />
        ) : (
          <img src={Logom} alt='' className='w-15 h-10' />
        )}
      </a>
    </header>
  );
}

export default Header;
