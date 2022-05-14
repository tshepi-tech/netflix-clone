//NPM packages
import { Route, Routes } from "react-router-dom";

//Project files
import Categories from "Admin/pages/Categories";
import DocumentaryAdmin from "Admin/pages/DocumentaryAdmin";
import EpisodesAdmin from "Admin/pages/EpisodesAdmin";
import Modal from "AppComponents/Modal";
import { ModalProvider } from "state/ModalContext";
import MoviesAdmin from "Admin/pages/MoviesAdmin";
import SeasonsAdmin from "Admin/pages/SeasonsAdmin";
import SeriesAdmin from "Admin/pages/SeriesAdmin";
import "styles/styles.css";

export default function App() {
  return (
    <ModalProvider>
      <div className="App">
        <Routes>
          <Route path="categories" element={<Categories />} />
          <Route path="documentaries" element={<DocumentaryAdmin />} />
          <Route path="movies" element={<MoviesAdmin />} />
          <Route path="series" element={<SeriesAdmin />} />
          <Route path="categories/seriesId" element={<SeasonsAdmin />} />
          <Route
            path="categories/seriesId/seasonId"
            element={<EpisodesAdmin />}
          />
        </Routes>
        <Modal />
      </div>
    </ModalProvider>
  );
}
