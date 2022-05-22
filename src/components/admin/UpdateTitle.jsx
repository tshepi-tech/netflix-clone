// MPM packages
import { useState } from "react";

// Project files
import data from "data/admin/mediaData";
import InputTitle from "./InputTitle";
import { updateDocument } from "scripts/firestore";
import { useTitle } from "state/TitleContext";
import { useModal } from "state/ModalContext";
import InputMedia from "./InputMedia";

export default function UpdateTitle({ path, titleData, title }) {
  // Global state
  const { editItem } = useTitle();
  const { setModal } = useModal();

  // Local state
  const [form, setForm] = useState(generateFields(titleData, title));
  // Methods
  async function onSubmit(event) {
    event.preventDefault();

    const editedItem = { ...form, id: title.id };
    const isDone = await updateDocument(path, editedItem).catch(onFail);

    if (isDone) onSucess(editedItem);
  }

  function onSucess(editedItem) {
    editItem(editedItem);
    setModal(null);
  }

  function onFail(error) {
    console.error(error);
    alert("Could not update the item. Try again");
  }

  function generateFields(fields, data) {
    const result = {};

    // REFACTOR ME PLEASE!!!
    for (let i = 0; i < fields.length; i++) {
      const key = fields[i].key;

      result[key] = data[key];
    }
    return result;
  }

  // Components
  const InputFields = titleData.map((item) => (
    <InputTitle key={item.key} setup={item} state={[form, setForm]} />
  ));

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Edit item</h2>
      {InputFields}
      <InputMedia />
      <button className="button primary">Edit existing item</button>
      <button className="button secondary" onClick={() => setModal(null)}>
        Cancel editing
      </button>
    </form>
  );
}
