// HCourses.jsx
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './HCourses.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add Font Awesome icons to the library
library.add(fab, fas);

const HCourses = () => {
 
  const coursesData = [
    {
      id: 1,
      icon:'fa-brands fa-microblog',
      title:"Microsoft Azure Data Engineering",
      hours:"40 ",
      description:"comprehensive training covering Azure Databricks, Delta Lake, Data Factory, Synapse, HDInsight,...",
    },
    {
      id: 2,
      icon:'fa-user-tie',
      title:"Microsoft Azure Administration Training",
      hours:"50 ",
      description:"comprehensive training on Implementation, Management and Monitoring of Microsoft Azure Assets.",
    },
    {
      id: 3,
      icon:'fa-sharp fa-sitemap',
      title:"Microsoft Azure Architecture",
      hours:"50 ",
      description:"This is the description of Course 3.",
    },
    {
      id: 4,
      icon:'fa-file-code',
      title:"SQL Server DBA Training + SQL/TSQL Training",
      hours:"90 ",
      description:" comprehensive training covering both database administration and TSQL Programming...",
    },
    {
      id: 5,
      icon:'fa-server',
      title:"SQL Server BI Training + Power BI Training",
      hours:"70 ",
      description:"comprehensive training covering SSIS, SSAS, MDX, SSRS, Power BI and Data Warehousing...",
    },
    {
      id: 6,
      icon:'fa-sharp fa-database',
      title:'SQL Server Performance Tuning',
      hours:'70 ',
      description:'comprehensive training on SQL Server Performance Monitering, Tuning, Creating Performance Benchmark etc...',
    },
    {
      id: 7,
      icon:'fa-cloud-bolt',
      title:'DevOps Engineering (Git, Jenkins, Docker, Ansible, Terraform, Kubernetes)',
      hours:'70 ',
      description:'DevOps Engineering training program will provide you with in-depth knowledge of various DevOps tools, including Git..',
    },
    {
      id: 8,
      icon:'fa-brands fa-aws',
      title:'AWS Solutions Architect Associate',
      hours:'60 ',
      description:'Our AWS Solutions Architect – Associate course is intended for every aspersing individual who want to learn and perform an ..',
    }
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="H_c-courses-section text-center">
    <h1 className="H_c-h1">Our Courses</h1>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        infinite={false}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container "
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px "
      >
        {coursesData.map((courseD) => (
          <div key={courseD.id} className="H_c-slide">
            <div className="H_c-caption">
              <FontAwesomeIcon icon={courseD.icon} className="H_c-icon" />
              <h3>{courseD.title}</h3>
              <p>
                <strong>Hours:</strong> {courseD.hours}
              </p>
              <p>{courseD.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
      <button className='H_c-view'>View More</button>
    </div>
  );
};

export default HCourses;
