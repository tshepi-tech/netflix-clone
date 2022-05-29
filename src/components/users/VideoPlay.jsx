//Project files
import YoutubeEmbed from "components/users/YoutubeEmbed";

export default function VideoPlay({ URL }) {
  const videoUrl = URL;
  let videoCode;
  if (videoUrl) {
    videoCode = videoUrl.split("v=")[1].split("&")[0];
  }
  return (
    <div className="App">
      <YoutubeEmbed embedId={videoCode} />
    </div>
  );
}
