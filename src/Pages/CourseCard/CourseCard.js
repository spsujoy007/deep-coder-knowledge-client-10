import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CourseCard = ({course}) => {
    const {_id, title, img, description} = course
  return (
    <div className="col-md-4" >
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Link to={`/course/${_id}`}>
                <Button variant="primary">Course detail</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseCard;
