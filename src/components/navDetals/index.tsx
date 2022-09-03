/** @format */
import { NavLink } from "react-router-dom";
import Section from "../section";
import Button from "@mui/material/Button";
import s from "./style.module.css";

const NawDetals: React.FC = () => {
  return (
    <Section>
      <h2 className={s.title}>Additional information</h2>
      <div className={s.container}>
        <NavLink
          className={s.naw}
          style={({ isActive }) =>
            isActive ? { backgroundColor: "rgba(30, 45, 123, 0.244)" } : {}
          }
          to="cast"
        >
          <Button variant="outlined">Cast</Button>
        </NavLink>
        <NavLink
          className={s.naw}
          style={({ isActive }) =>
            isActive ? { backgroundColor: "rgba(30, 45, 123, 0.244)" } : {}
          }
          to="reviews"
        >
          <Button variant="outlined">Reviews</Button>
        </NavLink>
      </div>
    </Section>
  );
};

export default NawDetals;
