import React, { useState, useEffect } from "react";
import DocumentTitle from "react-document-title";
import StyledHome from "./Home.styled";
import data from "../../resources/data/hello.json";

const Home = () => {
  const [index, setIndex] = useState(0);
  const randomInteger = () => {
    setIndex(Math.floor(Math.random() * data.length));
  };

  useEffect(() => {
    setInterval(randomInteger, 3000);
  }, []);

  return (
    <DocumentTitle title="Home">
      <StyledHome>
        <span>{data[index].hello}</span>
      </StyledHome>
    </DocumentTitle>
  );
};

export default Home;
