//NPM package
import { useParams } from "react-router-dom";
import { useState } from "react";

//Project files
import { deleteFile } from "scripts/cloudStorage";
import { deleteDocument } from "scripts/firestore";
import formDelete from "data/admin/formDelete.json";
import InputField from "components/app/InputField";
import { useModal } from "state/ModalContext";
import { useTitle } from "state/TitleContext";

export default function DeleteTitle({ title, path }) {
  //Global state
  const { titles, setTitles } = useTitle();
  const { setModal } = useModal();

  //Local state
  const [compare, setCompare] = useState("");
  const [form, setForm] = useState({});
  //Methods
  async function onSubmit(event) {
    event.preventDefault();

    if (compare === title.name) {
      const done = deleteDocument(path, title.id).catch(onFail);

      if (done) onSuccess(title.id);
    } else {
      alert("The input does not match");
    }
  }

  function onSuccess(id) {
    const filteredTitles = titles.filter((title) => title.id !== id);
    setTitles(filteredTitles);
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
        <b>{title.name}</b>.
      </p>
      <InputField setup={formDelete.compare} state={[compare, setCompare]} />
      <button className="danger">Delete this item</button>
      <button onClick={() => setModal(null)}>Keep this item</button>
    </form>
  );
}
