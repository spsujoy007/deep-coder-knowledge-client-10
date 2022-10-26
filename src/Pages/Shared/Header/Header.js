import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/brand/logo.png'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import './Header.css'
import { FaUser } from "react-icons/fa";

const Header = () => {
  const {user} = useContext(AuthContext);

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="mb-3" >
      <Container>
        <Link to="/">
        <Navbar.Brand className="d-flex align-items-center">
        <img
              src={logo}
              height="40"
              alt="React Bootstrap logo"
            />
            <p className='m-0'>DEEP CODER KNOWLEDGE</p>
        </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <div>
              <Link className='navlinks' to='/'>Courses</Link>
              <Link className='navlinks' to='/faq'>FAQ</Link>
              <Link className='navlinks' to='/blog'>Blog</Link>
            </div>
          </Nav>
          <Nav>
            <Nav.Link 
            to="/home">
            { 
                            user?.uid ?
                            <>
                            <span> {user?.displayName}</span>
                            <button>Log Out</button>
                            </>
                            :
                            <>
                            <Link to='/login'>Login</Link>
                            <Link to='/register'>Register</Link>
                            </>
                           }
            </Nav.Link>

            <Link to='/profile'>
                            {
                                user?.photoURL ?
                            
                                <Image

                                        style ={{height: '30px'}} roundedCircle 
                                        src={user.photoURL}
                                    
                                    ></Image>
                                : <FaUser></FaUser>

                            }

                        </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;