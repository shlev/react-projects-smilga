import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";

const SingleMovie = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState({ show: false, msg: "" });

  const getMovie = async () => {
    const url = `${API_ENDPOINT}&i=${id}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === "True") {
      const {
        Poster: image,
        Title: title,
        Plot: description,
        Year: year,
      } = data;
      const newMovie = { image, title, description, year };
      setMovie(newMovie);
      setLoading(false);
      setError({ show: false, msg: "" });
    } else {
      setError({ show: true, msg: data.Error });
    }
  };
  useEffect(() => {
    setLoading(true);
    getMovie();
  }, [id]);

  if (loading) {
    return <div className="loading"></div>;
  }

  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/">back to movies</Link>
      </div>
    );
  }

  const { image, title, description, year } = movie;
  return (
    <section className="single-movie">
      <img src={image} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <h4>{year}</h4>
        <Link className="btn" to="/">
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
