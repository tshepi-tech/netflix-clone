//NPM packages
import { useState } from "react";

//Project files
import { createDocumentWithId } from "scripts/firestore";
import { createFile } from "scripts/cloudStorage";
import { readDocument } from "scripts/firestore";
import textToURL from "scripts/textToURL";
import { useTitle } from "state/TitleContext";
import InputTitle from "./InputTitle";
import InputMedia from "./InputMedia";
import { useModal } from "state/ModalContext";

export default function CreateSeries({ seriesData, path }) {
  //Global state
  const { setModal } = useModal();
  const { addTitle } = useTitle();
  // Local state
  const [form, setForm] = useState({});
  const [thumbnail, setThumbnail] = useState(null);
  const [image, setImage] = useState(null);
  const [logo, setLogo] = useState(null);

  async function onSubmit(event) {
    event.preventDefault();
    const fileName1 = `thumbnail-${form.name}-${form.year}.png`;
    const filePath1 = path + fileName1;
    const thmbnailURL = await createFile(filePath1, thumbnail);
    form.thmbnailURL = thmbnailURL;
    const fileName2 = `image-${form.name}-${form.year}.png`;
    const filePath2 = path + fileName2;
    const imageURL = await createFile(filePath2, image);
    form.imageURL = imageURL;
    const fileName3 = `logo-${form.name}-${form.year}.png`;
    const filePath3 = path + fileName3;
    const logoURL = await createFile(filePath3, logo);
    form.logoURL = logoURL;
    const id = textToURL(form.name);
    const existingDocument = await readDocument(path, id).catch(onFail);
    resetForm();
    //Safeguard
    if (existingDocument !== undefined) {
      alert(`An item with the name ${form.name} already exist`);
      return;
    }

    const done = await createDocumentWithId(path, id, form).catch(onFail);
    if (done) onSuccess(form, id);
  }

  function onSuccess(title, id) {
    title.id = id;
    addTitle(title);
    setModal(null);
    alert(`${form.name} added`);
  }

  function onFail(error) {
    console.error(error);
    alert("Could not create `${form.name}` title");
  }

  function resetForm() {
    setModal(null);
  }

  // Components
  const InputFields = seriesData.map((item) => (
    <InputTitle key={item.key} setup={item} state={[form, setForm]} />
  ));

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Create Title</h2>
      {InputFields}
      <InputMedia />
      <button className="button primary">Submit</button>
      <button className="button secondary" onClick={resetForm}>
        Cancel
      </button>
    </form>
  );
}
