//NPM package
import { useParams } from "react-router-dom";
//Project files
import CreateTitle from "Admin/components/CreateTitle";
import mediaData from "Admin/data/mediaData";
import titleData from "Admin/data/titleData";
import { useModal } from "state/ModalContext";

export default function MoviesAdmin() {
  const { categoryId } = useParams();
  const { setModal } = useModal();

  //Properties
  const path = `netflix/${categoryId}/content`;
  const createMovies = (
    <CreateTitle titleData={titleData} mediaData={mediaData} path={path} />
  );

  //We will list the movies here
  //1.empty page 2.movieList 3.add button

  return (
    <div>
      <button onClick={() => setModal(createMovies)}>Add {categoryId}</button>
    </div>
  );
}
