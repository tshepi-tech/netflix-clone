//NPM packages
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div>
      <Link to="documentaries">documentaries</Link>
      <br></br>
      <Link to="movies">movies</Link>
      <br></br>
      <Link to="series">series</Link>
    </div>
  );
}
