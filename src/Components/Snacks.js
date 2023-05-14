import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack";
import "../Style/Snacks.css"

const API = process.env.REACT_APP_API_URL;

function Snacks() {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((response) => {
        console.log("hello")
        setSnacks(response.data);

      })
      .catch((e) => {
        console.warn("catch", e);
      });
  }, []);

  return (
   
      <section className="Snacks">
          <p>Snacks</p>
          <article className="all-snacks">
             
            {/* {snacks.map((snack) => {
              return <Snack key={snack.snack_id} snack={snack} />;
            })} */}
         </article>
      </section>
   
  );
}

export default Snacks;