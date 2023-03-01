import React from 'react';
import './moviecollection.css';
import GaadiBox from '../Assests/GaadiBox.jpg'
import VarisuBox from '../Assests/VarisuBox.jpg'
import AvaBox from '../Assests/AvaBox.jpg'
import GindariBox from '../Assests/GindariBox.jpg'
import GajaBox from '../Assests/GajaBox.jpg'

export default function MovieCollection() {
  return (
    <div className='MovieCollection'> 
      <span className="movies">Movies</span>
      <span className="nowShow">Now Showing</span>
      <span className="comingSoon">Coming Soon</span>
      <hr className="solid" />




      <div className='card-container'>
        <div className='cards'>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <img src={GaadiBox} class="boximg" alt="Gaadi"/>
                <div class="card-body">
                  <h5 class="text">Gaadi</h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={VarisuBox} class="boximg" alt="Varisu"/>
                <div class="card-body">
                  <h5 class="text">Varisu</h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={AvaBox} class="boximg" alt="Avatar"/>
                <div class="card-body">
                  <h5 class="text">Avatar: The Way of Water [3D]</h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
              <img src={GindariBox} class="boximg" alt="Avatar"/>
                <div class="card-body">
                  <h5 class="text">Gindari 3</h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={GajaBox} class="boximg" alt="Gajaman"/>
                <div class="card-body">
                  <h5 class="text">Gajaman [3D]</h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
          </div>
     </div>
</div>





    </div>
  );
}
