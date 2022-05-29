//Project Files
import { useModal } from "state/ModalContext";
import DeleteTitle from "components/admin/DeleteTitle";
import UpdateTitle from "components/admin/UpdateTitle";

export default function TitleItem({ title, path, titleData }) {
  //Global state
  const { setModal } = useModal();

  return (
    <article className="admin__title">
      <img title={title.thmbnail} />
      <p className="title__name">{title.name}</p>
      <button
        onClick={() =>
          setModal(
            <UpdateTitle title={title} path={path} titleData={titleData} />
          )
        }
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
