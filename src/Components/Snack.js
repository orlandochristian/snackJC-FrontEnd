import { Link } from "react-router-dom";

function Snack({ snack }) {
  return (

    
        <Link to={`/snacks/${snack.snack_id}`}>
        <article className="onesnack">
         <img src={snack.image} alt="snack pic" />
          <h3>{snack.name}</h3>
        </article>
        </Link>
      
    // <tr>
    //   <td>
    //     {snack.name}
    //   </td>
    //   <td>
    //     {snack.image}
    //   </td>
    //   <td>
    //     {snack.protein}
    //   </td>
    //   <td>
    //     {snack.sugar}
    //   </td>
    //   <td>
    //     <Link to={`/snacks/${snack.snack_id}`}>✏️</Link>
    //   </td>
    // </tr>
  );
}

export default Snack;