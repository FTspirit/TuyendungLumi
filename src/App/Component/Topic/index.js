import { GrSearch } from "react-icons/gr";
import { MdClear } from "react-icons/md";
// import scss
import "./Topic.scss";
export default function Topic() {
  return (
    <>
      <h1>Chủ đề </h1>
      <div className="Topic-Container">
        <GrSearch />
        <input type="text" />
        <MdClear />
      </div>
    </>
  );
}
