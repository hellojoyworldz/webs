import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Main from "./routes/Main";
import Detail from "./routes/Detail";
import data from "./data";

function App() {
  let navigate = useNavigate(); // 페이지 이동을 도와줌
  let [shoes] = useState(data);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/detail");
                }}>
                Detail
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route
          path="/detail/:id"
          element={<Detail shoes={shoes}></Detail>}></Route>
        <Route path="/event" element={<Event></Event>}>
          <Route
            path="one"
            element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
    </>
  );
}

export default App;
