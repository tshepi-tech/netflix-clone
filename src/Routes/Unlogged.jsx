//NPM package
import { Routes, Route } from "react-router-dom";

//Project files
import Login from "pages/users/Login";
import Signup from "pages/users/Signup";
import NotLogged from "pages/users/NotLogged";
import PasswordReset from "pages/users/PasswordReset";

export default function Unlogged() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NotLogged />} />
        <Route path="resetpassword" element={<PasswordReset />} />
      </Routes>
    </div>
  );
}
