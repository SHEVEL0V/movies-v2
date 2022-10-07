/** @format */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/images.png";
import Movies from "../../types/movies";
import s from "./style.module.css";


type Props = {
  film: Movies;
};

const Card: React.FC<Props> = ({ film }) => {
  const imgPath = "https://image.tmdb.org/t/p/w500/" + film.backdrop_path;

  const rating = film.vote_average.toFixed(1);

  return (
    <Link className={s.link} to={`/movies/${film.id}`}>
      <img
        className={s.img}
        src={film.backdrop_path ? imgPath : logo}
        alt="banner"
      ></img>
      <div className={s.container}>
        <b>{film.title}</b>
        <p>rating: {rating}</p>
      </div>
    </Link>
  );
};

export default Card;
