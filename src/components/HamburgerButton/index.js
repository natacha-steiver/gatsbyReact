import React,{useState} from "react";
import { Motion, spring, presets } from 'react-motion';
import "./style.scss";
import { slide as Menu } from 'react-burger-menu';
import {Link} from "gatsby"
const HamburgerButton =()=> {
    
    const [toggle, setTogggle] = useState(false);
    const showSettings=(event)=> {
      event.preventDefault();
    }
    
     
    
  
  const handleClick=()=>{
    setTogggle(!toggle)
  }
  
  
    const style = {
      position:"absolute",
      padding:".5rem",
      zIndex:99999,
      overflow: 'visible',
      cursor: 'pointer',
      // disable touch highlighting on devices
      WebkitTapHighlightColor: "rgba(0,0,0,0)",
    }
    
    return (
    <>
          <svg 
        viewBox="0 0 96 96"
        height="3em"
        onClick={handleClick}
        style={style}
      >
        <Motion 
          style={{
            x: spring(toggle ? 1 : 0, presets.wobbly ),
            y: spring(toggle ? 0: 1, presets.wobbly ),
          }}
        >
          {({ x, y }) =>
            <g 
              id="navicon" 
              fill="none" 
              stroke="rgb(24, 150, 209)" 
              strokeWidth="14" 
              strokeLinecap="round" 
              strokeLinejoin="round"
             >
              <line 
                transform={`translate(${x * 12}, ${x * -7}) rotate(${x * 45}, 7, 26)`} 
                x1="7" y1="26" x2="89" y2="26" 
               />
              <line 
                transform={`translate(${x * 12}, ${x * 7}) rotate(${x * -45}, 7, 70)`} 
                x1="7" y1="70" x2="89" y2="70" 
               />
              <line 
                transform={`translate(${x * -96})`} 
                opacity={y} 
                x1="7" y1="48" x2="89" y2="48"
               />
            </g>
          }
        </Motion>
      </svg>
                  <Menu id="menu"  isOpen={ toggle }>
              
                  <Link id="home" className="menu-item col-12" to="/" className="nav-link">Home</Link>
                  <Link id="about-item"  className="menu-item col-12" to="/work" className="nav-link">My work</Link>
                  <Link  id="contact"  className="menu-item col-12" to="/about" className="nav-link">About me</Link>
             
               </Menu> 

    </>
  
    )
  
}
export default  HamburgerButton;