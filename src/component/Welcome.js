import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
    const {user} = useSelector((state) => state.auth);
    return (
        <div className="text-dark"> 
            <h1 className="title text-dark">Dashboard</h1>
            <h2>Welcome back <strong>{user && user.name}</strong> </h2>
        </div>
    );
};

export default Welcome;