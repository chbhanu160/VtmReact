// Service.jsx
import React from "react";
import { Link } from "react-router-dom";
import LearningPage from "./LearningPage";
import ConsultingPage from "./ConsultingPage";


const Services = () => {
  return (
    <section className="services padding">
        <LearningPage />
        <ConsultingPage /> 
    </section>
  );
};

export default Services;
