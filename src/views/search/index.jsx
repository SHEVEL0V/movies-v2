/** @format */

import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import BeatLoader from "react-spinners/BeatLoader";
import { fetchFilmQery } from "../../services/fetch";
import Button from "@mui/material/Button";
import Card from "../../components/card";
import TextField from "@mui/material/TextField";
import s from "./style.module.css";

export default function SerchFilm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search");

  const { data, isLoading, refetch } = useQuery(
    ["fechQery", query],
    () => fetchFilmQery(query),
    { enabled: false }
  );

  const films = data?.results || [];

  return (
    <div>
      <form className={s.form}>
        <TextField
          onChange={(e) => setSearchParams({ search: e.target.value })}
          className={s.input}
          label="Movies"
          variant="outlined"
          size="small"
          value={query}
        />

        <Button variant="contained" onClick={() => refetch()}>
          search
        </Button>
      </form>
      {isLoading && query && <BeatLoader color="#216fca" size={12} />}
      <ul>
        {films.map((el) => (
          <Card key={el.id} film={el} />
        ))}
      </ul>
    </div>
  );
}
