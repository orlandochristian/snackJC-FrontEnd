import { Link } from "react-router-dom";
import  "../Style/NavBar.css"


export default function NavBar() {
  return (
    <header>
      <div className="logo">
      <Link  to="/" > <img src="https://img.lovepik.com/free-png/20210924/lovepik-fast-food-snack-icon-png-image_401357238_wh1200.png" alt="snack pic" /></Link>
     

      </div>
      <nav>
        <ul>
          <li>
       
              <Link to="/snacks">Snacks</Link>
          
          </li>
          <li>
          
              <Link  to="/snacks/new">New Snack</Link>
          
          </li>
          <li>
         
              <Link  to="/">About</Link>
        
          </li>
        </ul>
       

      </nav>
      
    </header>
  );
}
