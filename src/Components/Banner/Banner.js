import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from 'axios';
import requests from '../../request';

export default function Banner() {

  const [movie,setMovie]=useState([]);

  const movieBannerBaseURl = "https://api.themoviedb.org/3";
  const completemovieBannerURL=movieBannerBaseURl+requests.fetchMotionOriginals

  useEffect(()=>{

    async function fetchBanner(){

      const request=await axios.get(completemovieBannerURL);
      setMovie(request.data.results[
        Math.floor(Math.random()*request.data.results.length-1)
      ]);
      
      return request;
    }
    fetchBanner();
  },[]);

  console.log(movie);

  function truncate(str, n){

    return str?.length > n ? str.substr(0,n-1) + "..." :str; 

  }

  return(
      <header className='banner' 
        style={{
          backgroundSize:"cover",
          backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
          <div className="banner-contents">
            <h1 className='banner-title'>
              {movie?.title || movie?.name || movie?.original_name}
            </h1>

            <div className="banner-buttons">
              <button className='banner-button'>Play</button>
              <button className='banner-button'>My List</button>
            </div>

            <h1 className='banner-description'>{truncate(movie?.overview,150)}</h1>
          </div>

          <div className="banner-fadebottom"></div>
      </header>
  ) 
}
