import React, { useState } from 'react';
import Search from '../assets/icons/search.png';

const Navbar = () => {
  const [item, setItem] = useState('');
  const [location, setLocation] = useState('');

  return (
    <>
      <section>
        <div className='bg-[#DC1919] w-full h-auto px-4 py-8 flex justify-center items-center'>
          <div className='w-[800px] flex justify-end items-center'>
            <form>
              <input
                type='text'
                placeholder='Searching something ...'
                name='item'
                value={item}
                required
                onChange={(e) => setItem(e.target.value)}
                className='w-[300px] outline-none py-2 rounded-l-md border-r-2 border-gray-300 text-center'
              />
              <input
                type='text'
                placeholder='Location ...'
                name='location'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className='w-[300px] outline-none py-2 text-center'
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
