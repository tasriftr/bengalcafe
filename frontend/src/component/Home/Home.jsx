import React, { Fragment } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product.jsx";
import MetaData from "../MetaData";

const product = {
  name: "3in 1 Coffee premix",
  images: [
    {
      url: "https://i.yourimageshare.com/kRTrLi3SXo.webp",
    },
  ],
  price: "1000tk",
  _id: "123456",
};

const Home = () => {
  return (
    <Fragment>
      <MetaData title="Home" />
      <div className="banner">
        <p>Welcome to bengal cafe</p>
        <h1>bengal cafe</h1>
        <div></div>
        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Product</h2>
      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </Fragment>
  );
};

export default Home;
