/** @format */
import { useQuery } from "@tanstack/react-query";
import { fetchFilmTrendWeek } from "../../services/fetch";
import Movies from "../../types/movies";
import Card from "../../components/card";
import Loading from "../../components/loading";

const HomePage: React.FC = () => {
  const { data, isLoading } = useQuery(["fechTrend"], () =>
    fetchFilmTrendWeek()
  );

  const movies = data?.results || [];

  return (
    <ul>
      {isLoading && <Loading />}
      {movies.map((el: Movies) => (
        <Card film={el} key={el.id} />
      ))}
    </ul>
  );
};

export default HomePage;
