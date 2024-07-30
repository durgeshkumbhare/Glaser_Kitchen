import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-200 h-[100vh] pt-16 text-center">
      <h1 className="text-teal-600  capitalize font-serif text-lg">
        Know everything... about us
      </h1>
      <p className="text-3xl font-serif mt-4">
        About <span className=" text-4xl font-bold text-gray-700">Glaser</span>
      </p>
      <p className="w-[50rem] mx-auto mt-3 text-gray-700 tracking-wider">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        laudantium quas sint explicabo facilis, vel illum delectus velit quia!
        Praesentium deleniti sint error dolore distinctio obcaecati amet
        accusantium in incidunt. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Possimus, vel cumque. Labore ab non obcaecati nemo
        modi vel quas laborum quasi. Et recusandae molestias rerum sequi
        voluptates voluptas quibusdam vitae! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Culpa quia nesciunt illum deserunt
        molestias iure quos, atque eos sequi corrupti aliquid officia asperiores
        consectetur? Praesentium consequatur nisi soluta nam laborum?
      </p>
      <div className="mt-8">
        <Link to='/' className=" bg-teal-700 mt-5 mr-8 px-3 py-1 rounded text-white font-serif tracking-wide hover:bg-teal-800 capitalize ">
          Back to HomePage
        </Link>
        <Link to='/products' className=" bg-teal-700 mt-5 mr-8 px-3 py-1 rounded text-white font-serif tracking-wide hover:bg-teal-800   capitalize ">
          See Our Products
        </Link>
      </div>
    </div>
  );
};

export default About;
