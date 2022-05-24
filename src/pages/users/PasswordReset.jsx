//NPM packages
import { useState } from "react";
import { Link } from "react-router-dom";

//Project files
import InputField from "components/app/InputField";
import form from "data/users/resetPasswordForm.json";
import { resetUser } from "scripts/firebaseAuth";
import NavigationStatic from "components/users/NavigationStatic";

export default function PasswordReset() {
  const [email, setEmail] = useState("tshepi.lehutjo@gmail.com");

  async function onReset(event) {
    event.preventDefault();

    await resetUser(email);
    alert(`We sent an email to ${email}. Check you spam folder as well.`);
  }

  return (
    <div>
      <NavigationStatic />
      <p>
        Please fill in the email which you used to create the account of the
        password you want to reset. Instructions to reset the password will be
        sent to that email.
      </p>
      <div className="form-content">
        <form onSubmit={onReset}>
          <InputField setup={form.email} state={[email, setEmail]} />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
