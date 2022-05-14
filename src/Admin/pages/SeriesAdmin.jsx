//Project files
import CreateSeries from "Admin/components/CreateSeries";
import mediaData from "Admin/data/mediaData";
import seriesData from "Admin/data/seriesData";
import { useModal } from "state/ModalContext";

export default function DocumentaryAdmin() {
  const { setModal } = useModal();
  const createDocumentary = (
    <CreateSeries seriesData={seriesData} mediaData={mediaData} />
  );

  return (
    <div>
      <button onClick={() => setModal(createDocumentary)}>Add Series</button>
    </div>
  );
}
