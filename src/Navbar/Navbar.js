import React, { useState } from 'react';
import Search from '../assets/icons/search.png';
import logoNav from '../assets/icons/logo-nav.png';

const Navbar = () => {
  const [item, setItem] = useState('');
  const [location, setLocation] = useState('');

  return (
    <>
      <section>
        <div className='bg-[#FFFF] w-full h-auto px-4 py-6 flex justify-center items-center'>
          <div className='w-[800px] flex justify-end items-center'>
            <img
              src={logoNav}
              alt='logo-nav'
              className='w-[45px] h-[45px] object-cover mr-5'
            />
            <form className='flex items-center'>
              <input
                type='text'
                placeholder='Searching something ...'
                name='item'
                value={item}
                required
                onChange={(e) => setItem(e.target.value)}
                className='w-[300px] outline-none py-2 rounded-l-md border-r-2 border-gray-300 text-center shadow-sm bg-gray-200'
              />
              <input
                type='text'
                placeholder='Location ...'
                name='location'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className='w-[300px] outline-none py-2 text-center shadow-sm bg-gray-200'
              />
              <button
                type='submit'
                className='bg-blue-800 px-4 py-3 text-center rounded-r-md text-white text-base'
              >
                <img
                  src={Search}
                  alt='logo-search'
                  className='w-[16px] h-[16px] object-contain'
                />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
