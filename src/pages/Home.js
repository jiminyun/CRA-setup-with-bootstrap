import React from "react";
import { ProductConsumer } from "../context";
const Home = () => {
  return (
    <>
      <ProductConsumer>
        {value => {
          console.log(value);
          return <h1>Hello from home</h1>;
        }}
      </ProductConsumer>
    </>
  );
};

export default Home;
