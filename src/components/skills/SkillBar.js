
import React,{useEffect,useRef} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./skills.scss";
import {Row,Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import { gsap,Power2,Linear} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
const SkillBar=(props)=>{
    const revealsRef = useRef([]);
    revealsRef.current = [];
    const revealsRef2 = useRef([]);
    revealsRef2.current = [];


    useEffect(() => {
        revealsRef?.current.map((el, index) => {
            gsap.from(
              el,
              {
                width: 0,
                duration: .5,
                autoAlpha: 2,
                ease: Linear,
                scrollTrigger: {
                  id: `section-${index + 1}`,
                  trigger: el,
            
                  // markers: "true",
                 // scrub: "true"
                }
              }
            );
          });
          revealsRef2?.current.map((el, index) => {
            gsap.from(
              el,
              {
                left: 0,
                duration: .5,
                autoAlpha: 1,
                ease: Linear,
                scrollTrigger: {
                  id: `section-${index + 1}`,
                  trigger: el,
               
                  // markers: "true",
                 // scrub: "true"
                }
              }
            );
          });

      }, []);

      const addToRefs = (el) => {
        if (el && !revealsRef.current.includes(el)) {
          revealsRef.current.push(el);
        }
      };
      const addToRefs2 = (el) => {
        if (el && !revealsRef.current.includes(el)) {
          revealsRef.current.push(el);
        }
      };
  return (
      <>
        <div class="bars">

     {props.skills.map((el,i)=>{
         return(
             /* propriete X dans gsap et translateX dans template span*/
             <div id={`section-${i}`}>
                 <div  ref={addToRefs2}>
             <span  class="titleBarSkill" style={{ left:`${el.level-10}%`}}>{el.type} </span>
             </div>
             <div class="thumb" style={{height:props.height,width:"100%"}}>
               
                 <div ref={addToRefs}   key={i} class="bar" style={{backgroundColor:"rgb(145, 187, 243)",height:props.height,width:`${el.level}%`}}><span class="titleBar" > </span></div>
             </div>
             </div>

         )
     })

     }
        </div>
     

      </>

      
  )

      }
      export default SkillBar