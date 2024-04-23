import React, { useEffect, useState } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col,
} from "reactstrap";



const CourseCard = () => {
  const [courses, setCourses] = useState ([]);

  useEffect(() => {
    getCourses();
  })

  const getCourses = async () => {
    const response = await axios.get("https://api.sukmax.my.id/course");
    setCourses(response.data);
  }
  return (
    <div className="mt-5">
      <Row>
        {courses.map((course, index) => {
          return (
            <Col sm={6} md={4} lg={3} key={index} className="mb-4 ">
              <NavLink to={`/course/${course.id}`} >
                <Card
                  color="light"
                  style={{
                    width: "18rem",
                  }}
                >
                  <img alt="Sample" src={course.url} />
                  <CardBody className="text-center">
                    <CardTitle tag="h5">{course.name}</CardTitle>
                  </CardBody>
                </Card>
              </NavLink>
              
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default CourseCard;
