import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Course from "./pages/Course";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Detail from "./pages/Detail";
import Dashboard from "./pages/Dashboard";
import DetailCourse from "./component/DetailCourse";
import AddCourse from "./component/course/AddCourse";
import TableCourse from "./component/course/TableCourse";
import NotFound from "./component/NotFound";
import TableTrainer from "./component/trainer/TableTrainer";
import AddTrainer from "./component/trainer/AddTrainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/course/:id" element={<DetailCourse />} />
          <Route path="/course/add" element={<AddCourse />} />
          <Route path="/table-course" element={<TableCourse />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/trainer/add" element={<AddTrainer />} />
          <Route path="/table-trainer" element={<TableTrainer />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
