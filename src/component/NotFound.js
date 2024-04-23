import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div class="mt-5">
            <center>
                <img src="https://vocasia.id/blog/wp-content/uploads/2022/01/error-404-not-found.png" alt=""/>
                <Link to={"/"}><button class="d-flex button">Back to Home</button></Link>
            </center>
        </div>
    )
}

export default NotFound;