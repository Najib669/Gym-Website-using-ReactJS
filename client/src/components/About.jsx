import React from "react";
import aboutimage from "../images/about.png";
function About() {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat enim
          ab aliquam pariatur accusamus minima cupiditate amet velit culpa nam
          sequi porro a ratione vitae at architecto beatae aliquid dolor fuga
          corporis tempora, sed, qui odio sunt. Temporibus quam totam dolorem ea
          quod ipsam magnam qui fugit laudantium hic, officiis doloribus quidem
          molestiae natus labore, expedita incidunt culpa quos adipisci facilis
          in impedit repellat? Accusantium impedit ipsum laboriosam eius
          adipisci aspernatur expedita tenetur facilis et fugiat, qui, fuga
          dicta odit ullam praesentium tempora ratione eum ex blanditiis,
          cupiditate voluptate doloribus quisquam officiis? Natus nulla suscipit
          omnis quae eos provident nemo.
        </p>
        <button> READ MORE</button>
      </div>
    </div>
  );
}

export default About;
