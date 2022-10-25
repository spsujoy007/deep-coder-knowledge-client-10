import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>

            <Container>
            <Row>
                <Col lg="3" className="bg-info">
                    <LeftSideNav></LeftSideNav>
                </Col>

                <Col lg="9" className="bg-warning">
                    <Outlet></Outlet>
                </Col>
            </Row>
        </Container>

        <Footer></Footer>
        </div>
    );
};

export default Main;