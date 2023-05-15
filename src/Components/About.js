import React from 'react';
// import { Link } from "react-router-dom";

import '../Style/About.css';
import christian from "../Pics/christian.jpeg";
import jyoti from "../Pics/jyoti.jpeg";

const About = () => {
  return (
    
     <div className='aboutboth'>
      <h3>Meet The Devs!</h3>
      <div className='team-about' >
      <div>

          <img className="team-photo" src={jyoti} alt="Jyoti Singh"></img>
          <br></br>
          <h4 className="bio-name">  <em>Jyoti Singh</em></h4>
          <p className="bio-text-js">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
             commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
             velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
             occaecat cupidatat non proident, sunt in culpa qui officia deserunt
             mollit anim id est laborum
          </p>
          <a href= "linkedin.com/in/jyoti-s-134ab3195" ><button  className='linkedin'>LinkedIn</button></a>
      <a href= "https://github.com/jy0ti-s" ><button  className='linkedin'>GitHub</button></a>
      </div>

      <div>
      <img
        className="team-photo"
        src={christian}
        alt="Christian Orlando"></img>
      <br></br>
      <h4 className="bio-name">
        <em>Christian Orlando</em>
      </h4>
      <p className="bio-text-co">
     
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
      

      
      <a href= "https://www.linkedin.com/in/christian-orlando-it/" ><button  className='linkedin'>LinkedIn</button></a>
      <a href= "https://github.com/orlandochristian" ><button  className='linkedin'>GitHub</button></a>
    


      </div>
     
      
      </div>
    </div>
  );
};

export default About;
