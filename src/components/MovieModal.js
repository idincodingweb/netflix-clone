import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import tmdb from '../api/tmdb';
import '../styles/MovieModal.css';

function MovieModal({ open, handleClose, movieId }) {
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    async function fetchTrailer() {
      const request = await tmdb.get(`/movie/${movieId}/videos`);
      const trailer = request.data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
      setTrailerUrl(trailer ? `https://www.youtube.com/embed/${trailer.key}` : '');
    }
    if (movieId) {
      fetchTrailer();
    }
  }, [movieId]);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="modal__box">
        {trailerUrl ? (
          <iframe
            width="100%"
            height="315"
            src={trailerUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Trailer not available</p>
        )}
      </Box>
    </Modal>
  );
}

export default MovieModal;
