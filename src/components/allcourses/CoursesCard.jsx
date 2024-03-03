// CourseCard.jsx
import React from 'react';


const CoursesCard = ({ cover, title, hours, description }) => {
  return (
    <div className="course-card">
      <div className="content-container">

      <div >
      {cover && <img src={cover}  className="icon-container" />}
       </div>
       
        <h3>{title}</h3>
        <p>{hours} Hours</p>
        <p>{description}</p>
      </div>
      <button className="know-more-button">Know More</button>
    </div>
  );
};

export default CoursesCard;
