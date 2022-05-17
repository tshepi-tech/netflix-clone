//NPM package
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
//Project Files
import { useModal } from "state/ModalContext";
import DeleteSeason from "Admin/components/DeleteSeason";
import UpdateTitle from "Admin/components/UpdateTitle";

export default function SeriesItem({ title, path, season }) {
  //Global state
  const { setModal } = useModal();
  //Properties
  const espisodesManger = `/series/${title}/${season}`;

  return (
    <article>
      <p>season :{season.season}</p>
      <button
        onClick={() =>
          setModal(<UpdateTitle title={title} path={path} season={season} />)
        }
      >
        ✍️
      </button>
      <button
        onClick={() =>
          setModal(<DeleteSeason title={title} path={path} season={season} />)
        }
      >
        🗑
      </button>
      <Link to={espisodesManger}>
        <button>Episodes</button>
      </Link>
    </article>
  );
}
