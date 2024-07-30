import React from "react";
import fp1 from "../assets/fp1.png";
import featured_prod from "../assets/product2.png";

const fpshow = [
  { img: featured_prod, id: 1, price: 6000 },
  { img: featured_prod, id: 2, price: 7000 },
  { img: featured_prod, id: 3, price: 8000 },
];

const FeaturedProducts = () => {
  return (
    <div className=" border-solid border-b-2 border-black m-4 pb-2 ">
      <h1 className=" text-3xl font-bold font-serif mb-6 text-gray-700">
        Featured products
      </h1>
      <div className="grid md:grid-cols-2  gap-2">
        <div className=" place-items-center bg-teal-700  text-gray-200 p-4 flex flex-col items-start ">
          <h1 className="text-xl  font-medium mb-4 font-se">
            Granite Series
          </h1>
          <p className="font-serif tracking-wider ">
            Made from natural quartz and acrylic resins. Glaser quartz sinks
            comes in 8 models with 9 different colors. The stunning colorfulcl
            sinks add a unique dimension to your kitchen allowing you to match
            to match your sink to your kitchen decor
          </p>
        </div>
        <img src={fp1} alt="" className="bg-gray-700 mr-4  p-8 object-cover " />
      </div>
      <div className="flex flex-shrink-1 flex-wrap  pt-2 pb-6 ">
        {fpshow.map((prod) => {
          return (
            <div key={prod.id} className="relative group">
              <img
                src={prod.img}
                alt=""
                className=" sm:w-80 sm:h-72 mr-2 flex-shrink-1 hover:opacity-55 hover:cursor-pointer"
              />
              <p className="absolute text-gray-900 bottom-6 left-32 hidden group-hover:block font-serif text-2xl cursor-pointer  ">
                {prod.price} /-
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
