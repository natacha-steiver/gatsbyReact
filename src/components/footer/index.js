import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./footer.scss"
import {Row,Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import youtube from'../../img/youtube.png';
import facebook from'../../img/fb.png';
import linkedin from'../../img/linkedin.png';
import github from'../../img/github.png';

 const Footer=()=>{

    return(
        <footer>
              <Container style={{textAlign:"center"}}>
                  <Row /*style={{ transform: "translateY(100%)"}} */ >
                  <Col><a href="https://www.linkedin.com/in/natacha-steiver-73268b191/" target="_blank" alt="natacha steiver linkedin"><img src={linkedin} alt="linkedin"/></a></Col>
                  <Col><a href="https://github.com/natacha-steiver" target="_blank" alt="natacha steiver github"><img src={github} alt="github"/></a></Col>
                      <Col><a href="https://www.facebook.com/natacha.steiver.77" target="_blank" alt="natacha steiver facebook"><img src={facebook} alt="facebook"/></a></Col>
                      <Col><a href="https://www.youtube.com/channel/UCAR0tcI0By1AO0o0zov9zzA"  target="_blank" alt="natacha steiver youtube"><img src={youtube} alt="youtube"/></a></Col>
                     

                  </Row>
              </Container>
        </footer>
    )
}
export default Footer;