import { Link } from "react-router-dom";

function Snack({ snack }) {
  return (

    
        <Link to={`/snacks/${snack.snack_id}`}>
        <article className="onesnack">
         <img src={snack.image} alt="snack pic" />
          <h3>{snack.name}</h3>
        </article>
        </Link>
      
  );
}

export default Snack;