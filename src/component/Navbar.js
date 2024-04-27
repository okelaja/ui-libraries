import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
function NavbarComponent(args) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const toggle = () => setIsOpen(!isOpen);

  const logout = ()  => {
    dispatch(logout());
    // dispatch(reset());
    navigate("/login")
  }

  return (
    <div>
      <Navbar {...args} expand="md" className="bg-primary navbar-dark">
        <NavbarBrand href="/">Jual-in</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavLink
              className="text-light mx-3"
              to={"/"}
              style={{ textDecoration: "none" }}
            >
              Home
            </NavLink>
            <NavLink
              className="text-light mx-3"
              to={"/dashboard"}
              style={{ textDecoration: "none" }}
            >
              Dashboard
            </NavLink>
            <NavLink
              className="text-light mx-3"
              to={"/courses"}
              style={{ textDecoration: "none" }}
            >
              Course
            </NavLink>
          </Nav>
          {
            user ? (
              <button onClick={logout} className="button is-light">Logout</button>
            ) : (
              <NavLink to={"/login"}>
                <button className="button is-light">Login</button>
              </NavLink>
            )
          }
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
