//NPM packages
import { Route, Routes } from "react-router-dom";

//Project files
import Categories from "Admin/pages/Categories";
import EpisodesAdmin from "Admin/pages/EpisodesAdmin";
import Modal from "AppComponents/Modal";
import { ModalProvider } from "state/ModalContext";
import TitlesAdmin from "Admin/pages/TitlesAdmin";
import SeasonsAdmin from "Admin/pages/SeasonsAdmin";
import SeriesAdmin from "Admin/pages/SeriesAdmin";
import "styles/styles.css";
import { TitleProvider } from "state/TitleContext";

export default function App() {
  return (
    <ModalProvider>
      <TitleProvider>
        <div className="App">
          <Routes>
            <Route path="categories" element={<Categories />} />
            <Route path="categories/series" element={<SeriesAdmin />} />
            <Route path="categories/:categoryId" element={<TitlesAdmin />} />
            <Route path="series/:seriesId" element={<SeasonsAdmin />} />
            <Route
              path="categories/:seriesId/:seasonId"
              element={<EpisodesAdmin />}
            />
          </Routes>
          <Modal />
        </div>
      </TitleProvider>
    </ModalProvider>
  );
}
