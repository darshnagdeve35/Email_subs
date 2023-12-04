import { useState, useEffect, useRef } from "react";
import "./App.css";
import FirstReq from "./api/apiCall1";
import axios from "axios";

function App() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const url = "http://localhost:4000/";

  async function Onsubmit(e) {
    e.preventDefault();
    console.log(Email + " " + Password);
    try {
      const SendRes = await axios.post(url, {
        Email: Email,
        Password: Password,
      });

      const ResData = SendRes.data;
      console.log(ResData);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <form onSubmit={Onsubmit}>
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
        <br />
        {/* <FirstReq /> */}
      </form>
    </>
  );
}

export default App;
