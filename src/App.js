import React from "react";
import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Testimonials from "./components/testimonials/Testimonials";
import Gallery from "./components/gallery/Gallery";
import Events from "./components/events/Events";
import Services from "./components/services/Services";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import LearningPage from "./components/services/LearningPage";
import ConsultingPage from "./components/services/ConsultingPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/courses" component={CourseHome} />
          <Route exact path="/testimonials" component={Testimonials} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/services/learning" component={LearningPage} />
          <Route exact path="/services/consulting" component={ConsultingPage} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
