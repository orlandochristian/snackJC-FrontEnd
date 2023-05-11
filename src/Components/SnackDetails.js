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
    {/* <h1>Abum: {album.name} - By {album.artist}</h1>
    <h2>
      <span>
        Genre:
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {album.genre}
    </h2>
    <h3>Producer: {album.producer}</h3>
    <div className="showNavigation">
      <div>
        <Link to={`/albums`}>
          <button>Back</button>
        </Link>
      </div>
      <div>
        <Link to={`/albums/${album.album_id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
    <h3>Songs</h3> */}
   <h1>hello</h1>
  </article>
 ) 
}

export default SnackDetails;