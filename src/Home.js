import React from 'react';
import Search from './Search';
import Movies from './Movies';
import { Route } from 'react-router-dom';

const Home = () => {
 
  return (
    <>
      <Search/>
      <Movies/>
    </>
  );
};

export default Home;