//NPM packages
import { Link } from "react-router-dom";

export default function NavigationStatic() {
  return (
    <nav className="UnloggedNav">
      <div className="NavButtons">
        <Link to="/resetpassword">
          <button className="nav_buttons">Reset password</button>
        </Link>
        <Link to="/login">
          <button className="nav_buttons">Log In</button>
        </Link>
      </div>
    </nav>
  );
}
