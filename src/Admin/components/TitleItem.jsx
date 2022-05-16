//NPM packages
import { Link } from "react-router-dom";

//Project Files
import { useModal } from "state/ModalContext";
import DeleteTitle from "Admin/components/DeleteTitle";
import UpdateTitle from "Admin/components/UpdateTitle";

export default function TitleItem({ title }) {
  //Global state
  const { setModal } = useModal();

  return (
    <article>
      <p>{title.name}</p>
      <button onClick={() => setModal(<UpdateTitle title={title} />)}>
        ✍️
      </button>
      <button onClick={() => setModal(<DeleteTitle title={title} />)}>🗑</button>
    </article>
  );
}
