import React, { Component } from "react";
import './Languages.scss';

export default class Languages extends React.Component {
  render() {
    return (
      <div id="chart">
        <div className="wrap">
          <section className="chart-wrapper m-0">
            <ul className="chart-horizontal p-0">
              <li className="chart-bar mb-2" data-skill="60">
                <span className="chart-bar-label d-flex justify-content-between">
                    <div className="pl-2 text-dark">Russian</div>
                    <div className="pr-2">C2</div>
                </span>
              </li>
              <li className="chart-bar mb-2" data-skill="70">
                <span className="chart-bar-label d-flex justify-content-between">
                <div className="pl-2 text-dark">Uzbek</div>
                    <div className="pr-2">C2</div>
                </span>
              </li>
              <li className="chart-bar mb-2" data-skill="80">
                <span className="chart-bar-label d-flex justify-content-between">
                <div className="pl-2 text-dark">English</div>
                    <div className="pr-2">B2</div>
                </span>
              </li>
              <li className="chart-bar mb-2" data-skill="90">
                <span className="chart-bar-label d-flex justify-content-between">
                <div className="pl-2 text-dark">Italian</div>
                    <div className="pr-2">B2</div>
                </span>
              </li>
              <li className="chart-bar mb-2" data-skill="100">
                <span className="chart-bar-label d-flex justify-content-between">
                <div className="pl-2 text-dark">German</div>
                    <div className="pr-2">B1</div>
                </span>
              </li>
              <li className="chart-bar mb-2" data-skill="50">
                <span className="chart-bar-label d-flex justify-content-between">
                <div className="pl-2 text-dark">French</div>
                    <div className="pr-2">A1</div>
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}
