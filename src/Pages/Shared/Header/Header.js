import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/brand/logo.png'
import './Header.css'
import { FaUser } from "react-icons/fa";
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { FaSignOutAlt } from "react-icons/fa";
import Switch from '@mui/material/Switch';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  console.log(user);

  const handleLogOut= () => {
    logOut()
    .then(() => {})
    .catch(error => console.error(error))
  };

  const [theme, setTheme] = useState(true);



    return (
        // <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="mb-3" >
        <Navbar collapseOnSelect expand="lg" bg={theme ? "light" : "warning"} variant={theme ? "light" : "dark"} className="mb-3" >
      <Container>
        <Link to="/" className="headerTitle">
        <Navbar.Brand className="d-flex align-items-center">
        <img
              src={logo}
              height="40"
              alt="React Bootstrap logo"
            />
            <p className='m-0'>DEEP CODER</p>
        </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <div className="d-flex align-items-center">
              <Link className='navlinks' to='/'>Courses</Link>
              <Link className='navlinks' to='/faq'>FAQ</Link>
              <Link className='navlinks' to='/blog'>Blog</Link>
              <Switch{...label} onClick={() => setTheme(!theme)} />
            </div>
          </Nav>
          <Nav className="d-flex align-items-center">
            <Nav.Link  
            >
            { 
                            user?.uid ?
                            <>
                            <button className='btn btn-primary text-light mx-2' onClick={handleLogOut}>Log out <FaSignOutAlt></FaSignOutAlt> </button>
                            <span style={{color: "#0d6efd"}}> {user?.displayName}</span>
                            </>
                            :
                            <>
                            <Link className="btn btn-outline-primary me-2" to='/login'>Login</Link>
                            <Link className="btn btn-outline-dark" to='/register'>Register</Link>
                            </>
                           }
            </Nav.Link>

            <Link to='/profile'>
                            {
                                user?.photoURL ?
                                <Image

                                        style ={{height: '35px', width: '35px', border: '2px solid #0d6efd', borderRadius: "50px"}} roundedCircle 
                                        src={user.photoURL} 
                                        title={user.displayName}     
                                    ></Image>
                                : <FaUser></FaUser>
                            }
                        </Link>

          </Nav>
          <div className='d-lg-none'>
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;