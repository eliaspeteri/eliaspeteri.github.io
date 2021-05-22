import React, { useState, useEffect } from "react";
import StyledHome from "./Home.styled";

const data = require("./hello.json");

const Home = () => {
  const [index, setIndex] = useState(0);
  const randomInteger = () => {
    setIndex(Math.floor(Math.random() * data.length));
  };

  useEffect(() => {
    setInterval(randomInteger, 3000);
  }, []);

  return (
    <StyledHome>
      <span>{data[index].hello}</span>
    </StyledHome>
  );
};
export default Home;
