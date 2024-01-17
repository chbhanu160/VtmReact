// Service.jsx
import React from "react";
import { Route, Switch } from "react-router-dom";
import LearningPage from "./LearningPage";
import ConsultingPage from "./ConsultingPage";


const Services = () => {
  return (
    <section className="services padding">
      <Switch>
        <Route path="/services/learning">
          <LearningPage />
        </Route>
        <Route path="/services/consulting">
          <ConsultingPage />
        </Route>
      </Switch>
    </section>
  );
};

export default Services;
