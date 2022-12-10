import React from 'react';
import Navbar from '../Navbar/Navbar';
import Img from '../assets/img/food.jpg';

const LandingPage = () => {
  const categories = [
    { title: 'Sandwich' },
    { title: 'Breakfast & Brunch' },
    { title: 'Mexican' },
    { title: 'Chinese' },
  ];

  // const prices = [
  //   {
  //     position: 1,
  //     title: '$',
  //   },
  //   {
  //     position: 2,
  //     title: '$$',
  //   },
  //   {
  //     position: 3,
  //     title: '$$$',
  //   },
  //   {
  //     position: 4,
  //     title: '$$$$',
  //   },
  // ];

  return (
    <>
      <div>
        <Navbar />
        <div className='flex justify-between items-center bg-yellow-300'>
          <div className='w-[250px] h-screen bg-black px-4 py-4'>
            <h1 className='text-base font-semibold text-white text-left uppercase mb-10'>
              Filters
            </h1>
            {/* button price */}
            <div className='flex justify-center items-center mt-3 mb-6'>
              <button className='bg-blue-600 px-4 py-2 border-white border-r-2 rounded-l-full'>
                <span className='text-lg font-semibold text-center text-white'>
                  $
                </span>
              </button>
              <button className='bg-blue-600 px-4 py-2 border-white border-r-2'>
                <span className='text-lg font-semibold text-center text-white'>
                  $$
                </span>
              </button>
              <button className='bg-blue-600 px-4 py-2'>
                <span className='text-lg font-semibold text-center text-white'>
                  $$$
                </span>
              </button>
              <button className='bg-blue-600 px-4 py-2 rounded-r-full border-white border-l-2'>
                <span className='text-lg font-semibold text-center text-white'>
                  $$$$
                </span>
              </button>
            </div>
            {/* Category*/}
            <h1 className='text-xl font-semibold uppercase text-white text-left mt-10'>
              Category
            </h1>
            {/* button categories */}
            <div className='mt-3'>
              {categories.map((val, i) => {
                return (
                  <button
                    key={i}
                    className='bg-[red] px-4 py-2 rounded-full text-center mb-2 mr-2'
                  >
                    <p className='text-center text-sm font-normal text-white'>
                      {val.title}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
          <div className='flex justify-center items-center'>
            {/* card image */}
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
                  voluptate voluptatem recusandae omnis consectetur
                  reprehenderit corporis provident. At pariatur dolores quae
                  facilis.
                </p>
                <div className='flex justify-evenly items-center'>
                  <div className='flex justify-center items-end'>
                    <p className='text-white text-base font-semibold mr-2'>
                      Delivery
                    </p>
                    <p className='text-white text-base font-semibold'>
                      Takeout
                    </p>
                  </div>
                  <a href='/' className='px-3 py-2 bg-[yellow] rounded-md'>
                    View Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='flex justify-start bg-orange-500'></div> */}
        {/* <div className='flex items-center justify-center bg-yellow-500 border-black border-2'>
        </div> */}
        {/* sidebar */}
        {/* <section className='flex justify-center items-center mt-4 bg-pink-600'></section> */}
      </div>
    </>
  );
};

export default LandingPage;
