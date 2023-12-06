import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const url = "http://localhost:4000/";
const EmailFormat =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function Home() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  async function ValidateEmail(e) {
    e.preventDefault();
    if (EmailFormat.test(Email)) {
      console.log("valid email");

      try {
        const SendRes = await axios.post(url, {
          Email: Email,
          Password: Password,
        });
        console.log("data send success");
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("invalid email");
    }
  }

  return (
    <>
      <Header />
      <form onSubmit={ValidateEmail}>
        <label>Email</label>
        <input
          type="email"
          id="Email"
          value={Email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="text"
          id=""
          value={Password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button type="submit" onChange={ValidateEmail}>
          Submit
        </button>
        <br />

        {/* <Footer /> */}
      </form>
    </>
  );
}

export default Home;
