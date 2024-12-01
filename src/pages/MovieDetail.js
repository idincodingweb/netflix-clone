import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdb from '../api/tmdb';
import MovieModal from '../components/MovieModal';
import '../styles/MovieDetail.css';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await tmdb.get(`/movie/${id}`);
      setMovie(request.data);
      return request;
    }
    fetchData();
  }, [id]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="movieDetail">
      <div className="movieDetail__container">
        <img
          className="movieDetail__poster"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movieDetail__info">
          <h1 className="movieDetail__title">{movie.title}</h1>
          <p className="movieDetail__overview">{movie.overview}</p>
          <button className="movieDetail__button" onClick={handleOpen}>Watch Trailer</button>
        </div>
      </div>
      <MovieModal open={open} handleClose={handleClose} movieId={id} />
    </div>
  );
}

export default MovieDetail;
