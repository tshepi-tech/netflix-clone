//NPM package
import { useEffect, useState } from "react";

//Project files
import EpisodesItem from "components/users/EpisodesItem";
import { readCollection } from "scripts/firestore";
import SelectField from "components/app/SelectField";

export default function SeriesModal({ title }) {
  const { name, imageURL, age, duration, cast, text, theme, genre, AD, HD } =
    title;

  //Local state
  const [count, setCount] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  //Properties
  const path = `netflix/series/content/${title.id}/content`;
  const episodePath = `netflix/series/content/${title.id}/content/1/content`;
  const seasonCount = count.length;
  console.log(title.id);
  // Method
  useEffect(() => {
    async function loadData(path) {
      const data = await readCollection(path).catch(onFail);
      if (data) onSuccess(data);
    }
    loadData(path);
  }, []);
  function onSuccess(data) {
    setCount(data);
  }
  function onFail(error) {
    console.error(error);
  }

  useEffect(() => {
    async function loadData(episodePath) {
      const data = await readCollection(episodePath);
      setEpisodes(data);
    }

    loadData(episodePath);
  }, []);

  const EpisodeList = episodes.map((episode) => (
    <EpisodesItem key={episode.id} episode={episode} />
  ));

  return (
    <div>
      <img src={imageURL} />
      <p>{age}</p>
      {duration}
      <p>{seasonCount} Seasons</p>
      <h1>{name}</h1>
      <p>{text}</p>
      <p>Cast: {cast}</p>
      <p>Genre: {genre}</p>
      <p>This show is :{theme}</p>
      <SelectField title={title} />
      {/* {EpisodeList} */}
    </div>
  );
}
