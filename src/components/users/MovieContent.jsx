//NPM package
import { useEffect, useState } from "react";
//Project files
import { readCollection } from "scripts/firestore";
import Placeholder from "pages/admin/Placeholder";
import ContentCard from "components/users/ContentCard";
import { useModal } from "state/ModalContext";

export default function MovieContent() {
  //Global state
  const { setModal } = useModal();

  //Local state
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error

  //Properties
  const path = "netflix/movies/content";
  // Method
  useEffect(() => {
    async function loadData(path) {
      const data = await readCollection(path).catch(onFail);
      if (data) onSuccess(data);
    }
    loadData(path);
  }, []);

  function onSuccess(data) {
    setMovies(data);
    setStatus(1);
  }

  function onFail(error) {
    console.error(error);
    alert("We cannot load the titles. Try again");
    setMovies(2);
  }

  //Components
  const MovieList = movies.map((title) => (
    <ContentCard key={title.id} title={title} />
  ));

  // Safeguards
  if (status === 0) return <p>Loading ⏱</p>;
  if (status === 2) return <p>Error ❌</p>;

  return (
    <div>
      {movies.length === 0 && <Placeholder />}
      {movies.length > 0 && MovieList}
    </div>
  );
}
