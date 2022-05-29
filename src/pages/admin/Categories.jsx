//NPM packages
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className="categories">
      <Link to="documentaries">Documentaries</Link>
      <br></br>
      <Link to="movies">Movies</Link>
      <br></br>
      <Link to="series">Series</Link>
    </div>
  );
}
