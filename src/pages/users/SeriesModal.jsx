//NPM package
import { useEffect, useState } from "react";

//Project files
import EpisodesItem from "components/users/EpisodesItem";
import { readCollection } from "scripts/firestore";
import SelectField from "components/users/SelectField";

export default function SeriesModal({ title }) {
  const {
    year,
    name,
    imageURL,
    age,
    duration,
    cast,
    text,
    theme,
    genre,
    AD,
    HD,
  } = title;

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

  return (
    <section className="title__modal">
      <img className="main__image" src={imageURL} />
      <div className="title__info">
        <section className="description__all">
          <div className="container1">
            <span className="year">{year}</span>
            <span className="age">{age}</span>
            <span className="duration">{seasonCount} Seasons</span>
          </div>
          <div className="container2">
            <p className="description">{text}</p>
          </div>
        </section>
        <div className="container3">
          <span>
            <p className="detail">Cast:</p> <p className="detail2">{cast}</p>
          </span>
          <span className="genre">
            <p className="detail">Genre:</p> <p className="detail2"> {genre}</p>
          </span>
          <span className="theme">
            <p className="detail">This show is: </p>
            <p className="detail2">{theme}</p>
          </span>
        </div>
      </div>
      <SelectField title={title} />
    </section>
  );
}
