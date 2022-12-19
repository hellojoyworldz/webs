import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import bg from "./img/bg.png";
/*
import a from "./test.js";
import { b, c } from "./test.js"; //여러개 가져올 때 export했던 변수명 그대로 가져와야한다.
*/
import data from "./data.js";

function App() {
  // 길고 복잡한 내용은 다른파일로 뺄 수 있다.
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}></div>
      <div className="row">
        <div className="row">
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
