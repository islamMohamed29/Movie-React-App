import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TvShows() {
  let nums = new Array(7).fill(1).map((elem, index) => index + 1);

  const [tvShows, setTvShows] = useState([]);

  async function getTvShows(PageNumber) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=7362b80ffdd0b7822d66f428ca28d917&language=en-US&sort_by=popularity.desc&page=${PageNumber}`
    );
    setTvShows(data.results);
  }

  function letUpdate() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  useEffect(() => {
    getTvShows(1);
    return () => {};
  }, [letUpdate()]);

  return (
    <>
      <section className="top-movie py-5">
        <div className="container-fluid">
          <div className="row py-5 ">
            <div className="box-text d-flex justify-content-center">
              <h1>Enjoy With best TvShows</h1>
            </div>
          </div>
        </div>
      </section>

      {tvShows ? (
        <section className="movies">
          <div className="container">
            <div className="row justify-content-center gy-3 ">
              {tvShows.map((tv, i) => (
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="box-movie" key={i}>
                    <Link to={`/moviedetails/${tv.id}`}>
                      <div className="img">
                        <img
                          className="w-100 "
                          src={
                            `https://image.tmdb.org/t/p/w500` + tv.poster_path
                          }
                          alt=""
                        />
                      </div>
                    </Link>
                    <div className="movie-top text-center mt-3 ">
                      <Link to={`/moviedetails/${tv.id}`}>
                        <h3 className="name h6">{tv.original_name}</h3>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <nav aria-label="...">
            <ul class="pagination d-flex justify-content-center">
              {nums.map((pageNum) => (
                <li
                  onClick={() => getTvShows(pageNum)}
                  key={pageNum}
                  class="page-item"
                >
                  <a class="page-link me-1">{pageNum}</a>
                </li>
              ))}
            </ul>
          </nav>
          {/* <nav aria-label="..." >


                    <ul class="pagination d-flex justify-content-center">
                        {
                            nums.map((pageNum) => <li onClick={() => getMovies(pageNum)} key={pageNum} class="page-item"><a class="page-link me-1">{pageNum}</a></li>)
                        }
                    </ul>
                </nav> */}
        </section>
      ) : (
        <div className="vh-100 d-flex align-items-center justify-content-center">
          <i className="fas fa-spinner fa-spin"></i>
        </div>
      )}
    </>
  );
}
