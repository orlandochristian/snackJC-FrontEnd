import { Link } from "react-router-dom";
import  "../Style/NavBar.css"
//import "./About.js"


export default function NavBar() {
  return (
    <nav className="logo">
      <Link to="/">
         <img src="https://img.lovepik.com/free-png/20210924/lovepik-fast-food-snack-icon-png-image_401357238_wh1200.png" alt="snack pic" />  
      </Link>
      {/* <br /> */}
      <button>
        <Link to="/snacks/new">New Snack</Link>
      </button>
<<<<<<< HEAD
      {/* <br /> */}
      {/* <button>
        <Link to="">About</Link>
      </button>  */}
=======
      <br />
      <button>
        <Link to="/">About</Link>
      </button> 
>>>>>>> cf581ccfea1e243a13deb94b10516ac51e53d049
    </nav>
  );
}
