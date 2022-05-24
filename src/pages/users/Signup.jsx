//NPM packages
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//Project files
import InputField from "components/app/InputField";
import form from "data/users/signupForm.json";
import { createUser } from "scripts/firebaseAuth";
import { createDocumentWithId } from "scripts/firestore";
import { useUID } from "state/UIDContext";

export default function Signup() {
  const navigation = useNavigate();
  //Global state
  const { uid, setUID } = useUID();

  //Local state
  const [email, setEmail] = useState("tshepi.lehutjo@gmail.com");
  const [password, setPassword] = useState("12345abcd");

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
      <h1>Unlimited films, TV programmes and more.</h1>
      <h2>Watch anywhere. Cancel at any time.</h2>
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form onSubmit={onSignup}>
        <InputField setup={form.email} state={[email, setEmail]} />
        <InputField setup={form.password} state={[password, setPassword]} />
        <button>Submit</button>
      </form>
    </div>
  );
}
