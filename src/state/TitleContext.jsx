// NPM packages
import { createContext, useContext, useState } from "react";

// Properties
const Context = createContext(null);

// Methods
// For the parent
export function TitleProvider({ children }) {
  // Local state
  const [titles, setTitles] = useState([]);
  const [seasons, setSeasons] = useState([]);
  // Properties
  const value = {
    titles,
    setTitles,
    addTitle,
    deleteTitle,
    seasons,
    setSeasons,
    addSeasons,
  };

  // Methods
  function addTitle(newTitle) {
    setTitles([...titles, newTitle]);
  }

  function addSeasons(newSeason) {
    setTitles([...seasons, newSeason]);
  }

  function editItem(editedItem) {
    const clonedTitles = [...titles];
    const index = clonedTitles.findIndex((item) => item.id === editedItem.id);

    clonedTitles[index] = editedItem;
    setTitles(clonedTitles);
  }

  function deleteTitle(id) {
    const filteredTitles = titles.filter((item) => item.id !== id);

    setTitles(filteredTitles);
  }

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

// For the child
export function useTitle() {
  const context = useContext(Context);
  const errorText =
    "To use useTitles(), you need to wrap the parent component with <TitleProvider/>";

  // Safeguards
  if (!context) throw new Error(errorText);

  return context;
}
