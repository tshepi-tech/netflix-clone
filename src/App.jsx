//NPM packages
import { Route, Routes } from "react-router-dom";

//Project files
import Admin from "Routes/Admin";
import Categories from "pages/admin/Categories";
import Content from "pages/users/Content";
import EpisodesAdmin from "pages/admin/EpisodesAdmin";
import Modal from "components/app/Modal";
import { ModalProvider } from "state/ModalContext";
import TitlesAdmin from "pages/admin/TitlesAdmin";
import SeasonsAdmin from "pages/admin/SeasonsAdmin";
import SeriesAdmin from "pages/admin/SeriesAdmin";
import Signup from "pages/users/Signup";
import "styles/styles.css";
import { TitleProvider } from "state/TitleContext";
import Unlogged from "Routes/Unlogged";
import Users from "Routes/Users";
import { useUID } from "state/UIDContext";
import { UserRoleProvider } from "state/UserRolesContext";

export default function App() {
  //Global state
  const { uid } = useUID();
  const { uidAdmin } = useUID();
  return (
    <ModalProvider>
      <TitleProvider>
        <UserRoleProvider>
          <div className="App">
            {!uid && !uidAdmin && <Unlogged />}
            {uidAdmin && <Admin />}
            {uid && <Users />}
            <Modal />
          </div>
        </UserRoleProvider>
      </TitleProvider>
    </ModalProvider>
  );
}
