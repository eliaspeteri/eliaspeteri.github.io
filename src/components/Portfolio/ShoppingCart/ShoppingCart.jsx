import React, { useState } from "react";
import NavBar from "./Navbar";
import Counters from "./Counters";
import ErrorBoundary from "../../ErrorBoundary";
import "bootstrap/dist/css/bootstrap.min.css";

const ShoppingCart = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);
  const handleIncrement = (counter) => {
    const countersIndex = [...counters];
    const index = counters.indexOf(counter);
    countersIndex[index] = { ...countersIndex[index] };
    countersIndex[index].value = +1;
    setCounters(countersIndex);
  };

  const handleDecrement = (counter) => {
    const countersIndex = [...counters];
    const index = counters.indexOf(counter);
    countersIndex[index] = { ...countersIndex[index] };
    countersIndex[index].value -= 1;
    setCounters(countersIndex);
  };

  const handleReset = () => {
    const countersIndex = counters.map((c) => {
      // eslint-disable-next-line no-param-reassign
      c.value = 0;
      return c;
    });
    setCounters(countersIndex);
  };

  const handleDelete = (counterId) => {
    const countersIndex = counters.filter((c) => c.id !== counterId);
    setCounters(countersIndex);
  };

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div>
      <NavBar totalCounters={counters.filter((c) => c.value > 0).length} />
      <main className="container">
        <ErrorBoundary>
          <Counters
            counters={counters}
            onReset={handleReset}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
            onRestart={handleRestart}
          />
        </ErrorBoundary>
      </main>
      Built with React ⚛
    </div>
  );
};
export default ShoppingCart;
