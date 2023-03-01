import React from 'react';
import Navbar from "../Components/Navbar";
import Hero from '../Components/Hero';
import MovieCollection from '../Components/MovieCollection';


export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <div className="middle">
        <Hero/>
        <MovieCollection/>
      </div>
    </div>
  );
}
