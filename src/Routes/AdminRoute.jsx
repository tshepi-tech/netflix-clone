//NPM packages
import { Routes, Route } from "react-router-dom";

//Project files
import Categories from "pages/admin/Categories";
import EpisodesAdmin from "pages/admin/EpisodesAdmin";
import SeasonsAdmin from "pages/admin/SeasonsAdmin";
import SeriesAdmin from "pages/admin/SeriesAdmin";
import TitlesAdmin from "pages/admin/TitlesAdmin";

export default function AdminRoute() {
  return (
    <div>
      <Routes>
        <Route path="categories" element={<Categories />} />
        <Route path="categories/series" element={<SeriesAdmin />} />
        <Route path="categories/:categoryId" element={<TitlesAdmin />} />
        <Route path="series/:seriesId" element={<SeasonsAdmin />} />
        <Route path="series/:seriesId/:seasonId" element={<EpisodesAdmin />} />
      </Routes>
    </div>
  );
}
