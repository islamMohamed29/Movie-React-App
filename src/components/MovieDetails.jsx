import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function MovieDetails() {
    let params = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    async function getMovieDetails(mediaType, id) {
        let { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=7362b80ffdd0b7822d66f428ca28d917&language=en-US`)
        setMovieDetails(data)
    }

    function letUpdate() {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    // useEffect(() => {
    //     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    // }, []);


    useEffect(() => {
        getMovieDetails('tv', params.id)
        getMovieDetails('movie', params.id)


        return () => {

        }
    }, [letUpdate()]);
    return (
        <>
            {movieDetails ? <section className="movie-details">
                <div className="container">
                    <div className="row gy-3">
                        <div className="col-md-4">
                            <div className="box-img">
                                {movieDetails.poster_path ? <img className='w-100 ' src={`https://image.tmdb.org/t/p/w500` + movieDetails.poster_path} alt="" />
                                    : ''}
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="box-info p-3">
                                <div className="specialx-title">
                                    <h3>{movieDetails.original_name || movieDetails.original_title}</h3>
                                    <p>{movieDetails.tagline}</p>
                                </div>
                                <ul className='list-unstyled'>

                                    <li className='overview'>
                                        <span>Overview</span>
                                        <p >{movieDetails.overview}</p></li>
                                    {movieDetails.release_date ? <li className='relase-data'>
                                        <span>Relase Data</span>
                                        <p className='bef'>{movieDetails.release_date}</p></li> : ''}

                                    {movieDetails.first_air_date ? <li>
                                        <span >first show date</span>
                                        <p className='bef'>{movieDetails.first_air_date}</p>
                                    </li> : ''}
                                    {movieDetails.last_air_date ? <li>
                                        <span >last show date</span>
                                        <p className='bef'>{movieDetails.last_air_date}</p>
                                    </li> : ''}
                                    <li>
                                        <span>Status</span>
                                        <p className='bef'>{movieDetails.status}</p>
                                    </li>
                                    <li className='lang'>
                                        <p>{movieDetails.original_language}</p>
                                        <p><i class="fa-solid fa-thumbs-up me-2"></i>{movieDetails.vote_average.toFixed(1)}</p>
                                    </li>
                                </ul>
                                {/* 

                                {/* 
                               
                               
                                 */}



                            </div>
                        </div>
                    </div>
                </div>
            </section> : <div className='vh-100 d-flex align-items-center justify-content-center'>
                <i className='fas fa-spinner fa-spin'></i>
            </div>}
        </>
    )
}
