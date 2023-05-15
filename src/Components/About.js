import React from 'react';
// import { Link } from "react-router-dom";

import '../Style/About.css';


const About = () => {
  return (
    <div >
    <h3 className='mtd'>Meet The Devs!</h3> 
    <div className='team-about'>
      <div className='bothjc'>
      <img
        className="team-photo"
        src="https://avatars.githubusercontent.com/u/115159441?v=4"
        alt="Christian Orlando"
      ></img>
      
      <h4 className="bio-name">
        <em>Christian Orlando</em>
      </h4>
      <p className="bio-text-co">
      I'm a full stack developer with a background in criminal justice from Queens,NY.
       {/* {describe project focus} */}
       My favorite snacks are chocolate covered pretzels and onigiri. 
       Please check out my links below to connect with me.
      </p>
      <a href="https://github.com/orlandochristian">
        <img
          className="icon"
          alt="GitHub"
          title="GitHub"
          src="./icons/github.png"
        />
      </a>
      <a href="https://www.linkedin.com">
        <img
          className="icon"
          alt="LinkedIn"
          title="LinkedIn"
          src="./icons/linkedin.png"
        />
      </a>
      </div>
      <div className='bothjc'>
      <img
        className="team-photo"
        src="https://avatars.githubusercontent.com/u/47873538?v=4"
        alt="Jyoti Singh"
      ></img>
      
      <h4 className="bio-name">
        <em>Jyoti Singh</em>
      </h4>
      <p className="bio-text-js">
       I'm a full stack developer with a background in criminal justice from Queens,NY.
       {/* {describe project focus} */}
       My favorite snacks are chocolate covered pretzels and onigiri. 
       Please check out my links below to connect with me.
      </p>
      <a href="https://github.com/jy0ti-s">
        <img
          className="icon"
          alt="GitHub"
          title="GitHub"
          src="./icons/github.png"
        />
      </a>
      <a href="https://www.linkedin.com/in/jyoti-s-134ab3195/">
        <img
          className="icon"
          alt="LinkedIn"
          title="LinkedIn"
          src="./icons/linkedin.png"
        />
      </a>
    </div>
    </div>
    </div>
  );
};

export default About;
