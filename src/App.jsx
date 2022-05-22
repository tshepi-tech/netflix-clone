//NPM packages
import { Route, Routes } from "react-router-dom";

//Project files
import Categories from "pages/admin/Categories";
import Content from "pages/users/Content";
import EpisodesAdmin from "pages/admin/EpisodesAdmin";
import Modal from "components/app/Modal";
import { ModalProvider } from "state/ModalContext";
import TitlesAdmin from "pages/admin/TitlesAdmin";
import SeasonsAdmin from "pages/admin/SeasonsAdmin";
import SeriesAdmin from "pages/admin/SeriesAdmin";
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
              path="series/:seriesId/:seasonId"
              element={<EpisodesAdmin />}
            />
            <Route path="content" element={<Content />} />
          </Routes>
          <Modal />
        </div>
      </TitleProvider>
    </ModalProvider>
  );
}
