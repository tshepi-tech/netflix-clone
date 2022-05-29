//NPM package
import { useEffect, useState } from "react";
//Project files
import { readCollection } from "scripts/firestore";
import ContentCard from "components/users/ContentCard";
import { useModal } from "state/ModalContext";

export default function DocumentariesContent() {
  //Global state
  const { setModal } = useModal();

  //Local state
  const [docs, setDocs] = useState([]);
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error

  //Properties
  const path = "netflix/documentaries/content";
  // Method
  useEffect(() => {
    async function loadData(path) {
      const data = await readCollection(path).catch(onFail);
      if (data) onSuccess(data);
    }
    loadData(path);
  }, []);

  function onSuccess(data) {
    setDocs(data);
    setStatus(1);
  }

  function onFail(error) {
    console.error(error);
    alert("We cannot load the titles. Try again");
    setDocs(2);
  }

  //Components
  const DocsList = docs.map((title) => (
    <ContentCard key={title.id} title={title} />
  ));

  // Safeguards
  if (status === 0) return <p>Loading ⏱</p>;
  if (status === 2) return <p>Error ❌</p>;

  return (
    <secion className="docs__page">
      {docs.length === 0 && "Documentaries coming soon"}
      {docs.length > 0 && DocsList}
    </secion>
  );
}
