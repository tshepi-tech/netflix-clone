//Project Files
import { useModal } from "state/ModalContext";
import DeleteTitle from "Admin/components/DeleteTitle";
import UpdateTitle from "Admin/components/UpdateTitle";

export default function TitleItem({ title, path }) {
  //Global state
  const { setModal } = useModal();

  return (
    <article>
      <p>{title.name}</p>
      <button
        onClick={() => setModal(<UpdateTitle title={title} path={path} />)}
      >
        ✍️
      </button>
      <button
        onClick={() => setModal(<DeleteTitle title={title} path={path} />)}
      >
        🗑
      </button>
    </article>
  );
}
