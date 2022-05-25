import React from "react";
import main from "../../assets/images/main.svg";
import { Wrapper } from "./landing.styles";
import {Logo} from "../../components/index"
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
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
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
