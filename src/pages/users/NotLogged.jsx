//NPM package
import { Link } from "react-router-dom";

export default function NotLogged() {
  return (
    <div>
      Hi it seems as though you are not logged in. Create an account or log in
      here:
      <br></br>
      <Link to="/signup">Create account</Link>
      <br></br>
      <Link to="/login">Log In</Link>
      <br></br>
      <Link to="/reset-password">Reset password</Link>
    </div>
  );
}
