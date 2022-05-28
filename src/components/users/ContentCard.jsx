//Project Files
import { useModal } from "state/ModalContext";
import TitleModal from "./TitleModal";

export default function ContentCard({ title }) {
  const { thmbnailURL } = title;
  //Global state
  const { setModal } = useModal();
  return (
    <section className="content__card">
      <button onClick={() => setModal(<TitleModal title={title} />)}>
        <img src={thmbnailURL} alt="title-thumbnail" />
      </button>
    </section>
  );
}
