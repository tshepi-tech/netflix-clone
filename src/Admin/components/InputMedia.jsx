//NPM package
import { useState } from "react";

//Project files
import resizeImage from "scripts/ModifyImage/resizeImage";
import readFile from "scripts/ModifyImage/readFile";

export default function InputMedia({ setup, state }) {
  const { key, autoFocus, label, placeholder, type, required } = setup;
  const [value, setValue] = state; // is now an object not an string
  const [file, setFile] = useState(null);

  // Methods
  async function onImageSelect(event) {
    const file = event.target.files[0];
    const imageImage = await readFile(file);
    const resizedImage = await resizeImage(imageImage, 250, 250);

    setFile(resizedImage);
  }

  return (
    <label className="input-field">
      <div>{label}:</div>
      <input
        autoFocus={autoFocus}
        onChange={onImageSelect}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value[key]}
        accept="image/png image/jpg "
      />
    </label>
  );
}
