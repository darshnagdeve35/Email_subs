import axios from "axios";
import { useEffect, useRef } from "react";
const url = "https://jsonplaceholder.typicode.com/todos/1";

function FirstReq() {
  async function getData() {
    try {
      const response = await axios(url);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      getData();
    }
  }, []);
}

export default FirstReq;
