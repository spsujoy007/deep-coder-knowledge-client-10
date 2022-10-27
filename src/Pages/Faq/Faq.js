import React from "react";

const Faq = () => {
  return (
    <div>
        <h3 className="text-center mb-4 text-danger">Frequently asked questions</h3>
      <div>
        <h4 className="ms-4 text-primary">1. How to become a developer?</h4>
        <p className="ms-5">
          <b> Seven tips for getting a job as a software developer</b> 
          <li>Learn a programming language</li>
          <li>Figure out your end goals</li>
          <li>Pursue a degree or take courses</li>
          <li>Start practicing in your developer niche.</li>
          <li>Make a portfolio of your software development work. ... Develop</li>
          <li>your technical skills. ... Build your non-technical skills</li>
        </p>
      </div>
      <div>
        <h4 className="ms-2 text-primary">2. How to achive the goal?</h4>
        <p className="ms-5">
          <b>
          Practice this and I believe it will help propel you towards the
          success to which you aspire:
          </b>
          <li>Write down your goal. </li>
          <li>Get your goal out of your imagination and on to a piece of paper Set a deadline.</li>
          <li>Work on your mindset </li>
          <li>Develop your skillset</li>
          <li>Take the first step </li>
          <li>Continue to completion</li>
          <li>Reward yourself.</li>
        </p>
      </div>
      <div>
        <h4 className="ms-2 text-primary">3. What is React JS?</h4>
        <p className="ms-5">
          React is a free and open-source front-end
          JavaScript library for building user interfaces based on UI
          components. It is maintained by Meta and a community of individual
          developers and companies.
        </p>
      </div>
    </div>
  );
};

export default Faq;
