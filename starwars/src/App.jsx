import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router';
import Header from '@/components/Header';
import MovieList from '@/components/MovieList/MovieList';
import MovieDetail from '@/components/MovieDetail/MovieDetail';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route exact path='/' element={<MovieList />} />
        <Route path='/films/:id' element={<MovieDetail />} />
      </Routes>
    </Fragment>
  );
};

export default App;
