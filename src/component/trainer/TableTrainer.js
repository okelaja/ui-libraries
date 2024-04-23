import React, { useEffect, useState } from "react";
import axios from 'axios';
import Table from "react-bootstrap/Table";
import Layout from "../Layout";
import { Link } from "react-router-dom";

const TableTrainer = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    getTrainers();
  }, []);

  const getTrainers = async () => {
    const response = await axios.get("https://api.sukmax.my.id/trainer/");
    setTrainers(response.data);
  }

  return (
    <Layout>
      <h2 class="title">Trainers</h2>
      <h3 class="subtitle">Table Trainer</h3>
      <Link to={"/trainer/add"}>
        <button class="button">Add Trainer</button>
      </Link>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Skill</th>
            <th>Image</th>
          </tr>
        </thead>
        {trainers.map((trainer, index) => ( 
          <tbody key={trainer.id}> 
            <tr>
              <td>{index + 1}</td>
              <td>{trainer.name}</td>
              <td>{trainer.address}</td>
              <td>{trainer.skill}</td>
              <td>
                <img src={trainer.url} alt={trainer.name} style={{ width: '100px', height:'80px'}} />
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Layout>
  );
};

export default TableTrainer;