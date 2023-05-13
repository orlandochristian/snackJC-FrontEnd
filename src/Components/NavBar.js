import { Link } from "react-router-dom";
import  "../Style/NavBar.css"
import "./About.js"


export default function NavBar() {
  return (
    <nav>
      <Link to="/snacks">
        <h1>
          <span>Snacks</span>
        </h1>
      </Link>
      {/* <br /> */}
      <button>
        <Link to="/snacks/new">New Snack</Link>
      </button>
      {/* <br /> */}
      {/* <button>
        <Link to="">About</Link>
      </button>  */}
    </nav>
  );
}
