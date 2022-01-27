import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import basica from '../../img/basica.png';
import laravel from '../../img/basica.png';
import ReactOffice from '../../img/basica.png';
import mean from '../../img/mean.png';
import tfe from  '../../img/tfe.jpg';
import wp from '../../img/wp.png';
import mobile from  '../../img/mobile.png';

import moi from'../../img/moi.png';

const cardsList=[
    {
      src: basica,
      width: 4,
      height: 3,
      title:'Basica - old version',
      description:"Front end and back end in symfony 4 (twig,yaml,...)",
      slug:'Basica symfony',
      url:"http://ieps-2019.yj.fr/basica/public/pages/fr/1/lorem/",
      btnTitle: "Visit the web site"
    },
    {
      src: laravel,
      width: 4,
      height: 3,
      title:'Back Office laravel api',
      description:'This is an example of the work required in my previous job.',
      slug:'/',
      url:"https://github.com/natacha-steiver/laravel_backoffice",
      btnTitle: "Go to github"
    },
    {
      src: ReactOffice,
      width: 4,
      height: 3,
      title:'Back Office react front end',
      description:'This is an example of the work required in my previous job. ',
      slug:'/',
      url:"https://github.com/natacha-steiver/laravel_backoffice",
      btnTitle: "Go to github"
    },
    {
      src: mean,
      width: 4,
      height: 3,
      title:'MEAN stack',
      description: "This is a self-taught project, a back office in Angular. Username: todo password: todo ",
      slug:"/",
      url:'https://gentle-earth-58765.herokuapp.com/',
      btnTitle: "Visit the web site"
    },
    {
      src:tfe,
      width: 4,
      height: 3,
      title:'Final work for my diploma',
      description: "Imitation of Codewars - coding in a terminal and back office. Adonis.js/React/Mongoose  ",
      slug:'/',
      url:"https://github.com/natacha-steiver/tfe-fin",
      btnTitle: "Go to github"
    },
    {
      src: wp,
      width: 4,
      height: 3,
      title:'wordpress theme - blue in',
      description: "Develop a theme from A to Z  in PHP,CSS,JS - taxonomies, custom post type, archives" ,
      slug:'/',
      url:"https://github.com/natacha-steiver/blue-in",
      btnTitle: "Go to github"
    },
    {
      src: mobile,
      width: 4,
      height: 3,
      title:'App mobile (java android)',
      description: "App in progress... This app gives advices to feel better.",
      slug:'/',
      url:"https://github.com/natacha-steiver/android---1er-projet",
      btnTitle: "Go to github"
    },



  
  ]

  
const Cards=()=>{
      
    //faire un map et récupérer props pour faire plusieurs cards
  return (
      <Container style={{paddingBottom:"4rem",textAlign:"center"}}>
          <h3 style={{    
            textAlign: "center",
            margin: "3rem 0 2rem 0",
            color:"#071E48",
          fontWeight: "bolder"
}}>My projects - soon all hosted</h3>
<Row>
{cardsList.map(el=>{
          return(
            <Col className="col-xs-12 col-md-12 col-lg-4 col-12">
            <a href={el.url} alt={el.slug} target="_blank">
             <Card sx={{ maxWidth: 345 }} style={{display:"inline-block"}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={el.src}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {el.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {el.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          
            <CardActions>
              <Button size="small" color="primary">
                {el.btnTitle}        
              </Button>
            </CardActions>
           
          </Card>
          </a>
            </Col>
    
            
    
          )
      }
  
        )}

</Row>

      </Container>
  );
}
export default Cards;