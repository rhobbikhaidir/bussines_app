import React from 'react';

const BussinessItems = (props) => {
  return (
    <>
      <section className='flex justify-center items-center mt-4'>
        <div
          className='bg-[#ffffff] w-[800px] h-[250px] px-4 py-4 rounded-md flex justify-center items-center drop-shadow-md'
        >
          <img
            src={props.img}
            alt='img'
            className='w-[200px] h-[200px] object-cover rounded-sm'
          />
          <div className='w-[600px] h-[200px]'>
            <h1 className='text-lg text-left uppercase font-semibold text-black px-4 mb-3 hover:underline'>
              {props.title}
            </h1>
            <div className='px-4 '>
              {props.categories?.map((item, index) => {
                return (
                  <span key={index} className='px-2 mr-1 bg-[#ebebeb] p-1 text-black rounded-sm'>
                    {item.title} {item.alis}
                  </span>
                );
              })}
            </div>
            <p
              className={`${
                props.isClosed ? 'text-[red]' : 'text-[#008055]'
              } uppercase text-xs font-semibold px-4 pt-3`}
            >
              {props.isClosed ? 'Closed' : 'Open'}
            </p>
            <p className='text-xs text-left font-normal text-[#000] px-4 py-2 mb-3'>
              {props.desc}
            </p>
            <div className='flex justify-between items-center mx-3'>
              <div className='flex justify-center items-end'>
                <p className='text-[#2d2e2f] text-base font-semibold mr-2'>
                 location : {props.location}
                </p>
                {/* <p className="text-[#2d2e2f] text-base font-semibold">Takeout</p> */}
              </div>
              <button
                onClick={props.onClick}
                className='px-3 py-2 bg-white rounded-md drop-shadow-md'
              >
                View Detail
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BussinessItems;
