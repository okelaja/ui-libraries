import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Layout from "../Layout";
import { Link, useNavigate } from "react-router-dom";

const TableCourse = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  const [currentPage, useCurrentPage] = useState([]);


  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    try {
      const response = await axios.get(`https://api.sukmax.my.id/course`);
      setCourses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const LastCourse = currentPage * coursePerpage;
  // const FirstCourse = LastCourse - coursePerpage;
  // const currentCourse = courses.slice(FirstCourse, LastCourse);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const deleteCourse = async (id) => {
      await axios.delete(`https://api.sukmax.my.id/course/${id}`);
      getCourses();
  };

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
            <th>Description</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        {courses.map((course, index) => (
          <tbody key={course.id}>
            <tr>
              <td>{index + 1}</td>
              <td>{course.name}</td>
              <td>{course.desc}</td>
              <td>
                <img
                  src={course.url}
                  alt={course.name}
                  style={{ width: "90px", height: "80px" }}
                />
              </td>
              <td>
                <Link
                  className="button is-small is-info mr-2"
                  to={`/course/edit/${course.id}`}
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteCourse(course.id)}
                  className="button is-small is-danger mr-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Layout>
  );
};

export default TableCourse;