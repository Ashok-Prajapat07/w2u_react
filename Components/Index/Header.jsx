import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function Header() {
  return (
    <>
     <div className="sticky-top bg-white">
      <div className="navbar p-0 bg-body-black">
        <div className=" container-fluid">
          {/* Left side: Logo */}
          <a className="navbar-brand">
            <img
              src="./Frame 259.jpg"
              alt="Temperature Logo"
              width={50}
              height={50}
              className="d-inline-block align-text-top me-3 main-logo"
            />
            <img
              src="./Welcometoudaipur logo.png"
              alt="Second Logo"
              width={90}
              height={30}
              className="d-inline-block align-text-center me-2 text-logo"
            />
            <img
              src="./Temp.png"
              alt="Second Logo"
              width={50}
              height={30}
              className="d-inline-block align-text-center me-2 tempreture-logo"
            />
          </a>
          {/* Center: Search Bar */}
          <form
            className="d-flex flex-grow-1 justify-content-center search-bar"
            role="search"
          >
            {/* <input class="form-control search rounded-4 me-2" type="search" placeholder="Search"
              aria-label="Search"> */}
            <div className="input-group">
              <div className="search-icon d-flex align-items-center">
                <i className="fas fa-search mx-2" />
                <div className="search-border " />
              </div>
              <input
                className="form-control search rounded-4 mx-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </form>
          {/* Right side: Buttons */}
          <div className="d-flex right-nav-button">
            {/* <button class="btn border-2 border-light "> */}
            <img
              src="./movie-ticket.png"
              alt="Image"
              width="60px"
              height="50px"
              className="d-inline-block align-text-top me-1 movie-logo"
            />
            {/* </button> */}
            {/* <button class="btn border-2 border-light "> */}
            <img
              src="./Frame 541.png"
              alt="Language Icon"
              width="70px"
              height="40px"
              className="d-inline-block align-text-top mt-2 language-logo"
            />
            {/* </button> */}
            <button className="btn border-2 border-light ">Login</button>
            <button className="btn btn-success sign-up">Sign Up</button>
          </div>
        </div>
      </div>
      <Navbar className="nav-bg" expand="lg">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Fuel Station</Nav.Link>
              <NavDropdown title="Emergency" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Darshan" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Upcoming Event" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tourism" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Food" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Transportation" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Online Directory" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Wedding" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Fuel Station" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Something else here
              </NavDropdown.Item>
            </NavDropdown>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
     </div>
    </>
  );
}
export default Header;
