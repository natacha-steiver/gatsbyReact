
import React from "react";
import SkillBar from 'react-skillbars';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./skills.scss";
import {Row,Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

const Skills=()=>{
const SKILLS = [
    {
      "type": "css",
      "level": 80
    },
    {
      "type": "React",
      "level": 75
    },
    {
      "type": "Javascript",
      "level": 75
    },
    {
      "type": "PHP",
      "level": 70
    }
  ]
  const SKILLS2 = [
    {
      "type": "Angular >2",
      "level": 70
    },
    {
      "type": "HTML",
      "level": 80
    },
    {
      "type": "Wordpress",
      "level": 65
    },
    {
      "type": "SQL",
      "level": 70
    }
  ]

  const colors = {
    "bar": "#3498db",
    "title": {
      "text": "#fff",
      "background": "#2980b9"
    }
  }
  return (
      <>
          <h2 id="skillTitle">My expertise area</h2>
    <Container id="skills" style={{margin:"0 10%"}}>
        
    <Row  style={{maxWidth:'80%'}}  >
    <Col xs="12" lg="6" >
    <SkillBar skills={SKILLS} colors={colors} height={'3vh'} />

    </Col>

    <Col xs="12" lg="6">
    <SkillBar skills={SKILLS2} colors={colors} height={'3vh'} />

    </Col>

    </Row>


    </Container>

      </>

      
  )

      }
      export default Skills