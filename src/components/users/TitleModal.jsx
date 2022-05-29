//Project Files
import { useModal } from "state/ModalContext";
import VideoPlay from "./VideoPlay";
import foxcatcher from "assets/images/foxcatcher.jpg";
import straightOC from "assets/images/straightOC.jpg";

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
      <div className="title__info">
        <section className="description__all">
          <div className="container1">
            <span className="year">{year}</span>
            <span className="age">{age}</span>
            <span className="duration">{duration}</span>
          </div>
          <div className="container2">
            <p className="description">{text}</p>
          </div>
        </section>

        <div className="container3">
          <span>
            <p className="detail">Cast:</p> <p className="detail2">{cast}</p>
          </span>
          <span className="genre">
            <p className="detail">Genre:</p> <p className="detail2"> {genre}</p>
          </span>
          <span className="theme">
            <p className="detail">This show is: </p>
            <p className="detail2">{theme}</p>
          </span>
        </div>
      </div>
      <h2 className="more">More Like This</h2>
      <section className="extra__images">
        <img src={foxcatcher} alt="foxcatcher thumbnail" />
        <img src={straightOC} alt="straight outta compton tumbnail" />
      </section>
    </section>
  );
}
