import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style/SnackDetails.css"


const API = process.env.REACT_APP_API_URL
 
function SnackDetails() {
  const [snack, setSnack] = useState({});
  const [heart, setHeart] = useState({ red:"", black:""})
  const { snackId } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    axios.get(`${API}/snacks/hearts`)
    .then((response) => {
     
      setHeart(response.data)
      console.log(response.data)
    }).catch((e) => {
      console.warn("catch:", e)
    })
  }, []);

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
  <article className="article-detail" >

   <div className="snackDetails"> 
    <h1>{snack.name}</h1>
    {snack.is_healthy ? (<img  className="corazon" src={heart.red} alt="red heart"/>) : (<img  className="corazon" src={heart.black} alt="black heart"/>)}
    <img className="snack-img" src={snack.image} alt="snack pic" />
    <div>
         <h3>protein:{snack.protein}  %</h3>
         <h3>fiber:{snack.fiber} %</h3>
         <h3>sugar:{snack.sugar} %</h3>
    </div>
   

    
    <div className="snacks-buttons">
      <Link to={`/snacks`}>
        <button className="back">Back</button>
      </Link>
      <Link to={`/snacks/${snackId}/edit`}>
        <button className="edit" >Edit</button>
      </Link>
      <button className="delete" onClick={handleDelete}>Delete</button>
    </div>

    <p className="parrafo">If protein or fiber is greater than 5% and sugar is less than 5% then is healthy </p>

    </div>
  </article>
); 
}

export default SnackDetails;