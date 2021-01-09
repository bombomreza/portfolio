/* eslint-disable jsx-a11y/heading-has-content */
import './InfoElements.css';
import { ReactComponent as WorkIcon } from "../../images/work.svg";
import { ReactComponent as SchoolIcon } from "../../images/school.svg";

import timelineElements from "./timelineElements";

import { 
  VerticalTimeline, 
  VerticalTimelineElement 
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  let workIconStyles = {background: "#9b9b9b"};
  let schoolIconStyles = {background: "#4a4a4a"};
  


  return (
          <div id="timeline">
            <h1 className="title">Work & Education</h1>
            {/* <h3 className="subtitle"> My experience about work and education from 3 years earlier </h3> */}
            <VerticalTimeline>
              {
                timelineElements.map(element => {
                  let isWorkIcon = element.icon === "work"

                  return (
                    <VerticalTimelineElement
                      key={element.key}
                      date={element.date}
                      dateClassName="date"
                      iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                      icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon/>}
                    >
                      <h3 className="vertical-timeline-element-title">
                        {element.title}
                      </h3>
                      <h4 className="underline"></h4>
                      <h5 className="vertical-timeline-element-subtitle" style={{marginTop:"10px"}}>
                        {element.location}
                      </h5>
                      <p id="description">{element.description}</p>
                    </VerticalTimelineElement>
                  )
                })
              }
            </VerticalTimeline>
          </div>
  )
}
export default Timeline;
