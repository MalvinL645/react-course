/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import './App.css';
import { HelmetProvider, Helmet } from 'react-helmet-async';

function App() {
  const [name, setName] = useState('');
  return (
    <HelmetProvider>
      <Helmet>
        <title>Hello World</title>
      </Helmet>
      <div className="App">
        <ChangeName name={name} />
        <button
          onClick={() => {
            setName('hee');
          }}
        >
          change name
        </button>
      </div>
    </HelmetProvider>
  );
}

const ChangeName = (props) => {
  const { name } = props;
  return (
    <div className="">
      <h1>My name is {name}</h1>
    </div>
  );
};

export default App;
