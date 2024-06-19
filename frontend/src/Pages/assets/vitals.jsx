
import React from "react";

import lungs from "./icons/lungs-line.png";

import heart from "./icons/heart-pulse-line.png";

import microscope from "./icons/microscope-line.png";

import shining from "./icons/shining-line.png";

import thermometer from "./icons/thermometer-line.png";

import flashlight from "./icons/flashlight-line.png";

import drop from "./icons/contrast-drop-line.png";

import time from "./icons/time-line.png";

import moment from "moment";




const Card = ({ icon, title, description, extraDescription }) => (

  <article className="card__article card__orange">

    <div className="card__scale-1"></div>

    <div className="card__scale-2"></div>

    <div className="card__shape-1">

      <div className="card__shape-2"></div>

      <div className="card__shape-3">

        <img src={icon} className="card__icon" />

      </div>

    </div>

    <div className="card__data">

      <h2 className="card__title">{title}</h2>

      <p className="card__description">{description}</p>

      {extraDescription && <p className="card__description">{extraDescription}</p>}

      <a href="#" className="card__button">Edit Vital</a>

    </div>

  </article>

);





export const VitalsComponent = (props) => {

  // console.log(props);

  const { user1, vitals1 } = props;

  const formattedTime = moment(vitals1.timestamp).format("h:mm a");

  const formattedDate = moment(vitals1.timestamp).format("MMMM Do, YYYY");






  return (

    <div div className="namespace2">

      <div className="container">

        <h2 className="user_name">Hello, {user1 && `${user1.firstName} ${user1.lastName}`}{" "} </h2>

        <div className="card__container">

          <Card

            icon={lungs}

            title="Respiratory Rate"

            description={`${vitals1.respiratoryRate} Breaths Per Minute`}

          />

          <Card

            icon={heart}

            title="Heart Rate"

            description={`${vitals1.heartRate} Beats Per Minute`}

          />

          <Card

            icon={flashlight}

            title="spO2"

            description={`${vitals1.respiratoryRate}%`} />

          <Card

            icon={drop}

            title="Blood Pressure"

            description={`${vitals1.bloodPressure} SD mmHg`}

            className="card__green"

          />

          <Card

            icon={thermometer}

            title="Temperature"

            description={`${vitals1.temperature} °C`}

            className="card__green"

          />

          <Card

            icon={shining}

            title="Sugar Level"

            description={`${vitals1.sugarLevel} mg/dL`}

          />

          <Card

            icon={microscope}

            title="Blood Count"

            description={`RBC and WBC ${vitals1.bloodCount}M /mm³`}

          />

          <Card

            icon={time}

            title="UpdatedAt"

            description={`${formattedDate}`}

            extraDescription={`Time: ${formattedTime}`}

          />

        </div>

      </div>

    </div>

  );

};



