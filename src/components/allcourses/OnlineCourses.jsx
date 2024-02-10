// OnlineCourses.jsx
import React from 'react';
import './courses.css';
import CourseCard from './CoursesCard';

const coursesData = [
  {
    id: 1,
    icon: '🚀',
    title: 'Microsoft Azure Data Engineering',
    hours: '20',
    description: 'Learn the basics of web development and build your first website.',
  },
  {
    id: 2,
    icon: '💻',
    title: 'Microsoft Azure Administration',
    hours: '15',
    description: 'Master the fundamentals of JavaScript programming language.',
  },
  {
    id: 3,
    icon: '💻',
    title: '3. Microsoft Azure Architecture',
    hours: '15',
    description: 'Master the fundamentals of JavaScript programming language.',
  },
  {
    id: 3,
    icon: '💻',
    title: '3. Microsoft Azure Architecture',
    hours: '15',
    description: 'Master the fundamentals of JavaScript programming language.',
  },
  {
    id: 4,
    icon: '💻',
    title: '3. Microsoft Azure Architecture',
    hours: '15',
    description: 'Master the fundamentals of JavaScript programming language.',
  },
  {
    id: 5,
    icon: '💻',
    title: '3. Microsoft Azure Architecture',
    hours: '15',
    description: 'Master the fundamentals of JavaScript programming language.',
  },
  {
    id: 6,
    icon: '💻',
    title: '3. Microsoft Azure Architecture',
    hours: '15',
    description: 'Master the fundamentals of JavaScript programming language.',
  },
  
];

const OnlineCourses = () => {
  return (
    <div className="course-section">
      <h2>Online Courses</h2>
      <div className="courses-container">
        {coursesData.map((course) => (
          <CourseCard
            key={course.id}
            icon={course.icon}
            title={course.title}
            hours={course.hours}
            description={course.description}
          />
        ))}
      </div>
    </div>
  );
};

export default OnlineCourses;
