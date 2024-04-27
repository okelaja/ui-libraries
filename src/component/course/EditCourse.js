import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { Link } from "react-router-dom";

const EditCourse = () => {
    const [name, setName] = useState("");
    const [trainerId, setTrainerId] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();
    const loadImage = (e) => {
    const image = e.target.files[0];
      setFile(image);
      setFile(URL.createObjectURL(image));
    };

    const getCourseById = async () => {
        const response = await axios.get(`http://api.sukmax.my.id/course/${id}`);
        setName(response.data.name);
        setTrainerId(response.data.trainer_id);
        setDesc(response.data.desc);
        setFile(response.data.url);

    }

    // MASIH BELUM BISA NGEDIT IMAGE 

    useEffect(() => {
        getCourseById();
    }, [id]);

    const updateCourse = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('trainer_id', trainerId);
            formData.append('desc', desc);
            formData.append('url', file);
    
            await axios.put(`http://api.sukmax.my.id/course/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            
            navigate("/table-course");

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Layout>
          <h2 class="title">Courses</h2>
          <h3 class="subtitle">Update Course</h3>

          <div style={{ float: 'right' }}>
            <Link to={"/table-course"}><button class="button is-link is-light mb-4">Back</button></Link>
          </div>
          
          <form onSubmit={updateCourse}>
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  value={name}
                  placeholder="Masukkan Nama Course"
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
                  value={trainerId}
                  placeholder="Masukkan Trainer"
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
                  value={desc}
                  placeholder="e.g Desc"
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
    
            {file ?(
                <figure className="image is-128x128"> 
                    <img src={file} alt="preview-img"/>
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
}

export default EditCourse;