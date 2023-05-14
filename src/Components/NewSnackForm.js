import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  "../Style/NewSnackForm.css"

const API = process.env.REACT_APP_API_URL;

function NewSnackForm() {
  let navigate = useNavigate();

  const addSnack = (newSnack) => {
    axios
      .post(`${API}/snacks`, newSnack)
      .then(
        () => {
          navigate(`/Snacks`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [snack, setSnack] = useState({
    name:"",
    image:"",
    fiber:"",
    protein:"",
    sugar: "",
  });

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

 

  const handleSubmit = (event) => {
    event.preventDefault();
    addSnack(snack);
  };
  return (
    <div className="New">
      <h3><b>Add Snack</b></h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Snack Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          required
          onChange={handleTextChange}
          placeholder="Name of Snack"
          
        />
        <label htmlFor="image">Snack Image:</label>
        <input
          id="image"
          type="text"
          pattern="https[s]*://.+"
          title="a valid url is required"
          value={snack.image}
          placeholder="Image Url"
          onChange={handleTextChange}
          required
        />

        <div className="PFS">
        <label htmlFor="fiber">Fiber:</label>
        <input
          id="fiber"
          type="number"
          name="fiber"
          min="0"
          value={snack.fiber}
          onChange={handleTextChange}
          placeholder="% of Fiber"
        />
        <label htmlFor="protein">Protein:</label>
        <input
          id="protein"
          type="number"
          name="protein"
          min="0"
          value={snack.protein}
          onChange={handleTextChange}
          placeholder="% of Protein"
        />
        <label htmlFor="sugar">Sugar:</label>
        <input
          id="sugar"
          type="number"
          name="sugar"
          min="0"
          value={snack.sugar}
          onChange={handleTextChange}
          placeholder="% of Sugar"
        />
       </div>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewSnackForm;