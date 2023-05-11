<<<<<<< HEAD
export default function NavBar() {
  return <h1>hello</h1>;
}
=======
import { Link } from "react-router-dom";
import  "../Style/NavBar.css"


export default function NavBar() {
  return (
    <nav>
      <Link to="/snacks"><h1><span>Snacks</span></h1></Link>
      <br/>
      <button>
        <Link  to="/snacks/new">New Snack</Link>
      </button>
    </nav>
  );
}
>>>>>>> cbd657ec13459e8d4204a2d20ec354fe9812e3ef
