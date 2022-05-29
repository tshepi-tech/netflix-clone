// Project files
import emptyTV from "assets/images/emptyTV.png";

export default function Placeholder() {
  return (
    <article>
      <img src={emptyTV} alt="A TV with wave lines on screen" />
      <p className="placeholder">There is no content yet. Please add</p>
    </article>
  );
}
