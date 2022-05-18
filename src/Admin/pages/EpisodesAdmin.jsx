//NPM package
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Project files
import CreateTitle from "Admin/components/CreateTitle";
import { readCollection } from "scripts/firestore";
import mediaData from "Admin/data/mediaData";
import Placeholder from "Admin/pages/Placeholder";
import TitleItem from "Admin/components/TitleItem";
import titleData from "Admin/data/episodeData";
import { useModal } from "state/ModalContext";
import { useTitle } from "state/TitleContext";

export default function EpisodesAdmin() {
  const { seriesId, seasonId } = useParams();
  //Global state
  const { setModal } = useModal();
  const { titles, setTitles } = useTitle();

  //Local state
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error

  //Properties
  const path = `netflix/series/content/${seriesId}/content/${seasonId}/content`;
  const createEpisode = (
    <CreateTitle titleData={titleData} mediaData={mediaData} path={path} />
  );
  // Method
  useEffect(() => {
    async function loadData(path) {
      const data = await readCollection(path).catch(onFail);
      if (data) onSuccess(data);
    }
    loadData(path);
  }, []);

  function onSuccess(data) {
    setTitles(data);
    setStatus(1);
  }

  function onFail(error) {
    console.error(error);
    alert("We cannot load the titles. Try again");
    setTitles(2);
  }

  //Components
  const titlesList = titles.map((title) => (
    <TitleItem key={title.id} title={title} path={path} />
  ));

  // Safeguards
  if (status === 0) return <p>Loading ⏱</p>;
  if (status === 2) return <p>Error ❌</p>;

  return (
    <div>
      <h2>
        {seriesId} Season :{seasonId}
      </h2>
      <div className="grid">
        {titles.length === 0 && <Placeholder />}
        {titles.length > 0 && titlesList}
        <button onClick={() => setModal(createEpisode)}>Add episode</button>
      </div>
    </div>
  );
}
