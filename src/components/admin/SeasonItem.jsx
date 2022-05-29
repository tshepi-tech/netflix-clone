//NPM package
import { Link } from "react-router-dom";
//Project Files
import { useModal } from "state/ModalContext";
import DeleteSeason from "components/admin/DeleteSeason";
import UpdateSeason from "./UpdateSeason";

export default function SeriesItem({ seriesId, path, season, titleData }) {
  //Global state
  const { setModal } = useModal();

  //Properties
  const espisodesManger = `/series/${seriesId}/${season.season}`;

  return (
    <article>
      <p className="season__label">season :{season.season}</p>
      <button
        onClick={() =>
          setModal(
            <UpdateSeason
              seriesId={seriesId}
              path={path}
              season={season}
              titleData={titleData}
            />
          )
        }
      >
        ✍️
      </button>
      <button
        onClick={() =>
          setModal(
            <DeleteSeason seriesId={seriesId} path={path} season={season} />
          )
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
