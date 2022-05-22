//Project Files
import { useModal } from "state/ModalContext";
import TitleModal from "./TitleModal";

export default function ContentCard({ title }) {
  //Global state
  const { setModal } = useModal();
  return (
    <div>
      <button onClick={() => setModal(<TitleModal title={title} />)}>
        <img src={title.imageURL} alt="title-thumbnail" />
        <br></br>
        {title.name}
      </button>
    </div>
  );
}
