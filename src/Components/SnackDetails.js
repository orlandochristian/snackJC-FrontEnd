import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";


const API = process.env.REACT_APP_API_URL
 
function SnackDetails() {
  const [snack, setSnack] = useState({});
  const { snackId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/snacks/${snackId}`)
    .then((response) => {
     
      setSnack(response.data)
    }).catch((e) => {
      console.warn("catch:", e)
    })
  }, [snackId]);

  const handleDelete = () => {
   
    deleteSnack();
  };

  const deleteSnack = () => {
    axios
      .delete(`${API}/snacks/${snackId}`)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((e) => {
        console.warn("catch:", e);
      });
  };

return (
  <article>
    <h1>{snack.name}</h1>
    <img src={snack.image} alt="snack pic" />
    <h3>protein:{snack.protein} </h3>
    <h3>fiber:{snack.fiber}</h3>
    <h3>sugar:{snack.sugar}</h3>

    {snack.is_healthy ? <h4>💕</h4> : <h4>🖤</h4>}
    <div>
      <Link to={`/snacks`}>
        <button>Back</button>
      </Link>
    </div>
    <div>
      <Link to={`/snacks/${snackId}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>

  
  </article>
); 
}

export default SnackDetails;