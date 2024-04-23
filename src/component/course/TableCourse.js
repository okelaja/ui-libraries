import React, { useEffect, useState } from "react";
import axios from 'axios';
import Table from "react-bootstrap/Table";
import Layout from "../Layout";
import { Link } from "react-router-dom";

const TableCourse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    const response = await axios.get("https://api.sukmax.my.id/course/");
    setCourses(response.data);
  }

  return (
    <Layout>
      <h2 class="title">Courses</h2>
      <h3 class="subtitle">Table Course</h3>
      <Link to={"/course/add"}>
        <button class="button">Add Course</button>
      </Link>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Desc</th>
            <th>Image</th>
          </tr>
        </thead>
        {courses.map((course, index) => ( 
          <tbody key={course.id}> 
            <tr>
              <td>{index + 1}</td>
              <td>{course.name}</td>
              <td>{course.desc}</td> 
              <td>
                <img src={course.url} alt={course.name} style={{ width: '100px', height:'80px'}} />
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Layout>
  );
};

export default TableCourse;