import React, { useState,useEffect,useRef, useCallback } from "react";
import "./Body.scss";
import Slide from "./slide.js";
import About from "../about";
import Cards from "../cards";
import Footer from "../footer";
import Timeline from "../timeline";
import { gsap,Linear} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
const Body=()=>{

  

      return (
        <div id="mainBody">
          <div id="aboutMe">
          <Slide  />
          <About />
          <Cards/>

          </div>
          <Footer/>
        </div>
      );

  }
    export default Body;