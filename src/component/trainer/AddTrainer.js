import React, { useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const AddTrainer = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [skill, setSkill] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveTrainer = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://api.sukmax.my.id/trainer", {
        name: name,
        address: address,
        skill: skill,
        file: file,
      }, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });

      navigate("/table-trainer"); 

    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <Layout>
      <h2 class="title">Trainers</h2>
      <h3 class="subtitle">Add New Trainer</h3>

      <div style={{ float: 'right' }}>
            <Link to={"/table-trainer"}><button class="button is-link is-light mb-4">Back</button></Link>
      </div>
      
      <form onSubmit={saveTrainer}>
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Masukkan nama trainer"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Address</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Masukkan Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Skill</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Masukkan Skill"
              onChange={(e) => setSkill(e.target.value)}
            />
          </div>
        </div>

        <div class="file">
          <label class="file-label">
            <input
              class="file-input"
              type="file"
              name="resume"
              onChange={loadImage}
            />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label"> Choose a file… </span>
            </span>
          </label>
        </div>

        {preview ?(
            <figure className="image is-128x128"> 
                <img src={preview} alt="preview-img"/>
            </figure>
        ):(
          ""
        )}
        <div class="field is-grouped mt-5">
          <div class="control">
            <button type="submit" class=" button is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Reset</button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default AddTrainer;