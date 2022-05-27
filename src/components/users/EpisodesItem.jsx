//Project Files
import { useModal } from "state/ModalContext";
import VideoPlay from "./VideoPlay";

export default function EpisodesItem({ episode }) {
  const { name, URL, duration, thmbnailURL } = episode;
  //Global state
  const { setModal } = useModal();
  return (
    <div>
      <br></br>
      {name}
      {duration}
      <button onClick={() => setModal(<VideoPlay URL={URL} />)}>Play</button>
    </div>
  );
}
