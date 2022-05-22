export default function SeriesModal({ title }) {
  const { name, imageURL, age, duration, cast, text, theme, genre, AD, HD } =
    title;

  return (
    <div>
      <img src={imageURL} />
      <p>{age}</p>
      {duration}
      <h1>{name}</h1>
      <p>{text}</p>
      <p>Cast: {cast}</p>
      <p>Genre: {genre}</p>
      <p>This show is :{theme}</p>
    </div>
  );
}
