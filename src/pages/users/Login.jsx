import React from "react";

//NPM packages
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Project files
import Input from "components/users/Input";
import form from "data/users/signupForm.json";
import logo from "assets/brand/main_logo.png";
import { loginUser } from "scripts/firebaseAuth";
import { readCollection } from "scripts/firestore";
import { useUserRole } from "state/UserRolesContext";
import { useUID } from "state/UIDContext";

export default function Login({ uidState, adminState }) {
  const navigation = useNavigate();
  const { setUID } = useUID();
  const { setUIDadmin } = useUID();
  const { users, setUsers } = useUserRole();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    async function loadData(path) {
      const data = await readCollection(path);
      setUsers(data);
    }
    loadData("users");
  }, []);

  function isUser(loginUID) {
    const user = users.find((item) => item.id === loginUID);
    if (user) {
      setUID(loginUID);
      navigation("/content");
    } else {
      setUIDadmin(loginUID);
      navigation("/categories");
    }
  }

  async function onLogin(event) {
    event.preventDefault();

    const loginUID = await loginUser(email, password);
    isUser(loginUID);
    resetForm();
  }

  function resetForm() {
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <h1>Welcome back</h1>
      <div className="form-content">
        <form onSubmit={onLogin}>
          <Input setup={form.email} state={[email, setEmail]} />
          <Input setup={form.password} state={[password, setPassword]} />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
