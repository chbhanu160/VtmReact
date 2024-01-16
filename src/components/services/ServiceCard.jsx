import React from "react"
// import { services } from "../../dummydata"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const ServiceCard = ({ name, bulletPoints }) => {
  return (
    <div className='services items shadow'>
      <h4>{name}</h4>
      <div className="description">
        {bulletPoints ? (
          <ul>
            {bulletPoints.map((point, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faCheckCircle} className="bullet-icon" />
                {point}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <button className='outline-btn'>GET STARTED</button>
    </div>
  );
};

export default ServiceCard;