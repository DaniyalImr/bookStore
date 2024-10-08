import React from "react";
import book from '../../public/book.jpg'

function Banner() {
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn{" "}
              <span className="text-blue-500"> something new everyday!!!</span>
            </h1>
            <p className="text-xl font-semibold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              natus necessitatibus, ducimus quod modi nisi, tempore magnam fuga
              optio neque et deserunt animi nesciunt. Incidunt deserunt
              doloremque ducimus iste iusto!
            </p>
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input type="text" className="grow" placeholder="you@example.com" />
            </label>
          </div>
          <button className="btn mt-6 bg-blue-500 text-white hover:bg-blue-600">
            Get Started
          </button>
        </div>
        <div className="w-full md:w-1/2 order-1">
          <img src={book} className="w-85 mt-24 h-85" alt="Book" />
        </div>
      </div>
    </>
  );
}

export default Banner;
