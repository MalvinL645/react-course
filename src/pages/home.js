import React, { useState, useEffect } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('yoi');
  }, [count]);
  return (
    <div>
      <h1>Welcome Home</h1>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Home;
