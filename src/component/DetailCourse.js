import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const DetailCourse = () => {
  let { id } = useParams();  // add parentheses to call the function
  const [course, setCourse] = useState({}); // change state to course

  useEffect(() => {
    getCourse();
  }, [id]); // add id as a dependency

  const getCourse = async () => {
    const response = await axios.get(`https://api.sukmax.my.id/course/${id}`);
    setCourse(response.data); // change setCourses to setCourse
  }

  return (
    <section className="section mt-5 text-dark">
      <div class="container">
        <div class="columns">
          <div class="column is-half">
            <figure class="image is4by3">
              <img src={course.url} alt="" />
            </figure>
          </div>
          <div class="column">
            <div class="content">
              <div class="title is-4 text-dark">{course.name}</div>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore culpa commodi sint iste ut, eveniet nemo perferendis
                  minima, distinctio aspernatur dolorum magnam deserunt itaque
                  similique saepe aliquid, autem porro neque.
                </p>
                <p>
                   <strong className="text-dark">Price : </strong> Rp 1.000.000,-
                </p>
                <p>{course.description}</p>  {/* change courses.name to course.description */}
                <div class="field p-5">
                    <button className="button is-primary is-fullwidth has-text-white mb-3"> Add  to Cart</button>  
                    <button className="button is-primary is-outlined is-fullwidth">Buy</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailCourse;