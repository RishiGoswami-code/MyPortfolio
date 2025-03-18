import React from 'react';

const Navbar = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
     <div className='max-w-7xl mx-auto'>
      <div className='flex justify-between items-center py-5 mx-auto c-space'>
        <a href="/" className='text-2xl font-bold text-neutral-400 hover:text-white transtion-colors duration-300 ease-in-out'>Chandan Giri</a>

      </div>
     </div>
     <div className='nav-sidebar max-w-7xl mx-auto '>
      
     </div>
    </header>
  );
}

export default Navbar;
