//NPM packages
import { Routes, Route } from "react-router-dom";

//Project files
import Categories from "Admin/pages/Categories";
import DocumentaryAdmin from "Admin/pages/DocumentaryAdmin";
import EpisodesAdmin from "Admin/pages/EpisodesAdmin";
import MoviesAdmin from "Admin/pages/TitlesAdmin";
import SeasonsAdmin from "Admin/pages/SeasonsAdmin";
import SeriesAdmin from "Admin/pages/SeriesAdmin";

export default function AdminRoute() {
  return (
    <div>
      <Routes>
        <Route path="categories" element={<Categories />} />
        <Route path="categories/documentaries" element={<DocumentaryAdmin />} />
        <Route path="categories/movies" element={<MoviesAdmin />} />
        <Route path="categories/series" element={<SeriesAdmin />} />
        <Route path="categories/seriesId" element={<SeasonsAdmin />} />
        <Route
          path="categories/seriesId/seasonId"
          element={<EpisodesAdmin />}
        />
      </Routes>
    </div>
  );
}
