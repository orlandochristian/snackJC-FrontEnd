import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function EditSnackForm() {
  let { snackId } = useParams();

  let navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    protein: "",
    fiber: "",
    sugar: "",
    snack_id: snackId,
  });

  const updatedSnack = (updateSnack, snackId) => {
    axios
      .put(`${API}/snack/${snackId}`, updateSnack)
      .then(
        () => {
          navigate(`/snacks/${snackId}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios.get(`${API}/snacks/${snackId}`).then(
      (response) => setSnack(response.data)
      //(error) => navigate(`/not-found`)
    );
  }, [snackId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updatedSnack(snack, snackId);
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Snack Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Snack"
          required
        />
        <br/>
        <label htmlFor="protein">Protein:</label>
        <input
          id="protein"
          type="text"
          value={snack.protein}
          onChange={handleTextChange}
          placeholder="Protein %"
          required
        />
        <br/>
    
        <br/>
        <label htmlFor="fiber">Fiber:</label>
        <input
          id="fiber"
          type="text"
          name="fiber"
          value={snack.fiber}
          onChange={handleTextChange}
          placeholder="Fiber %"
          required
        />
        <br/>
        <label htmlFor="sugar">Sugar:</label>
        <input
          id="sugar"
          type="text"
          name="sugar"
          value={snack.sugar}
          onChange={handleTextChange}
          placeholder="Sugar %"
          required

          
        />
        <div className='nav-buttons'>
          <Link to={`/snacks/${snackId}`}><button>Back</button></Link> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="submit">Submit</button>
        </div>
      </form>
      
    </div>
  );
}

export default EditSnackForm;