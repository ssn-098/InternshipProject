import React from "react";
import MultipleBurger from "../assets/multiburger.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultipleBurger})` }}
      ></div>
      <div className="aboutBottom">
        <h1 className="titles">About Us</h1>
        <p>
          Welcome to Burger Chef ! We take immense pride in crafting the most
          exquisite and mouthwatering burgers in town. Our journey began with a
          passion for delivering authentic flavors and using only the finest,
          freshest ingredients. From classic cheese burger to Mushroom swiss ,
          our diverse menu caters to every burger enthusiast's palate. With a
          commitment to quality, our skilled chefs hand-toss the dough and blend
          the perfect sauces, ensuring each burger is a delightful experience.
          Beyond the scrumptious taste, our company values customer
          satisfaction, prompt service, and a warm, inviting atmosphere. Join us
          in savoring the burger perfection that defines us!
        </p>
      </div>
    </div>
  );
}

export default About;
