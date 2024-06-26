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

  const deleteTrainer = async (id) => {
    await axios.delete(`https://api.sukmax.my.id/trainer/${id}`);
    getTrainers();
  };

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
            <th>Action</th>
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
              <td>
                <Link
                  className="button is-small is-info mr-2"
                  to={`/trainer/edit/${trainer.id}`}
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteTrainer(trainer.id)}
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

export default TableTrainer;