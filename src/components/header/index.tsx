/** @format */

import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import s from "./style.module.css";

const Header: React.FC = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        className={s.button}
        style={({ isActive }) =>
          isActive ? { backgroundColor: "rgba(30, 45, 123, 0.244)" } : {}
        }
        to="/"
      >
        <Button variant="outlined">Home</Button>
      </NavLink>

      <NavLink
        className={s.button}
        style={({ isActive }) =>
          isActive ? { backgroundColor: "rgba(30, 45, 123, 0.244)" } : {}
        }
        to="movies"
      >
        <Button variant="outlined">Movies</Button>
      </NavLink>
    </nav>
  );
};

export default Header;
