import React from 'react';
import './moviecollection.css';

export default function MovieCollection() {
  return (
    <div className='MovieCollection'> 
      <span className="movies">Movies</span>
      <span className="nowShow">Now Showing</span>
      <span className="comingSoon">Coming Soon</span>
      <hr className="solid" />
    </div>
  );
}
