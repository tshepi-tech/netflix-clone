//Project Files
import { useModal } from "state/ModalContext";
import VideoPlay from "./VideoPlay";

export default function TitleModal({ title }) {
  const {
    name,
    imageURL,
    age,
    duration,
    cast,
    text,
    theme,
    genre,
    AD,
    HD,
    URL,
  } = title;

  console.log(imageURL);
  //Global state
  const { setModal } = useModal();
  return (
    <div>
      <img src={imageURL} />
      <p>{age}</p>
      {duration}
      <h1>{name}</h1>
      <p>{text}</p>
      <p>Cast: {cast}</p>
      <p>Genre: {genre}</p>
      <p>This show is :{theme}</p>
      <button onClick={() => setModal(<VideoPlay URL={URL} />)}>Play</button>
    </div>
  );
}
