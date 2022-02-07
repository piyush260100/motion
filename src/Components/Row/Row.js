import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";


export default function Row({ title, fetchURL, isLargeRow }) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");

    const baseURL = "https://api.themoviedb.org/3";
    const completeURL = baseURL + fetchURL;

    const movieImageBaseURl = "https://image.tmdb.org/t/p/original/";


    //A code snippet which runs based on a specific conditions
    useEffect(() => {

        //if[]empty, run once when the page loads, and not again,
        //but[movies], run everytime when movies changes.

        async function fetchData() {

            const request = await axios.get(completeURL);
            // complete url looks like that : https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213 
            setMovies(request.data.results);
            return request;

        }
        fetchData();

    }, [completeURL]);

    const opts={
        height:"400",
        width:"100%",
        playerVars:{
            autoplay:1,
        },
    };

    const handleClick=(movie)=>{

        if(trailerUrl){
            setTrailerUrl("");
        }
        else{
            movieTrailer(movie?.title || "")
            .then((url)=>{const urlParams =new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch((error)=>console.log(error));
        }
    }

    return (
        <div className='row'>
            <h2 className='category-title'>{title}</h2>

            <div className="row_posters">
                {
                    movies.map((movie) => {
                        return (
                            <img key={movie.id}
                            onClick={()=>handleClick(movie)}
                            className={`row_poster ${isLargeRow && "row_poster_large"}`} 
                            src={`${movieImageBaseURl}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name} 
                            />)
                    })
                }
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}

        </div>
    )

}
