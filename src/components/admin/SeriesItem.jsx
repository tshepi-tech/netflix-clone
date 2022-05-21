//NPM package
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
//Project Files
import { useModal } from "state/ModalContext";
import DeleteTitle from "components/admin/DeleteTitle";
import UpdateTitle from "components/admin/UpdateTitle";

export default function SeriesItem({ title, path, titleData }) {
  const { categoryId } = useParams();
  //Global state
  const { setModal } = useModal();
  //Properties
  const seasonManger = `/series/${title.id}`;

  return (
    <article>
      <p>{title.name}</p>
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
      <Link to={seasonManger}>
        <button>Season</button>
      </Link>
    </article>
  );
}
