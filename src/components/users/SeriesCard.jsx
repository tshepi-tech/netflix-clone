//Project Files
import SeriesModal from "pages/users/SeriesModal";
import { useModal } from "state/ModalContext";

export default function ContentCard({ title }) {
  const { thmbnailURL } = title;
  //Global state
  const { setModal } = useModal();
  return (
    <div>
      <button onClick={() => setModal(<SeriesModal title={title} />)}>
        <img className="series__card" src={thmbnailURL} alt="title-thumbnail" />
      </button>
    </div>
  );
}
