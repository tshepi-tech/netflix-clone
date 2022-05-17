//NPM packages
import { useState } from "react";

//Project files
import { createDocumentWithId } from "scripts/firestore";
import { readDocument } from "scripts/firestore";
import { useTitle } from "state/TitleContext";
import InputTitle from "./InputTitle";
import InputMedia from "./InputMedia";
import { useModal } from "state/ModalContext";

export default function CreateTitle({ titleData, path }) {
  //Global state
  const { setModal } = useModal();
  const { addTitle } = useTitle();
  // Local state
  const [form, setForm] = useState({});

  async function onSubmit(event) {
    event.preventDefault();
    const id = form.season;
    const existingDocument = await readDocument(path, id).catch(onFail);

    //Safeguard
    if (existingDocument !== undefined) {
      alert(`An item with the season ${form.season} already exist`);
      return;
    }

    const done = await createDocumentWithId(path, id, form).catch(onFail);
    if (done) onSuccess(form, id);
  }

  function onSuccess(title, id) {
    title.id = id;
    addTitle(title);
    setModal(null);
    alert(`${form.season} added`);
  }

  function onFail(error) {
    console.error(error);
    alert("Could not create `${form.season}` title");
  }

  // Components
  const InputFields = titleData.map((item) => (
    <InputTitle key={item.key} setup={item} state={[form, setForm]} />
  ));

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Create Title</h2>
      {InputFields}
      <button className="button primary">Submit</button>
      <button
        className="button secondary"
        onClick={() => {
          setModal(null);
        }}
      >
        Cancel
      </button>
    </form>
  );
}
