import React, { Fragment } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product.jsx";

const product = {
  name: "3in 1 Coffee premix",
  images: [
    {
      url: "https://chocolateshopbd.com/wp-content/uploads/2022/07/Nescafe-3in1-Original-Premix-Coffee1-600x600.png",
    },
  ],
  price: "1000tk",
  _id: "123456",
};

const Home = () => {
  return (
    <Fragment>
      <div className="banner">
        <p>Welcome to bengal cafe</p>
        <h1>bengal cafe</h1>
        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Product</h2>
      <div className="container" id="container"></div>
      <Product product={product} />
    </Fragment>
  );
};

export default Home;
