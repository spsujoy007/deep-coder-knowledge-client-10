import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>1. What is CORS?</Accordion.Header>
        <Accordion.Body>
          Cross-origin resource sharing (CORS) is a browser security feature
          that restricts cross-origin HTTP requests that are initiated from
          scripts running in the browser. If your REST API's resources receive
          non-simple cross-origin HTTP requests, you need to enable CORS
          support.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2. Why are You using Firebase?</Accordion.Header>
        <Accordion.Body>
          Firebase provides tools to grow your app and business, for startups &
          global enterprises. Get your app up and running quickly & securely
          with fully managed backend infrastructure. Backed by Google. Customize
          Your App. Release Apps Confidently. Boost App Engagement.
          <p className="text-danger mt-3 mb-0">
            2. What other option do you have to implement authentication?
          </p>
          Usually, authentication by a server entails the use of a user name and
          password. Other ways to authenticate can be through cards, retina
          scans, voice recognition, and fingerprints.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>3. How does the private Route work?</Accordion.Header>
        <Accordion.Body>
          The private route component is similar to the public route, the only
          change is that redirect URL and authenticate condition. If the user is
          not authenticated he will be redirected to the login page and the user
          can only access the authenticated routes If he is authenticated
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>4. What is the node?</Accordion.Header>
        <Accordion.Body>
          A node is a basic unit of a data structure, such as a linked list or
          tree data structure. Nodes contain data and also may link to other
          nodes. Links between nodes are often implemented by pointers.

          <p className="text-danger mt-3 mb-0">4. How does the node work?</p>
          It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Blog;
