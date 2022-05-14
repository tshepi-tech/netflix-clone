//NPM packages
import { useState } from "react";

//Project files
import InputTitle from "./InputTitle";
import InputMedia from "./InputMedia";
import { useModal } from "state/ModalContext";

export default function CreateTitle({ titleData, mediaData }) {
  //Global state
  const { setModal } = useModal();
  // Local state
  const [form, setForm] = useState({});

  async function onSubmit(event) {
    event.preventDefault();
    resetForm();
  }

  function resetForm() {
    setModal(null);
  }

  // Components
  const InputFields = titleData.map((item) => (
    <InputTitle key={item.key} setup={item} state={[form, setForm]} />
  ));
  const InputImages = mediaData.map((item) => (
    <InputMedia key={item.key} setup={item} state={[form, setForm]} />
  ));

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Create Title</h2>
      {InputFields}
      {InputImages}
      <button className="button primary">Submit</button>
      <button className="button secondary" onClick={resetForm}>
        Cancel
      </button>
    </form>
  );
}
