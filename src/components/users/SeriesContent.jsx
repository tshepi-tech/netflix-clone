//NPM package
import { useEffect, useState } from "react";
//Project files
import { readCollection } from "scripts/firestore";
import Placeholder from "pages/admin/Placeholder";
import SeriesCard from "components/users/SeriesCard";

export default function SeriesContent() {
  //Local state
  const [series, setSeries] = useState([]);
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error

  //Properties
  const path = "netflix/series/content";
  // Method
  useEffect(() => {
    async function loadData(path) {
      const data = await readCollection(path).catch(onFail);
      if (data) onSuccess(data);
    }
    loadData(path);
  }, []);

  function onSuccess(data) {
    setSeries(data);
    setStatus(1);
  }

  function onFail(error) {
    console.error(error);
    alert("We cannot load the titles. Try again");
    setSeries(2);
  }

  //Components
  const SeriesList = series.map((title) => (
    <SeriesCard key={title.id} title={title} />
  ));

  // Safeguards
  if (status === 0) return <p>Loading ⏱</p>;
  if (status === 2) return <p>Error ❌</p>;

  return (
    <section className="series__page">
      {series.length === 0 && "Series coming soon"}
      {series.length > 0 && SeriesList}
    </section>
  );
}
