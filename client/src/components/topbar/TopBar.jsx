import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import logoUrl from "../assets/logo.svg";
import Avatar from "react-avatar";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="sm"
        bg="dark"
        variant="dark"
        className="nav-sm"
        height="30"
      >
        <Navbar.Brand href="#home">
          EarnBazaar
          <img
            alt=""
            src={logoUrl}
            width="35"
            height="35"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto topCenter topList">
              <Nav.Link className="topListItem" href="/home">HOME</Nav.Link>
              <Nav.Link className="topListItem" href="/write">WRITE</Nav.Link>
              {!user && <Nav.Link className="topListItem" href="/login">LOGIN</Nav.Link>}
              {!user && <Nav.Link className="topListItem" href="/register">REGISTER</Nav.Link>}
            </Nav>

          <Nav className="topRight">
            {user && (
              <NavDropdown
                title={
                  <i class="fa-regular fa-user profileIcon">
                    {" "}
                    <i className="profileText"> Profile</i>{" "}
                  </i>
                }
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link to="/settings">
                    <Avatar
                      className="avatar"
                      color={Avatar.getRandomColor("sitebase")}
                      size="35"
                      name={user.username}
                      round={true}
                    />{" "}
                    {user.username}
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  LOGOUT
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
