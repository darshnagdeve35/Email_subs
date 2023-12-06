import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const url = "http://localhost:4000/";

function Home() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  async function Onsubmit(e) {
    e.preventDefault();

    try {
      const SendRes = await axios.post(url, {
        Email: Email,
        Password: Password,
      });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <Header />
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

        {/* <Footer /> */}
      </form>
    </>
  );
}

export default Home;
