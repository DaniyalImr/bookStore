import React from 'react'

function Cards({item}) {
  return (
    <>
      <div className='mt-4 my-3 p-3'>
        <div className="card bg-base-100 w-80 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img
              src={item.image}
              alt={item.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge bg-blue-500 text-white">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-2 badge badge-outline hover:bg-blue-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
