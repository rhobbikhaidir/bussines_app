import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFood } from '../store/reducer';
import Loading from '../Loading/Loading';
import FoodItems from './FoodItems';
import Select from 'react-select';
import { useState } from 'react';
import Pagination from './Pagination';

const LandingPage = () => {
  const [activePage, setActivePage] = useState(1);
  const { loader, bussinesItems, totalCount } = useSelector((state) => state);
  const [limit, setLimit] = useState(5);

  const categories = [
    { title: 'Sandwich' },
    { title: 'Breakfast & Brunch' },
    { title: 'Mexican' },
    { title: 'Chinese' },
    { title: 'Pizza' },
  ];

  const valueSelect = [
    { value: 5, label: '5' },
    { value: 10, label: '10' },
    { value: totalCount, label: 'All' },
  ];

  const dispatch = useDispatch();

  const getAllFoodBussines = (price = '', categories = '', term = '') => {
    dispatch(
      getAllFood({ limit: limit, page: activePage, price, categories, term })
    );
  };

  useEffect(() => {
    getAllFoodBussines();
  }, [dispatch, limit, activePage]);

  let totalPost = totalCount / limit;

  console.log(totalPost, 'total cuy');
  const paginate = (pageNumber) => setActivePage(pageNumber);
  const paginateFront = () => setActivePage(activePage + 1);
  const paginateBack = () => setActivePage(activePage - 1);

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
              <button className='bg-blue-600 px-4 py-2  rounded-l-full'>
                <span className='text-xs font-semibold text-center text-white'>
                  $
                </span>
              </button>
              <button className='bg-blue-600 px-4 py-2 '>
                <span className='text-xs font-semibold text-center text-white'>
                  $$
                </span>
              </button>
              <button className='bg-blue-600 px-4 py-2'>
                <span className='text-xs font-semibold text-center text-white'>
                  $$$
                </span>
              </button>
              <button className='bg-blue-600 px-4 py-2 rounded-r-full '>
                <span className='text-xs font-semibold text-center text-white'>
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
          <div className='w-full flex justify-center items-start bg-[#F1F1F1]'>
            <div className='flex flex-col mt-4'>
              <Select
                options={valueSelect}
                className='w-[100px]'
                onChange={(e) => setLimit(e.value)}
                defaultValue={valueSelect[0]}
              />
              {bussinesItems?.map((item, index) => {
                return (
                  <FoodItems
                    key={`${index}-${item.id}`}
                    title={item.name}
                    categories={item.categories}
                    isClosed={item.is_closed}
                    desc={`${item.alias} - ${item.transactions}`}
                    location={item.location?.display_address}
                  />
                );
              })}
              <div className='text-center py-5'>
                <Pagination
                  postsPerPage={limit}
                  totalPosts={totalPost}
                  totalCount={totalCount}
                  paginate={paginate}
                  currentPage={activePage}
                  paginateBack={paginateBack}
                  paginateFront={paginateFront}
                />
              </div>
            </div>
          </div>
        </div>
        {loader && <Loading />}

        <div></div>
      </div>
    </>
  );
};

export default LandingPage;
