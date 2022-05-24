//NPM packages
import { Routes, Route } from "react-router-dom";

//Project files
import Categories from "pages/admin/Categories";
import EpisodesAdmin from "pages/admin/EpisodesAdmin";
import Login from "pages/users/Login";
import PasswordReset from "pages/users/PasswordReset";
import SeasonsAdmin from "pages/admin/SeasonsAdmin";
import SeriesAdmin from "pages/admin/SeriesAdmin";
import Signup from "pages/users/Signup";
import TitlesAdmin from "pages/admin/TitlesAdmin";

export default function Admin() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="resetpassword" element={<PasswordReset />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/series" element={<SeriesAdmin />} />
        <Route path="categories/:categoryId" element={<TitlesAdmin />} />
        <Route path="series/:seriesId" element={<SeasonsAdmin />} />
        <Route path="series/:seriesId/:seasonId" element={<EpisodesAdmin />} />
      </Routes>
    </div>
  );
}
