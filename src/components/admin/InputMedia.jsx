//NPM package
import { useState } from "react";

//Project files
import resizeImage from "scripts/ModifyImage/resizeImage";
import readFile from "scripts/ModifyImage/readFile";

export default function InputMedia() {
  const [thumbnail, setThumbnail] = useState(null);
  const [image, setImage] = useState(null);
  const [logo, setLogo] = useState(null);

  // Methods
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
    <label className="input-field">
      <div>Thumbnail:</div>
      <input type="file" onChange={onThumbnailSelect} accept="image/* " />
      <div>Image:</div>
      <input type="file" onChange={onImageSelect} accept="image/*" />
    </label>
  );
}
