import React from "react";
import { Link } from "gatsby";

const About = () => {
  return (
    <div>
      <h1>Oh Hai, about that.</h1>
      <a href="/">Go home</a>
      <br />
      <Link to="/">Fastly go home</Link>
    </div>
  );
};

export default About;
