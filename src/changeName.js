/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const changeName = (props) => {
  const { name } = props;
  return (
    <div className="">
      <h1>My name is {name}</h1>
    </div>
  );
};

export default changeName;
