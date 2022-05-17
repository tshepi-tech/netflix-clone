//NPM package
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//Project files
import CreateSeason from "Admin/components/CreateSeason";
import CreateTitle from "Admin/components/CreateTitle";
import { readCollection } from "scripts/firestore";
import mediaData from "Admin/data/mediaData";
import Placeholder from "Admin/pages/Placeholder";
import titleData from "Admin/data/seasonData";
import SeasonItem from "Admin/components/SeasonItem";
import SeriesItem from "Admin/components/SeriesItem";
import { useModal } from "state/ModalContext";
import { useTitle } from "state/TitleContext";

export default function SeasonsAdmin() {
  const { seriesId } = useParams();
  //Global state
  const { setModal } = useModal();
  const { seasons, setSeasons } = useTitle();

  //Local state
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error

  //Properties
  const path = `netflix/series/content/${seriesId}/content`;
  const createSeasons = <CreateSeason titleData={titleData} path={path} />;

  // Method
  useEffect(() => {
    async function loadData(path) {
      const data = await readCollection(path).catch(onFail);
      if (data) onSuccess(data);
    }
    loadData(path);
  }, []);

  function onSuccess(data) {
    setSeasons(data);
    setStatus(1);
  }

  function onFail(error) {
    console.error(error);
    alert("We cannot load the seasons. Try again");
    setSeasons(2);
  }

  //Components
  const seasonsList = seasons.map((season) => (
    <SeasonItem
      key={season.id}
      season={season}
      path={path}
      seriesId={seriesId}
    />
  ));

  // Safeguards
  if (status === 0) return <p>Loading ⏱</p>;
  if (status === 2) return <p>Error ❌</p>;
  return (
    <div>
      <h2>{seriesId}</h2>
      <div className="grid">
        {seasons.length === 0 && <Placeholder />}
        {seasons.length > 0 && seasonsList}
        <button onClick={() => setModal(createSeasons)}>Add Season</button>
      </div>
    </div>
  );
}
