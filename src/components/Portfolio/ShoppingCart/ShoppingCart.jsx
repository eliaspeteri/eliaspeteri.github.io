import React, { useState } from "react";
import NavBar from "./Navbar";
import Counters from "./Counters";
import ErrorBoundary from "../../ErrorBoundary";
const ShoppingCart = () => {
    const [counters, setCounters] = useState([
        { id: 1, value: 0 },
        // { id: 2, value: 0 },
        // { id: 3, value: 0 },
        // { id: 4, value: 0 },
    ]);
    const handleIncrement = (counter) => {
        const counters_i = [...counters];
        const index = counters.indexOf(counter);
        counters_i[index] = { ...counters_i[index] };
        counters_i[index].value++;
        setCounters(counters_i);
    };

    const handleDecrement = (counter) => {
        const counters_i = [...counters];
        const index = counters.indexOf(counter);
        counters_i[index] = { ...counters_i[index] };
        counters_i[index].value--;
        setCounters(counters_i);
    };

    const handleReset = () => {
        const counters_i = counters.map((c) => {
            c.value = 0;
            return c;
        });
        setCounters(counters_i);
    };

    const handleDelete = (counterId) => {
        const counters_i = counters.filter((c) => c.id !== counterId);
        setCounters(counters_i);
    };

    const handleRestart = () => {
        window.location.reload();
    };

    return (
        <div>
            <NavBar
                totalCounters={counters.filter((c) => c.value > 0).length}
            />
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
        </div>
    );
};
export default ShoppingCart;
