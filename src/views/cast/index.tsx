/** @format */

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import s from "./style.module.css";
import logo from "../../img/images.png";
import { fetchFilmByIdCredits } from "../../services/fetch";

const Cast: React.FC = () => {
  const imgPath = "https://image.tmdb.org/t/p/w500/";
  const { movieId } = useParams();

  const { data } = useQuery(["fechCast", movieId], () =>
    fetchFilmByIdCredits(movieId)
  );

  const cast = data?.cast || [];

  return (
    <ul className={s.container}>
      {cast.map((el: { id: number; profile_path: string; name: string }) => (
        <li key={el.id} className={s.card}>
          <img
            className={s.img}
            src={el.profile_path ? imgPath + el.profile_path : logo}
            alt="foto "
          ></img>
          <h3>{el.name}</h3>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
