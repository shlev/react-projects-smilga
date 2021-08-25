import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
const SingleMovie = () => {
  const { id } = useParams();
  const { loading, error, data: movie } = useFetch(`&i=${id}`);

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

  const { Poster: image, Title: title, Plot: description, Year: year } = movie;

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
