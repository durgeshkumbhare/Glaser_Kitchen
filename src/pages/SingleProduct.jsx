import React, { useState } from "react";
import styledpic from '../assets/product2_300.png'
import { products } from "../data";
import { Link, useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import './Style.css'


const SingleProduct = () => {
  const { productId } = useParams();

  const product = products.find((product) => product.id == productId);
  const {
    img,
    model,
    overAllSize,
    Bowl_size,
    small_size,
    finish,
    grade,
    price,
  } = product;

  return (
    <section className="p-4">
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-6  img-cover">
        {/* IMAGE */}
        {/* <img
          src={img}
          alt={model}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        /> */}
        <div style={{ width: "24rem", height: "24rem", marginLeft: '2rem' }}>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: img,
              },
              largeImage: {
                src: img,
                width: 1800,
                height: 1000,
              },
            }}
          />
        </div>
        {/* PRODUCT */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{model}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            Finish : {finish}
          </h4>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            Over All Size : {overAllSize}
          </h4>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            Bowl Size : {Bowl_size}
          </h4>
          {small_size ? (
            <h4 className="text-xl text-neutral-content font-bold mt-2">
              Small Size : {small_size}
            </h4>
          ) : (
            ""
          )}

          <h4 className="text-xl text-neutral-content font-bold mt-2">
            Grade : {grade}
          </h4>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            Price : {price}
          </h4>

          <div className="mt-8">
            <Link to="/" className="btn btn-secondary btn-sm mr-4">
              Back to Homepage
            </Link>
            <Link to="/products" className="btn btn-secondary btn-sm mr-4">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
