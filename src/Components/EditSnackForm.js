import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function EditSnackForm() {
  let { snackId } = useParams();

  let navigate = useNavigate();

  const [snack, setSnack] = useState({
    name:"",
    protein: 0,
    fiber: 0,
    sugar: 0,
  });

  const updatedSnack = (updateSnack, snackId) => {

    axios
      .put(`${API}/snacks/${snackId}`, updateSnack)
      .then(
        () => {
          navigate(`/snacks/${snackId}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };


  const handleTextChange = (event) => {
    console.log(event.target.value)
    setSnack({ ...snack, [event.target.id]: event.target.value });
    console.log(snack)
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
          type="number"
          value={snack.protein}
          onChange={handleTextChange}
          required
        />
        <br/>
    
        <br/>
        <label htmlFor="fiber">Fiber:</label>
        <input
          id="fiber"
          type="number"
          name="fiber"
          value={Number(snack.fiber)}
          onChange={handleTextChange}
      
          required
        />
        <br/>
        <label htmlFor="sugar">Sugar:</label>
        <input
          id="sugar"
          type="number"
          name="sugar"
          value={Number(snack.sugar)}
          onChange={handleTextChange}
          placeholder={snack.sugar}
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