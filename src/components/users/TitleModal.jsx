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
    year,
  } = title;

  console.log(imageURL);
  //Global state
  const { setModal } = useModal();
  return (
    <section className="title__modal">
      <img className="main__image" src={imageURL} />
      <button
        className="play__title"
        onClick={() => setModal(<VideoPlay URL={URL} />)}
      >
        Play
      </button>
      <div className="container1">
        <span>{year}</span>
        <span>{age}</span>
        <span>{duration}</span>
      </div>

      {/* <h1>{name}</h1> */}
      <section className="description__all">
        <div className="container2">
          <p className="description">{text}</p>
        </div>
        <div className="container3">
          <p>Cast: {cast}</p>
          <p>Genre: {genre}</p>
          <p>This show is :{theme}</p>
        </div>
      </section>
    </section>
  );
}
