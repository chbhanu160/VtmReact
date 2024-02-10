// CourseCard.jsx
import React from 'react';
import './courses.css';

const CourseCard = ({ icon, title, hours, description }) => {
  return (
    <div className="course-card">
      <div className="course-icon">{icon}</div>
      <div className="course-details">
        <h3>{title}</h3>
        <p>{hours} Hours</p>
        <p>{description}</p>
        <button className="know-more-button">Know More</button>
      </div>
    </div>
  );
};

export default CourseCard;
