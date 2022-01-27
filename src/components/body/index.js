import React, { useState, useCallback } from "react";
import "./Body.scss";
import Slide from "./slide.js";
import About from "../about";
import Cards from "../cards";
import Footer from "../footer";

const Body=()=>{
      return (
        <div id="mainBody">
          <div id="aboutMe">
          <Slide/>
          <About/>
          <Cards/>

          </div>
          <Footer/>
        </div>
      );

  }
    export default Body;