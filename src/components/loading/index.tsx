/** @format */
import BeatLoader from "react-spinners/BeatLoader";
import s from "./style.module.css";

const Loading: React.FC = () => {
  return (
    <div className={s.loading}>
      <BeatLoader color="#216fca" size={18} />
    </div>
  );
};
export default Loading;
