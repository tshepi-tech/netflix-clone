//Project files
import DocumentariesContent from "components/users/DocumentariesContent";
import logo from "assets/brand/main_logo.png";
import MovieContent from "components/users/MovieContent";
import SeriesContent from "components/users/SeriesContent";

export default function Content() {
  return (
    <section className="content__page">
      <section className="navigation">
        <img src={logo}></img>
      </section>
      <header className="header">
        <section className="header__buttons">
          <button className="play">Play</button>
          <button className="more__info">More Info</button>
        </section>
      </header>
      <h1 className="movies">Movies</h1>
      <div className="movieList">
        <MovieContent />
      </div>
      <h1>Series</h1>
      <SeriesContent />
      <h1>Documentaries</h1>
      <DocumentariesContent />
    </section>
  );
}
