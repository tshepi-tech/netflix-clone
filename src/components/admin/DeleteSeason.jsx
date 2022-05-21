//NPM package
import { useState } from "react";

//Project files
import { deleteDocument } from "scripts/firestore";
import formDelete from "data/admin/formDelete.json";
import InputField from "components/app/InputField";
import { useModal } from "state/ModalContext";
import { useTitle } from "state/TitleContext";

export default function DeleteTitle({ title, path, season }) {
  //Global state
  const { seasons, setSeasons } = useTitle();
  const { setModal } = useModal();

  //Local state
  const [compare, setCompare] = useState("");

  //Methods
  async function onSubmit(event) {
    event.preventDefault();

    if (compare === season.season) {
      const done = deleteDocument(path, season.id).catch(onFail);

      if (done) onSuccess(season.id);
    } else {
      alert("The input does not match");
    }
  }

  function onSuccess(id) {
    const filteredSeasons = seasons.filter((title) => title.id !== id);
    setSeasons(filteredSeasons);
    setModal(null);
  }

  function onFail(error) {
    console.error(error);
    alert("Could not delete document");
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>Delete Item</h2>
      <p>
        Confirm you want to delete this item by typing its name:
        <b>{season.season}</b>.
      </p>
      <InputField setup={formDelete.compare} state={[compare, setCompare]} />
      <button className="danger">Delete this item</button>
      <button onClick={() => setModal(null)}>Keep this item</button>
    </form>
  );
}
