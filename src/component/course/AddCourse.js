import React, { useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [name, setName] = useState("");
  const [trainerId, setTrainerId] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveCourse = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://api.sukmax.my.id/course", {
        name: name,
        trainer_id: trainerId,
        desc: desc,
        file: file,
      }, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });

      navigate("/table-course"); 

    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <Layout>
      <h2 class="title">Courses</h2>
      <h3 class="subtitle">Add New Course</h3>
      
      <form onSubmit={saveCourse}>
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Masukan nama course"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Trainer id</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Masukan trainer"
              onChange={(e) => setTrainerId(e.target.value)}
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea
              class="textarea"
              type="text"
              placeholder="e.g "
              onChange={(e) => setDesc(e.target.value)}
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

export default AddCourse;