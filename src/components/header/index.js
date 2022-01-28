import React,{ useEffect, useRef } from "react";
import { gsap,Linear} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.scss";
import moi from'../../img/moi.png';
import {Row,Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import { Link } from 'gatsby'


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
const Header=()=>{
  const maDiv = useRef(null);

  const titleRef = useRef()
  
  const onLoad = () => {
    gsap.timeline({
      onComplete: function () {
        console.log('animation terminée')
      }
    })
    
    
    .fromTo(".letter",
    {
      x: 0,
      opacity: 0,
    },
    {
      x: "2%",
      opacity: 1,
      stagger: 0.33,
      delay: 0.5
    }      
    )
    .to(".title", {
      y: 45,
      delay: 0.5
    })
    .to("#moi", {   
      opacity:1,   
    })    
    .to(".letter", {
      margin: "0 1rem",
      delay: 0.5,
      duration: 0.5
    })
    .to("#btnWork", {
      margin: "0 1rem",
      opacity:"1",
      delay: 0.7,
      duration: 0.5
    })
  }

  useEffect(() => {
    onLoad();
  }, [])
  


  return(
    
    <header id="header" ref={maDiv} className="mainHeader">

    <Container>
    <Row  >
    <Col xs="12" lg="6">
      <h1 className="title" ref={titleRef}>
        <span id="hi" className="letter">Hi I am,</span>
        <span id="name" className="letter">Natacha Steiver</span>
        <span className="letter">a fullstack developer</span>
      </h1>
      <div className="title">
      <button id="btnWork"  className="work" > <Link to="/work" style={{color:"inherit",textDecoration:"inherit"}}>My best projects</Link></button>

      </div>
    </Col>
    <Col xs="12" lg="6" className="d-flex justify-content-center">
    <img id="moi" src={moi} alt="Natacha Steiver"/>
    </Col>
    </Row>
    </Container>
    </header>
    
    
    
    )
  }
  export default Header;