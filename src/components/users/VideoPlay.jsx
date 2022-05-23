//Project files
import YoutubeEmbed from "components/users/YoutubeEmbed";

export default function VideoPlay({ URL }) {
  //   const [videoUrl, setVideoUrl] = useState("");
  const videoUrl = URL;
  let videoCode;
  if (videoUrl) {
    videoCode = videoUrl.split("v=")[1].split("&")[0];
  }
  return (
    <div className="App">
      {/* <input value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} /> */}
      <YoutubeEmbed embedId={videoCode} />
    </div>
  );
}
