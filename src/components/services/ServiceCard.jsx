import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ServiceCard = ({ name, bulletPoints ,icon}) => {
  return (
    <div className="services items shadow" id="servicecard">
      <FontAwesomeIcon icon={icon} className="H_s_l-icon" />
      <h4>{name}</h4>
      <div className="Ser_description">
        <ul>
          {bulletPoints.map((point,index) => (
            <li key={index}>
              <FontAwesomeIcon icon={faCheckCircle} className= "bullet-icon" />
              {point}
            </li>
          ))}
        </ul>
      </div>
      <Link to="/contact" className="outline-btn">
      GET STARTED
    </Link>
    </div>
  );
};

export default ServiceCard;
