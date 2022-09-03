/** @format */
import PropTypes from "prop-types";
import s from "./style.module.css";

type Children = { children: React.ReactNode };

const Container: React.FC<Children> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
