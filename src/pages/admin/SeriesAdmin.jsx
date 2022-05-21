//NPM package
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//Project files
import CreateTitle from "components/admin/CreateTitle";
import { readCollection } from "scripts/firestore";
import mediaData from "data/admin/mediaData";
import Placeholder from "pages/admin/Placeholder";
import titleData from "data/admin/seriesData";
import SeriesItem from "components/admin/SeriesItem";
import { useModal } from "state/ModalContext";
import { useTitle } from "state/TitleContext";

export default function SeriesAdmin() {
  //Global state
  const { setModal } = useModal();
  const { titles, setTitles } = useTitle();

  //Local state
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error

  //Properties
  const path = `netflix/series/content`;
  const createSeries = (
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
    <SeriesItem
      key={title.id}
      title={title}
      path={path}
      titleData={titleData}
    />
  ));

  // Safeguards
  if (status === 0) return <p>Loading ⏱</p>;
  if (status === 2) return <p>Error ❌</p>;
  return (
    <div>
      <h2>Series</h2>
      <div className="grid">
        {titles.length === 0 && <Placeholder />}
        {titles.length > 0 && titlesList}
        <button onClick={() => setModal(createSeries)}>Add Series</button>
      </div>
    </div>
  );
}
