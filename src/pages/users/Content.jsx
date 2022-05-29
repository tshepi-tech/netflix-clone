//Project files
import DocumentariesContent from "components/users/DocumentariesContent";
import logo from "assets/brand/main_logo.png";
import MovieContent from "components/users/MovieContent";
import SeriesContent from "components/users/SeriesContent";
import { useModal } from "state/ModalContext";
import VideoPlay from "components/users/VideoPlay";

export default function Content() {
  const { setModal } = useModal();
  const URL = `https://www.youtube.com/watch?v=SAkAf-Xloho`;
  return (
    <section className="content__page">
      <section className="navigation">
        <img src={logo}></img>
      </section>
      <header className="header">
        <section className="header__buttons">
          <button
            onClick={() => setModal(<VideoPlay URL={URL} />)}
            className="play"
          >
            Play
          </button>
          <button className="more__info">More Info</button>
        </section>
      </header>
      <h1 className="movies">Movies</h1>
      <div className="movieList">
        <MovieContent />
      </div>
      <div className="inner__content">
        <div className="seriesList">
          <h1>Series</h1>
          <SeriesContent />
        </div>
        <div className="docsList">
          <h1>Documentaries</h1>
          <DocumentariesContent />
        </div>
      </div>
    </section>
  );
}
