import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Img from '../assets/img/food.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFood } from '../store/reducer';
import Loading from '../Loading/Loading';

const FoodItem = (props) => {
  return (
    <section className='flex justify-center items-center mt-4'>
      <div className='bg-[#ffffff] w-[800px] h-[250px] px-4 py-4 rounded-md flex justify-center items-center drop-shadow-md'>
        <img
          src={Img}
          alt='img'
          className='w-[200px] h-[200px] object-cover rounded-sm'
        />
        <div className='w-[600px] h-[200px]'>
          <h1 className='text-2xl text-left uppercase font-semibold text-black px-4 mb-3'>
            {props.title}
          </h1>
          <div className='px-4 '>
            {props.categories?.map((item, index) => {
              return (
                <span className='px-2 mr-1 bg-[#ebebeb] p-1 text-black rounded-sm'>
                  {item.title} {item.alis}
                </span>
              );
            })}
          </div>
          <p
            className={`${
              props.isClosed ? 'text-[red]' : 'text-[#008055]'
            } uppercase text-base font-semibold px-4 pt-2`}
          >
            {props.isClosed ? 'closed' : 'open'}
          </p>
          <p className='text-sm text-left font-normal text-[#6E7072] px-4 py-2 mb-3'>
            {props.desc}
          </p>
          <div className='flex justify-evenly items-center'>
            <div className='flex justify-center items-end'>
              <p className='text-[#2d2e2f] text-base font-semibold mr-2'>
                Location : {props.location}
              </p>
              {/* <p className="text-[#2d2e2f] text-base font-semibold">Takeout</p> */}
            </div>
            <button
              href='/'
              className='px-3 py-2 bg-white rounded-md drop-shadow-md'
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

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
  const { loader, bussinesItems } = useSelector((state) => state);
  console.log(loader, bussinesItems, 'ini loader');
  // const [page, setPage] = useState(1)
  const dispatch = useDispatch();

  const getAllFoodBussines = (page, price = '', categories = '') => {
    dispatch(getAllFood({ limit: 4, page: page, price, categories }));
  };

  useEffect(() => {
    getAllFoodBussines(1);
  }, [dispatch]);

  return (
    <>
      <div>
        <Navbar />
        {/* wrapper jumbo */}
        <div className='flex h-full'>
          <div className='w-[250px] h-[80rem] bg-black px-4 py-4'>
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
          {/* wrapper foodItem */}
          <div className='w-full flex flex-col justify-center items-center bg-gray-400'>
            {bussinesItems?.map((item, index) => {
              return (
                <FoodItem
                  key={`${index}-${item.id}`}
                  title={item.name}
                  categories={item.categories}
                  isClosed={item.is_closed}
                  desc={`${item.alias} - ${item.transactions}`}
                  location={item.location?.display_address}
                />
              );
            })}
          </div>
        </div>
        {loader && <Loading />}
      </div>
    </>
  );
};

export default LandingPage;
