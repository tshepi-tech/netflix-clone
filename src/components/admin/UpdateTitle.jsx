// MPM packages
import { useState } from "react";

// Project files
import data from "data/admin/mediaData";
import InputTitle from "./InputTitle";
import { updateDocument } from "scripts/firestore";
import { useTitle } from "state/TitleContext";
import { useModal } from "state/ModalContext";
import InputMedia from "./InputMedia";
import readFile from "scripts/ModifyImage/readFile";
import resizeImage from "scripts/ModifyImage/resizeImage";

export default function UpdateTitle({ path, titleData, title }) {
  // Global state
  const { editItem } = useTitle();
  const { setModal } = useModal();

  // Local state
  const [form, setForm] = useState(generateFields(titleData, title));
  const [thumbnail, setThumbnail] = useState(title.thmbnailURL);
  const [image, setImage] = useState(title.imageURL);
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

  async function onThumbnailSelect(event) {
    const thumbnail = event.target.files[0];
    const imageImage = await readFile(thumbnail);
    const resizedImage = await resizeImage(imageImage, 250, 250);

    setThumbnail(resizedImage);
  }
  async function onImageSelect(event) {
    const image = event.target.files[0];
    const imageImage = await readFile(image);
    const resizedImage = await resizeImage(imageImage, 250, 250);

    setImage(resizedImage);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Edit item</h2>
      {InputFields}
      <div>Thumbnail:</div>
      <input type="file" onChange={onThumbnailSelect} accept="image/* " />
      <div>Image:</div>
      <input type="file" onChange={onImageSelect} accept="image/*" />
      <button className="button primary">Edit existing item</button>
      <button className="button secondary" onClick={() => setModal(null)}>
        Cancel editing
      </button>
    </form>
  );
}
