//NPM package
import { Routes, Route } from "react-router-dom";

//Project files
import Content from "pages/users/Content";
import Login from "pages/users/Login";
import Signup from "pages/users/Signup";
import PasswordReset from "pages/users/PasswordReset";

export default function Users() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="content" element={<Content />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="resetpassword" element={<PasswordReset />} />
      </Routes>
    </div>
  );
}
