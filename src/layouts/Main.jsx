import React from 'react';
// import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import RightNav from '../Pages/Shared/RightNav/RightNav';
import Header from '../Pages/Shared/Navbar/Header';
import { Outlet } from 'react-router-dom';
import NavegationBar from '../Pages/Shared/NavegationBar/NavegationBar';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <NavegationBar></NavegationBar>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
            </Col>

          <Col lg={6}>
            <Outlet></Outlet>
          </Col>

          <Col lg={3}>
            <RightNav></RightNav>
            </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;