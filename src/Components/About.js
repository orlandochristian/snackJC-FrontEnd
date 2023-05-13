import React from 'react';
import './About.css';


const About = () => {
  return (
    <div>

      <h3>Meet The Devs!</h3>
      <img
        className="christian-photo"
        src="christian.png"
        alt="Christian Orlando"
      ></img>
      <br></br>
      <h4 className="bio-name">
        <em>Christian Orlando</em>
      </h4>
      <p className="bio-text-co">
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
      <a href="https://github.com/">
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
      <br></br>
      <br></br>
      <img className="jyoti-photo" src="jyoti.png" alt="Jyoti Singh"></img>
      <br></br>
      <h4 className="bio-name">
        <em>Jyoti Singh</em>
      </h4>
      <p className="bio-text-js">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
      <a href="https://github.com">
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
  );
};

export default About;
