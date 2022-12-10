import React from 'react';
import Navbar from '../Navbar/Navbar';
import Img from '../assets/img/food.jpg';

const LandingPage = () => {
  return (
    <>
      <div>
        <Navbar />
        <section className='flex justify-center items-center mt-4'>
          <div className='bg-[blue] w-[800px] h-[250px] px-4 py-4 rounded-md flex justify-center items-center'>
            <img
              src={Img}
              alt='img'
              className='w-[200px] h-[200px] object-cover rounded-sm'
            />
            <div className='w-[600px] h-[200px]'>
              <h1 className='text-2xl text-left uppercase font-semibold text-white px-4 mb-3'>
                tahu bulat
              </h1>
              <p className='text-[red] uppercase text-base font-semibold px-4'>
                closed
              </p>
              <p className='text-sm text-left font-normal text-white px-2 py-2 mb-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                ab recusandae quas dolore! Quas dolorum similique, consequatur
                voluptate voluptatem recusandae omnis consectetur reprehenderit
                corporis provident. At pariatur dolores quae facilis.
              </p>
              <div className='flex justify-evenly items-center'>
                <div className='flex justify-center items-end'>
                  <p className='text-white text-base font-semibold mr-2'>
                    Delivery
                  </p>
                  <p className='text-white text-base font-semibold'>Takeout</p>
                </div>
                <a href='/' className='px-3 py-2 bg-[yellow] rounded-md'>
                  View Website
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
