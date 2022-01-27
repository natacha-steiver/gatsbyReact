import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./About.scss";
import moiAbout from'../../img/moiabout.png';
import {Row,Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import ContactCard from  "../asideTop";
import Skills from "../skills";
import Timeline from "../timeline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
const About=()=>{
    
    

  useEffect(() => {
    gsap.fromTo("#introSection",
     {
      y: 100,
      opacity:0,
      duration: 2,
      delay:2,
      scrollTrigger: {
        trigger: "#introSection"
      }
    },
    {
      y: 0,
      opacity:1,
      duration: 2,

      scrollTrigger: {
        trigger: "#introSection"
      }
    }

    );

  }, []);
  const isBrowser = typeof window !== "undefined"
      return (
      
    <div  id="about">
    <Row id="sectionAbout" >
    <Col xs="12" lg="6" className="d-flex justify-content-center">
    <img  id="moiImg " src={moiAbout} alt="Natacha Steiver"/>
    </Col>

    <Col xs="12" lg="6" id="introSection">
      <span id="intro">My intro</span>
      <h2 id="aboutTitle">
        About me
      </h2>
      <div id="introP">
      <p style={{maxWidth:"80%"}}>I'm a fullstack developer. I design graphic interface, front-end and back-end architecture  for your web app or you mobile application .
        I use several technologies such as javascript framework (Angular,React,Express), php oop and framework (laravel,symfony) and SQL, NO-SQL database.

      </p>
      
        <ContactCard/>
      </div>
    </Col>

    </Row>
    <Row id="timelineSection">
        <Timeline/>
    </Row>

    <Row id="skillSection">
       {isBrowser && <Skills/> } 
    </Row>




    </div>

      
      );

  }

    export default About;