import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import './CourseCard.css'

const CourseCard = ({course}) => {
    const {_id, title, img, description} = course
  return (
    <div className="col-md-4 mt-5" >
      <Card className="mycard">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description.length > 150 ? description.slice(0, 150) + "..." : description}
          </Card.Text>
        </Card.Body>
          <Link className="p-2" to={`/course/${_id}`}>
                <Button variant="primary" style={{width: "100%"}}>Course detail</Button>
          </Link>
      </Card>
    </div>
  );
};

export default CourseCard;
