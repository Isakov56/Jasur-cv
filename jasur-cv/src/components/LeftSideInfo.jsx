import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Languages from './Languages';
import "./LeftSideInfo.css"

export default class LeftSideInfo extends Component {
  render() {
    return (
      <div className="d-flex flex-column text-align-center p-3" >
        <div>
          <img src="https://res.cloudinary.com/de6vmr2ma/image/upload/v1612130642/jasurCV/IMG_20201106_140836_549_r6qb6f.jpg" alt="" className="img pr-4 pt-3 pb-3"/>
        </div>
        <div>
          <h4>Personal Profile</h4>
          <span>
            Business is my passion and I love to devote my life to it. My
            adorable part is working in collaboration and acknowledge those
            different skills and aspect of one another to build effective team
            and meet the goals towards success
          </span>
        </div>
        <div className="align-items-center mt-3">
          <h4>Languages Spoken</h4>
          <Languages></Languages>
        </div>
        <div className="pt-3">
          <h4>Skills</h4>
          <ul>
            <li>Multilingual</li>
            <li>Effective communication</li>
            <li>Computer skills
</li>
            <li>Leadership</li>
            <li>Management Skills</li>
            <li>Driving license </li>
          </ul>
        </div>
        <div className="pt-3">
          <h4>Personal Data</h4>
          <div className="d-flex align-middle align-items-center">
            <h5 className="mr-2">Full Name:</h5>
            <span>Jasur Khankeldiev</span>
          </div>
          <div className="d-flex align-middle align-items-center">
            <h5 className="mr-2">Date of Birth:</h5>
            <span>10.04.2001</span>
          </div>
          <div className="d-flex align-middle align-items-center">
            <h5 className="mr-2">Age:</h5>
            <span>19</span>
          </div>
          <div className="d-flex align-middle align-items-center">
            <h5 className="mr-2">Civil status:</h5>
            <span>Single</span>
          </div>
          <div className="d-flex align-middle align-items-center">
            <h5 className="mr-2">Citizenship:</h5>
            <span>Uzbekistan</span>
          </div>
        </div>
      </div>
    );
  }
}
