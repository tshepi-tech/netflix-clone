//Project Files
import SeriesModal from "pages/users/SeriesModal";
import { useModal } from "state/ModalContext";

export default function ContentCard({ title }) {
  //Global state
  const { setModal } = useModal();
  return (
    <div>
      <button onClick={() => setModal(<SeriesModal title={title} />)}>
        <img src={title.imageURL} alt="title-thumbnail" />
        <br></br>
        {title.name}
      </button>
    </div>
  );
}
