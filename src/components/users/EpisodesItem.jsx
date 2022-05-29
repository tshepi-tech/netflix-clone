//Project Files
import { useModal } from "state/ModalContext";
import VideoPlay from "./VideoPlay";

export default function EpisodesItem({ episode }) {
  const { name, number, URL, duration, text, thmbnailURL } = episode;
  //Global state
  const { setModal } = useModal();
  return (
    <div className="episode__item">
      <p className="episode__number">{number}</p>
      <button onClick={() => setModal(<VideoPlay URL={URL} />)}>
        <img className="episode__img" src={thmbnailURL} />
      </button>

      <div className="episode__info">
        <div className="container1__episode">
          <p className="episode__name">{name}</p>
          <p className="episode__duration">{duration}</p>
        </div>
        <p className="episode__text">{text}</p>
      </div>
    </div>
  );
}
