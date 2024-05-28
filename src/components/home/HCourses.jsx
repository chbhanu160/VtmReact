// HCourses.jsx
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './HCourses.css';
import azureImage from './icons/icons8-azure.svg';
import azureStorageImage from './icons/icons8-azure-storage-connection.svg';
import googleCloudImage from './icons/icons8-google-cloud.svg';
import azureADImage from './icons/icons8-azure-active-directory.svg';

const HCourses = () => {
  const coursesData = [
    {
      id: 1,
      cover: azureImage,
      title: "Exam DP-203: Data Engineering on Microsoft Azure",
      hours: "50",
      description: "Comprehensive training covering Azure Data Factory, Azure Synapse Analytics, Azure Stream Analytics, Azure Event Hubs, Azure Data Lake Storage, Azure Databricks",
    },
    {
      id: 2,
      cover: azureStorageImage,
      title: "Exam DP-600: Implementing Analytics Solutions Using Microsoft Fabric (beta)",
      hours: "50",
      description: "Comprehensive training on Lakehouses, Data warehouses, Notebooks, Dataflows, Data pipelines, Semantic models, Reports",
    },
    {
      id: 3,
      cover: googleCloudImage,
      title: "GCP-Professional Data Engineer",
      hours: "55",
      description: "Comprehensive training on Design data processing systems, Ingest and process the data, Store the data, Prepare and use data for analysis, Maintain and automate data workloads",
    },
    {
      id: 4,
      cover: azureADImage,
      title: "Exam AZ-104: Microsoft Azure Administrator",
      hours: "60",
      description: "Comprehensive training on Virtual networks, Storage, Compute, Identity, Security, Governance",
    },
    {
      id: 5,
      cover: azureADImage,
      title: "Exam AZ-305: Designing Microsoft Azure Infrastructure Solutions",
      hours: "60",
      description: "Subject matter expertise in designing cloud and hybrid solutions that run on Azure, including: Compute, Network, Storage, Monitoring, Security",
    },
    {
      id: 6,
      cover: azureImage,
      title: "Exam AZ-400: Designing and Implementing Microsoft DevOps Solutions",
      hours: "55",
      description: "Comprehensive training on code, infrastructure, source control, security, compliance, testing, delivery, monitoring, and feedback.",
    },
    {
      id: 7,
      cover: azureStorageImage,
      title: "Exam DP-500: Designing and Implementing Enterprise-Scale Analytics Solutions",
      hours: "50",
      description: "Cleaning and transforming data, Designing and building enterprise data models, Incorporating advanced analytics capabilities.",
    },
    {
      id: 8,
      cover: azureImage,
      title: "Exam DP-300: Administering Microsoft Azure SQL Solutions",
      hours: "60",
      description: "Subject matter expertise in manages on-premises and cloud databases built with SQL Server and Azure SQL services: SQL Server on-premises, Azure SQL services",
    },
    {
      id: 9,
      cover: azureADImage,
      title: "Exam AZ-900: Microsoft Azure Fundamentals",
      hours: "26",
      description: "Comprehensive training covering Infrastructure management, Database management, Software development, Describe Azure architectural components and Azure services - Compute, Networking, Storage",
    },
    {
      id: 10,
      cover: googleCloudImage,
      title: "Google Cloud Digital Leader",
      hours: "30",
      description: "Exploring data transformation with Google Cloud, Google Cloud artificial intelligence, Modernizing infrastructure and applications with Google Cloud, Trust and security with Google Cloud, Scaling with Google Cloud operations",
    },
    {
      id: 11,
      cover: azureADImage,
      title: "Exam AI-900: Microsoft Azure AI Fundamentals",
      hours: "25",
      description: "Comprehensive training on Basic cloud concepts, Client-server applications. Opportunity for you to demonstrate knowledge of machine learning and AI concepts and related Microsoft Azure services.",
    },
    {
      id: 12,
      cover: azureImage,
      title: "Exam PL-900: Microsoft Power Platform Fundamentals",
      hours: "24",
      description: "Aspire to understand how Microsoft Power Platform technologies can be used to: Improve processes, Help drive business outcomes.",
    },
    
    {
      id: 13,
      cover: azureStorageImage,
      title: "Exam DP-900: Microsoft Azure Data Fundamentals",
      hours: "70",
      description: "Comprehensive training covering relational and non-relational data, Different types of data workloads such as transactional or analytical.",
    },
 
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
    <div className="H_c-courses-section text-center my-3 mx-2">
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
              <div>
                {courseD.cover && <img src={courseD.cover} className="H_c-icon" alt={`Course ${courseD.id}`} />}
              </div>
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
