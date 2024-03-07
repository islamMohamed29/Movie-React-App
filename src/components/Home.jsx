import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css';

// import { Navigation } from 'swiper';

export default function Home() {


    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingTv, setTrendingTv] = useState([]);
    const [trendingUpcomming, setTrendingPeople] = useState([]);
    const [topRatedTv, setTopRatedTv] = useState([]);
    const [topRatedMovie, setTopRatedMovie] = useState([]);
    async function getTrending(mediaType, callback) {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=7362b80ffdd0b7822d66f428ca28d917`)
        callback(data.results.slice(0, 10))
    }
    async function getUpcoming(callback) {
        let { data } = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=7362b80ffdd0b7822d66f428ca28d917&language=en-US&page=1`)
        callback(data.results.slice(0, 10))
    }
    async function getTopRated(mediaType, callback) {
        let { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/top_rated?api_key=7362b80ffdd0b7822d66f428ca28d917&language=en-US&page=1`)
        callback(data.results.slice(0, 12))
    }
    useEffect(() => {
        getTrending('movie', setTrendingMovies);
        getTrending('tv', setTrendingTv);
        getUpcoming(setTrendingPeople);
        getTopRated('tv', setTopRatedTv)
        getTopRated('movie', setTopRatedMovie)
        // getTrending('person', setTrendingPeople);
    }, []);

    // key = 7362b80ffdd0b7822d66f428ca28d917
    return (
        <>
            <section className="home">
                <div className="container-fluid w-100">
                    <div className="box">
                        <h6>Movix</h6>
                        <h2>Unlimited <span>Movix</span>, <br /> TVs Shows, &amp; More.</h2>
                        <ul className='list-unstyled d-flex'>
                            <li className='quality'>
                                <span>PG18</span>
                                <span>HD</span>
                            </li>
                            <li className='category'><Link to="/home">Romance </Link>
                                ,<Link to="/home"> Drama</Link>
                            </li>
                            <li className='release-time'>
                                <span><i class="fa-solid fa-calendar-days"></i>2021</span>
                                <span><i class="fa-solid fa-clock"></i> 128 min</span>
                            </li>
                        </ul>
                        <Link className='btn-watch mt-4' to="movies"><i class="fa-solid fa-play"></i>WATCH NOW</Link>
                    </div>
                </div>
            </section>
            <section className="upcoming">
                <div className="over-lay"></div>
                <div className="container-fluid">
                    <div class="row align-items-center p-3">
                        <div class="col-lg-6">
                            <div class="section-title">
                                <span class="sub-title">ONLINE STREAMING</span>
                                <h2 class="title">Trending Movies</h2>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div className="nav-upcome">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">TV Shows</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Movies</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Upcoming</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                            <div className="row p-3">

                                <Swiper
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 20
                                        },
                                        576: {
                                            slidesPerView: 2,
                                            spaceBetween: 25
                                        },
                                        771: {
                                            slidesPerView: 3,
                                            spaceBetween: 25
                                        },
                                        1150: {
                                            slidesPerView: 4,
                                            spaceBetween: 25
                                        }
                                    }}
                                    spaceBetween={30}
                                    slidesPerView={4}
                                    loop={true}
                                >
                                    {trendingTv.map((tv, i) =>
                                        <div className="popa">


                                            <SwiperSlide>

                                                <div className="box-movie " key={i}>
                                                    <Link to={`/moviedetails/${tv.id}`}>
                                                        <div className="img">
                                                            <img className='w-100 ' src={`https://image.tmdb.org/t/p/w500` + tv.poster_path} alt="" />
                                                            <div className="over-lay">{tv.overview}</div>
                                                        </div>
                                                    </Link>
                                                    <div className="movie-top d-flex justify-content-between mt-3">
                                                        <Link to={`/moviedetails/${tv.id}`}>
                                                            <h3 className='name h6'>{tv.name}</h3>
                                                        </Link>
                                                        <span className="data">{tv.first_air_date.slice(0, 4)}</span>
                                                    </div>
                                                    <ul className="movie-bottom list-unstyled d-flex justify-content-between mt-1 ">
                                                        <li>
                                                            <span className="quality">HD</span>
                                                        </li>
                                                        <li>
                                                            <span className="lang me-3"><i class="fa-solid fa-globe me-1"></i> EN</span>
                                                            <span className="rating"><i class="fa-solid fa-thumbs-up me-1"></i> {tv.vote_average.toFixed(1)}</span>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </SwiperSlide>

                                            <div>
                                                <div class="swiper-button-prev"><i class="fa-solid fa-angle-left"></i></div>
                                                <div class="swiper-button-next"><i class="fa-solid fa-angle-right"></i></div>
                                            </div>
                                        </div>

                                    )}

                                </Swiper>

                            </div>

                            {/* ends  */}
                        </div>
                        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                            <div className="row p-3">
                                <Swiper
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 20
                                        },
                                        576: {
                                            slidesPerView: 2,
                                            spaceBetween: 25
                                        },
                                        771: {
                                            slidesPerView: 3,
                                            spaceBetween: 25
                                        },
                                        1150: {
                                            slidesPerView: 4,
                                            spaceBetween: 25
                                        }
                                    }}
                                    spaceBetween={30}
                                    slidesPerView={4}
                                    loop={true}
                                >
                                    {trendingMovies.map((tv, i) =>
                                        <div className="popa">
                                            <SwiperSlide>
                                                <div className="box-movie " key={i}>
                                                    <Link to={`/moviedetails/${tv.id}`}>
                                                        <div className="img">
                                                            <img className='w-100 h-100 ' src={`https://image.tmdb.org/t/p/w500` + tv.poster_path} alt="" />
                                                            <div className="over-lay">{tv.overview}</div>
                                                        </div>
                                                    </Link>
                                                    <div className="movie-top d-flex justify-content-between mt-3">
                                                        <Link to={`/moviedetails/${tv.id}`}>
                                                            <h3 className='name h6'>{tv.title}</h3>
                                                        </Link>
                                                        <span className="data">{tv.release_date.slice(0, 4)}</span>
                                                    </div>
                                                    <ul className="movie-bottom list-unstyled d-flex justify-content-between mt-1 ">
                                                        <li>
                                                            <span className="quality">HD</span>
                                                        </li>
                                                        <li>
                                                            <span className="lang me-3"><i class="fa-solid fa-globe me-1"></i> EN</span>
                                                            <span className="rating"><i class="fa-solid fa-thumbs-up me-1"></i> {tv.vote_average.toFixed(1)}</span>
                                                        </li>
                                                    </ul>

                                                </div>
                                            </SwiperSlide>
                                            <div>
                                                <div class="swiper-button-prev"><i class="fa-solid fa-angle-left"></i></div>
                                                <div class="swiper-button-next"><i class="fa-solid fa-angle-right"></i></div>
                                            </div>
                                        </div>

                                    )}

                                </Swiper>

                            </div>
                        </div>
                        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                            <div className="row p-3">
                                <Swiper
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 20
                                        },
                                        576: {
                                            slidesPerView: 2,
                                            spaceBetween: 25
                                        },
                                        771: {
                                            slidesPerView: 3,
                                            spaceBetween: 25
                                        },
                                        1150: {
                                            slidesPerView: 4,
                                            spaceBetween: 25
                                        }
                                    }}
                                    spaceBetween={30}
                                    slidesPerView={4}
                                    loop={true}
                                >
                                    {trendingUpcomming.map((upcome, i) =>
                                        <div className="popa ">
                                            <SwiperSlide>
                                                <div className="box-movie " key={i}>
                                                    <Link to={`/moviedetails/${upcome.id}`}>
                                                        <div className="img">
                                                            <img className='w-100 ' src={`https://image.tmdb.org/t/p/w500` + upcome.poster_path} alt="" />
                                                            <div className="over-lay">{upcome.overview}</div>
                                                        </div>
                                                    </Link>

                                                    <div className="movie-top d-flex justify-content-between mt-3">
                                                        <Link to={`/moviedetails/${upcome.id}`}>

                                                            <h3 className='name h6'>{upcome.original_title}</h3>
                                                        </Link>

                                                        <span className="data">{upcome.release_date.slice(0, 4)}</span>
                                                    </div>
                                                    <ul className="movie-bottom list-unstyled d-flex justify-content-between mt-1 ">
                                                        <li>
                                                            <span className="quality">HD</span>
                                                        </li>
                                                        <li>
                                                            <span className="lang me-3"><i class="fa-solid fa-globe me-1"></i> EN</span>
                                                            <span className="rating"><i class="fa-solid fa-thumbs-up me-1"></i> {upcome.vote_average.toFixed(1)}</span>
                                                        </li>
                                                    </ul>

                                                </div>
                                            </SwiperSlide>
                                            <div>
                                                <div class="swiper-button-prev"><i class="fa-solid fa-angle-left"></i></div>
                                                <div class="swiper-button-next"><i class="fa-solid fa-angle-right"></i></div>
                                            </div>
                                        </div>

                                    )}

                                </Swiper>

                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className="downloed py-5">
                <div className="container-fluid">
                    <div className="row py-5 gy-5">
                        <div className="col-lg-6">
                            <div className="box-img position-relative ">
                                <img src="images/services_img.jpg" alt="" />
                                <a href="images/services_img.jpg" class="download-btn" >Download <i class="fa-solid fa-download"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div class="box-info px-5 py-4 ">
                                <div class="top-title">
                                    <span class="sub-title mb-2">Our Services</span>
                                    <h2 class="title">Download Your Shows Watch Offline.</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages of lorem
                                    Ipsum available, but the majority have suffered alteration in some injected humour.</p>
                                <div class="services-list ">
                                    <ul className='list-unstyled'>
                                        <li>
                                            <div class="icon">
                                                <i class="fa-solid fa-radio"></i>
                                            </div>
                                            <div class="content">
                                                <h5>Enjoy on Your TV.</h5>
                                                <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <i class="fa-solid fa-video"></i>
                                            </div>
                                            <div class="content">
                                                <h5>Watch Everywhere.</h5>
                                                <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="rated">
                <div className="container-fluid">
                    <div class="row align-items-center p-3">
                        <div class="col-lg-12 text-center">
                            <div class="section-title text">
                                <span class="sub-title">ONLINE STREAMING</span>
                                <h2 class="title">Top Rated Movies</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div class="col-lg-12">
                                <div className="nav-upcome mt-4">
                                    <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="tvshows-tab" data-bs-toggle="tab" data-bs-target="#tvshows" type="button" role="tab" aria-controls="tvshows" aria-selected="true">TV Shows</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="moviesrated-tap" data-bs-toggle="tab" data-bs-target="#moviesrated" type="button" role="tab" aria-controls="moviesrated" aria-selected="false">Movies</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="tvshows" role="tabpanel" aria-labelledby="tvshows-tab" tabindex="0">
                                    <div className="row gy-4 py-5">
                                        {topRatedTv.map((tv, i) =>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <div className="box-movie h-100 " key={i}>
                                                    <Link to={`/moviedetails/${tv.id}`}>
                                                        <div className="img">
                                                            <img className='w-100 ' src={`https://image.tmdb.org/t/p/w500` + tv.poster_path} alt="" />
                                                            {/* <div className="over-lay-rated">
                                                            <div className="det">
                                                                <a href="#">Details</a>
                                                            </div>
                                                        </div> */}
                                                        </div>
                                                    </Link>
                                                    <div className="star pt-2">
                                                        <ul className="list-unst d-flex p-0 justify-content-center">
                                                            <li><i class="fa-solid fa-star"></i></li>
                                                            <li><i class="fa-solid fa-star"></i></li>
                                                            <li><i class="fa-solid fa-star"></i></li>
                                                            <li><i class="fa-solid fa-star"></i></li>
                                                            <li><i class="fa-solid fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <div className="movie-top text-center ">
                                                        <Link to={`/moviedetails/${tv.id}`}>
                                                            <h3 className='name h6'>{tv.original_name}</h3>
                                                        </Link>
                                                    </div>
                                                    <ul className="movie-bottom pt-3 position-relative list-unstyled d-flex justify-content-between mt-1 ">
                                                        <li>
                                                            <span className="quality">HD</span>
                                                            <span className="lang me-3">English</span>
                                                        </li>
                                                        <li>
                                                            <span className="rating"><i class="fa-solid fa-thumbs-up me-1"></i> {tv.vote_average.toFixed(1)}</span>
                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>


                                        )}
                                    </div>
                                </div>
                                <div class="tab-pane fade show active" id="moviesrated" role="tabpanel" aria-labelledby="moviesrated-tap" tabindex="0">
                                    <div className="row gy-4 py-5">
                                        {topRatedMovie.map((movie, i) =>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <div className="box-movie h-100 position-relative " key={i}>
                                                    <Link to={`/moviedetails/${movie.id}`}>
                                                        <div className="img">
                                                            <img className='w-100 ' src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} alt="" />
                                                            {/* <div className="over-lay-rated">
                                                            <div className="det">
                                                                <a href="#">Details</a>
                                                            </div>
                                                        </div> */}
                                                        </div>
                                                    </Link>
                                                    <div className="star pt-2">
                                                        <ul className="list-unst d-flex p-0 justify-content-center">
                                                            <li><i class="fa-solid fa-star"></i></li>
                                                            <li><i class="fa-solid fa-star"></i></li>
                                                            <li><i class="fa-solid fa-star"></i></li>
                                                            <li><i class="fa-solid fa-star"></i></li>
                                                            <li><i class="fa-solid fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <div className="movie-top text-center ">
                                                        <h3 className='name h6'>{movie.original_title}</h3>
                                                    </div>
                                                    <ul className="movie-bottom position-relative w-100 pt-4  list-unstyled d-flex justify-content-between mt-1 ">
                                                        <li>
                                                            <span className="quality">HD</span>
                                                            <span className="lang me-3">English</span>
                                                        </li>
                                                        <li>
                                                            <span className="rating"><i class="fa-solid fa-thumbs-up me-1"></i> {movie.vote_average.toFixed(1)}</span>
                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>


                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
