import React, { useState, useEffect } from 'react';

const NumberCounter = ({ endValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 5000; // Set the duration of the counting animation in milliseconds
    const step = Math.ceil((endValue / duration) * 16); // Adjust the step based on the duration

    const interval = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + step;

        if (newCount >= endValue) {
          clearInterval(interval);
          return endValue;
        }

        return newCount;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [endValue]);

  return <div>{count}</div>;
};

export default NumberCounter;
