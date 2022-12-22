import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from "../../hooks/useTitle";

const Checkout = () => {
    const notify = () => toast.success("Congratulations! Now you get premium course", {
      theme: "colored"
    })
  const course = useLoaderData();
  const { title, description, img } = course;
  useTitle(`checkout-${title}`)
  return (
    <div className="mt-5 mt-3">
      <Card>
      <Card.Header>Lets learn something new</Card.Header>
      <Card.Body className="text-center">
      <Card.Img variant="top" src={img} style={{width: '300px'}} />
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button onClick={notify} variant="warning">Checkout</Button>
        <ToastContainer />
      </Card.Body>
    </Card>
    </div>
  );
};

export default Checkout;
