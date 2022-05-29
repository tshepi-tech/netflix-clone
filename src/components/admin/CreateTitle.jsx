//NPM packages
import { useState } from "react";

//Project files
import { createDocumentWithId } from "scripts/firestore";
import { createFile } from "scripts/cloudStorage";
import { readDocument } from "scripts/firestore";
import textToURL from "scripts/textToURL";
import { useTitle } from "state/TitleContext";
import InputTitle from "./InputTitle";
import readFile from "scripts/ModifyImage/readFile";

import resizeImage from "scripts/ModifyImage/resizeImage";

import { useModal } from "state/ModalContext";

export default function CreateTitle({ titleData, path }) {
  //Global state
  const { setModal } = useModal();
  const { addTitle } = useTitle();
  // Local state
  const [form, setForm] = useState({});
  const [thumbnail, setThumbnail] = useState(null);
  const [image, setImage] = useState(null);

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

    const id = textToURL(form.name);
    const existingDocument = await readDocument(path, id).catch(onFail);

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

  async function onThumbnailSelect(event) {
    const thumbnail = event.target.files[0];
    const imageImage = await readFile(thumbnail);
    const resizedImage = await resizeImage(imageImage, 310, 168);

    setThumbnail(resizedImage);
  }
  async function onImageSelect(event) {
    const image = event.target.files[0];
    const imageImage = await readFile(image);
    const resizedImage = await resizeImage(imageImage, 980, 480);

    setImage(resizedImage);
  }

  // Components
  const InputFields = titleData.map((item) => (
    <InputTitle key={item.key} setup={item} state={[form, setForm]} />
  ));

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Create Title</h2>
      {InputFields}
      <p>Thumbnail:</p>
      <input type="file" onChange={onThumbnailSelect} accept="image/* " />
      <p>Image:</p>
      <input type="file" onChange={onImageSelect} accept="image/*" />
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
