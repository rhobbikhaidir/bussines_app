import React, { useState } from 'react';

const Navbar = () => {
  const [item, setItem] = useState('');
  const [location, setLocation] = useState('');

  return (
    <>
      <section>
        <div className='bg-[red] w-full h-auto px-4 py-8 flex justify-center items-center'>
          <div className='w-[800px]'>
            <form>
              <input
                type='text'
                placeholder='Searching something ...'
                name='item'
                value={item}
                required
                onChange={(e) => setItem(e.target.value)}
                className='w-[300px] outline-none py-2 rounded-l-md mr-1'
              />
              <input
                type='text'
                placeholder='Location ...'
                name='location'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className='w-[300px] outline-none py-2'
              />
              <button
                type='submit'
                className='bg-blue-800 py-2 px-4 text-center rounded-r-md text-white text-base'
              >
                search
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
