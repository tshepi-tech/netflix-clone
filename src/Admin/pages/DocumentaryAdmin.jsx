//Project files
import CreateTitle from "Admin/components/CreateTitle";
import titleData from "Admin/data/titleData";
import { useModal } from "state/ModalContext";

export default function DocumentaryAdmin() {
  const { setModal } = useModal();
  const createDocumentary = <CreateTitle titleData={titleData} />;
  return (
    <div>
      <button onClick={() => setModal(createDocumentary)}>
        Add Documentary
      </button>
    </div>
  );
}
