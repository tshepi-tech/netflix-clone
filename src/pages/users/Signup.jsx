//NPM packages
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//Project files
import form from "data/users/signupForm.json";
import logo from "assets/brand/main_logo.png";
import Input from "components/users/Input";
import { createUser } from "scripts/firebaseAuth";
import { createDocumentWithId } from "scripts/firestore";
import { useUID } from "state/UIDContext";

export default function Signup() {
  const navigation = useNavigate();
  //Global state
  const { uid, setUID } = useUID();

  //Local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const loggedInUser = localStorage.getItem(uid);
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUID(foundUser);
    }
  }, []);

  async function onSignup(event) {
    event.preventDefault();
    const newUID = await createUser(email, password);
    const newUser = {
      email: email,
    };
    const payload = await createDocumentWithId("users", newUID, newUser);
    if (payload.error) alert("Could not create user");
    else {
      setUID(newUID);
      navigation("/content");
    }
  }
  return (
    <div>
      <section className="hero">
        <div className="navbar">
          <img className="logo" src={logo} alt="Netflix logo" />
          <Link className="navbar__signin" to="/login">
            <button>Sign In</button>
          </Link>
        </div>
        <section className="main">
          <div className="landing">
            <h1>Unlimited films, TV programmes and more.</h1>
            <h3>Watch anywhere. Cancel at any time.</h3>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <form className="signup__form" onSubmit={onSignup}>
              <Input setup={form.email} state={[email, setEmail]} />
              <Input
                input_auth
                setup={form.password}
                state={[password, setPassword]}
              />
              <button className="getStarted">
                <p>Get Started</p>
              </button>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
}
