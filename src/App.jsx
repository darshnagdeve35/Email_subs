import { useState } from "react";
import "./App.css";

function App() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  return (
    <>
      <form action="" method="post">
        <label>Email</label>
        <input
          type="text"
          id="Email"
          value={Email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label>text</label>
        <input
          type="text"
          name="text"
          id=""
          value={Password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
