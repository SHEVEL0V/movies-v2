/** @format */

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchFilmReviews } from "../../services/fetch";
import s from "./style.module.css";

const Reviews: React.FC = () => {
  const { movieId } = useParams();
  const { data } = useQuery(["fechTrend", movieId], () =>
    fetchFilmReviews(movieId)
  );

  const reviews: { id: string; author: string; content: string }[] =
    data?.results || [];

  return (
    <ul className={s.container}>
      {reviews.length > 0 ? (
        reviews.map((el) => (
          <li key={el.id}>
            <h3>{el.author}</h3>
            <p>{el.content}</p>
          </li>
        ))
      ) : (
        <h3 className={s.title}>We don't haveany reviews for this movie.</h3>
      )}
    </ul>
  );
};

export default Reviews;
