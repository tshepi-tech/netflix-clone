//Project files
import DocumentariesContent from "components/users/DocumentariesContent";
import MovieContent from "components/users/MovieContent";
import SeriesContent from "components/users/SeriesContent";

export default function Content() {
  return (
    <div>
      <h1>Series</h1>
      <SeriesContent />
      <h1>Movies</h1>
      <MovieContent />
      <h1>Documentaries</h1>
      <DocumentariesContent />
    </div>
  );
}
