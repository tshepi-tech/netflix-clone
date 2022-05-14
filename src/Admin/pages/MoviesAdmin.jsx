//Project files
import CreateTitle from "Admin/components/CreateTitle";
import mediaData from "Admin/data/mediaData";
import titleData from "Admin/data/titleData";
import { useModal } from "state/ModalContext";

export default function MoviesAdmin() {
  const { setModal } = useModal();
  const createMovies = (
    <CreateTitle titleData={titleData} mediaData={mediaData} />
  );

  return (
    <div>
      <button onClick={() => setModal(createMovies)}>Add Movie</button>
    </div>
  );
}
