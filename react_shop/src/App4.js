import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useState } from "react";
import bg from "./img/bg.png";
import Item from "./components/Item.jsx";
import data from "./data";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>메인페이지</div>} />
        <Route path="/detail" element={<div>보여줄 HTML</div>} />
      </Routes>

      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

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
          {
            //array.map((a,index)->{})
            // a는 어떻게 활용하는지?
            shoes.map((a, i) => {
              console.log(a);
              return <Card shoes={shoes[i]} i={i + 1}></Card>;
            })
          }
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  //자식에게 전송
  return (
    <div className="col-md-4" key={props.i}>
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="100%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
  );
}

export default App;
