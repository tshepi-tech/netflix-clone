//NPM package
import { useEffect, useState } from "react";
//Project files
import EpisodesItem from "components/users/EpisodesItem";
import { readCollection } from "scripts/firestore";
export default function SelectField({ title }) {
  const [episodes, setEpisodes] = useState([]);
  const [value, setValue] = useState("");

  //Properties
  function onSelect(event) {
    setValue(event.target.value);
  }
  const seasonNo = value;

  const episodePath = `netflix/series/content/${title.id}/content/${seasonNo}/content`;
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
      <label for="seasons">Seasons</label>
      <select name="seasons" id="seasons" value={value} onChange={onSelect}>
        <option value="1">Season 1</option>
        <option value="2">Season 2</option>
        <option value="3">Season 3</option>
        <option value="4">Season 4</option>
        <option value="5">Season 5</option>
      </select>
      Season: {value}
      {EpisodeList}
    </div>
  );
}
