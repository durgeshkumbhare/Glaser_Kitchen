import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { products } from "../data";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Products = () => {

  return (
    <div className="bg-white  ">
      <Navbar />
      <div className="m-4">
        <h1 className="text-3xl font-serif font-bold my-8">Products</h1>
      </div>
     <div  className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-8'>
     {products.map((product) => {
        const { id, img, model, overAllSize, Bowl_size, finish, grade, price } =
          product;
        return (
          <Link
            key={id}
            to={`/product/${id}`}
            className='card mb-6 w-full shadow-xl hover:shadow-2xl transition duration-300'
          >
            <figure className='px-4 pt-4'>
              <img
                src={img}
                alt={model}
                className='rounded-xl h-64 md:h-48 w-full object-cover'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title capitalize tracking-wider'>{model}</h2>
              <span className='text-secondary'>{price}</span>
            </div>
          </Link>
        );
      })}
     </div>
      <Footer />
    </div>
  );
};

export default Products;

{
  /* <Link
key={product.id}
to={`/products/${product.id}`}
className='p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap  bg-base-100 shadow-xl hover:shadow-2xl duration-300 group'
>
<img
  src={image}
  alt={title}
  className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300'
/>
<div className='ml-0 sm:ml-16'>
  <h3 className='capitalize font-medium text-lg'>{title}</h3>
  <h4 className='capitalize text-md text-neutral-content'>
    {company}
  </h4>
</div>
<p className='font-medium ml-0 sm:ml-auto text-lg'>
  {dollarsAmount}
</p>
</Link> */
}
