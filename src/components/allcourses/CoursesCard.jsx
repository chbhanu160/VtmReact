// CourseCard.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

const CoursesCard = ({ icon, title, hours, description }) => {
  return (
    <div className="course-card">
      <div className="content-container">
        <div className="icon-container">
          <FontAwesomeIcon icon={icon} size="4x" color="#004AAD"/>
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
