
import React from 'react';
import CoursesCard from './CoursesCard';
import './courses.css';

const OnlineCourses = () => {
 
  const coursesData = [
    {
          icon:'fa-brands fa-microblog',
          title:"Microsoft Azure Data Engineering",
          hours:"40 ",
          description:"comprehensive training covering Azure Databricks, Delta Lake, Data Factory, Synapse, HDInsight,...",
    },
    {
      icon:'fa-user-tie',
      title:"Microsoft Azure Administration Training",
      hours:"50 ",
      description:"comprehensive training on Implementation, Management and Monitoring of Microsoft Azure Assets.",
    },

    {
      icon:'fa-sharp fa-sitemap',
      title:"Microsoft Azure Architecture",
      hours:"50 ",
      description:"This is the description of Course 3.",
    },
    
    {
      icon:'fa-file-code',
          title:"SQL Server DBA Training + SQL/TSQL Training",
          hours:"90 ",
          description:" comprehensive training covering both database administration and TSQL Programming...",
    },
    {
      icon:'fa-server',
          title:"SQL Server BI Training + Power BI Training",
          hours:"70 ",
          description:"comprehensive training covering SSIS, SSAS, MDX, SSRS, Power BI and Data Warehousing...",
    },
    {
      icon:'fa-sharp fa-database',
          title:'SQL Server Performance Tuning',
          hours:'70 ',
          description:'comprehensive training on SQL Server Performance Monitering, Tuning, Creating Performance Benchmark etc...',
    },
    {
      icon:'fa-cloud-bolt',
      title:'DevOps Engineering (Git, Jenkins, Docker, Ansible, Terraform, Kubernetes)',
      hours:'70 ',
      description:'DevOps Engineering training program will provide you with in-depth knowledge of various DevOps tools, including Git..',
    },
    {
      icon:'fa-brands fa-aws',
          title:'AWS Solutions Architect Associate',
          hours:'60 ',
          description:'Our AWS Solutions Architect – Associate course is intended for every aspersing individual who want to learn and perform an ..',
    }
  ];

  return (
    <div className="online-courses">
    <h1 className="courses-heading">Online Courses</h1>
      <div className="courses-flex">
        {coursesData.map((course, index) => (
          <CoursesCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default OnlineCourses;

