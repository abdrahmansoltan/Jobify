import React from "react";
import logo from "../../assets/images/logo.svg";
import main from "../../assets/images/main.svg";
import { Wrapper } from "./landing.styles";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>

      <div className="container page">
        {" "}
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            baby bicycle rights VHS meh wayfarers bitters fixie. Kale chips
            butcher locavore gluten-free hashtag man braid keffiyeh small batch
            glossier hammock brooklyn vinyl palo santo. Fam woke mixtape
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
