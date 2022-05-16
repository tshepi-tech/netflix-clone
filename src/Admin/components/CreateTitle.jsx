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

export default function CreateTitle({ titleData, mediaData, path }) {
  //Global state
  const { setModal } = useModal();
  const { addTitle } = useTitle();
  // Local state
  const [form, setForm] = useState({});
  const [form1, setForm1] = useState({});
  const [file, setFile] = useState(null);

  async function onSubmit(event) {
    event.preventDefault();

    const fileName = `title-${form.name}-${form.year}.png`;
    const filePath = path + fileName;
    const imageURL = await createFile(filePath, file);

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

  // Components
  const InputFields = titleData.map((item) => (
    <InputTitle key={item.key} setup={item} state={[form, setForm]} />
  ));
  const InputImages = mediaData.map((item) => (
    <InputMedia key={item.key} setup={item} state={[form1, setForm1]} />
  ));

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Create Title</h2>
      {InputFields}
      {InputImages}
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

/* 
  const [name, setName] = useState("Mudbound");
  const [text, setText] = useState(
    "Two Mississippi famailies--confront the brutal realiteies of prejuidice,farming and friendship"
  );
  const [cast, setCast] = useState("Mary J.Blige,Jason Clarke");
  const [genre, setGenre] = useState(
    "Social Issue Drama,Movies Based on Books"
  );
  const [age, setAge] = useState("16+");
  const [theme, setTheme] = useState("Initmate,Emotional");
  const [URL, setURL] = useState("https://www.youtube.com/watch?v=vAZWhFI9lLQ");
  const [HD, setHD] = useState(true);
  const [AD, setAD] = useState(false);
  const [thumbnail, setThumbnail] = useState("");
  const [logo, setLogo] = useState("");
  const [image, setImage] = useState(""); */
