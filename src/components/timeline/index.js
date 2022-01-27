import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import  WorkIcon from "../../img/job-work-svgrepo-com.svg"
import  SchoolIcon  from "../../img/degree-svgrepo-com.svg"
import "./timeline.scss";

const Elements=[
  {
    titleH3:"Bachelor degree Web developer",
    titleH4:"IEPS, Fléron, Belgium",
    icon:WorkIcon,
    p:"User Experience,Adobe suite(photoshop,illustrator,XD,firework), Symfony,Laravel,PHP (OOP, MVC),JS,jQuery"
  },
  {
    titleH3:"Web developer - 1 year and 1 month",
    titleH4:"Solar-Tech engineering (Wattuneed), Andrimont, Belgium",
    icon:SchoolIcon,
    p:"Module prestashop (php,jQuery), back office (laravel,react), mobile app (react-native)"
  }

];
const Timeline=()=>{
    return (
        <>
        {/*Icons by svgrepo.com*/}
        <h2 id="achievements">My greatest achievements </h2>
        <VerticalTimeline>
        {
          Elements.map(el=>{
            return(
          
                        <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2017-2020"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src={el.icon } alt="myLogo" />}   >
              <h3 className="vertical-timeline-element-title" style={{fontSize:"1.7rem",overflowWrap: "break-word"}}>{el.titleH3}</h3>
              <h4 className="vertical-timeline-element-subtitle" style={{fontSize:"1.5rem",overflowWrap: "break-word"}}>{el.titleH4}</h4>
              <p style={{overflowWrap: "break-word"}}>
              {el.p}
              </p>
            </VerticalTimelineElement>

          
            )
          })
        }

</VerticalTimeline>

        </>
    )
}
export default Timeline;