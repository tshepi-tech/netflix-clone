//NPM package
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
//Project Files
import { useModal } from "state/ModalContext";
import DeleteSeason from "Admin/components/DeleteSeason";
import UpdateTitle from "Admin/components/UpdateTitle";

export default function SeriesItem({ seriesId, path, season }) {
  //Global state
  const { setModal } = useModal();

  //Properties
  const espisodesManger = `/series/${seriesId}/${season.season}`;

  return (
    <article>
      <p>season :{season.season}</p>
      <button
        onClick={() =>
          setModal(
            <UpdateTitle seriesId={seriesId} path={path} season={season} />
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
