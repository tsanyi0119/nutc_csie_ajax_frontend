import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



/**
 * Renders the navbar component with a sign-in or sign-out button depending on whether or not a user is authenticated
 * @param props
 */
export const NUTCNavbar = (props) => {
    return (
        <>
            <Navbar bg="dark" variant="dark" className="navbarStyle">
            <Container>
                <Navbar.Brand href="/">
                    <img
                    src="/img/nutc_banner.gif"
                    width="120"
                    height="60"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />{' '}
                    中科大資訊系統
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/home">首頁</Nav.Link>
                    <Nav.Link href="/students">學生清單</Nav.Link>
                    <Nav.Link href="/courses">課程</Nav.Link>
                    <Nav.Link href="/departments">科系</Nav.Link>
                    <NavDropdown title="選課" id="select-course-nav-dropdown">
                        <NavDropdown.Item href="/selectcourse/list">選課清單</NavDropdown.Item>
                        <NavDropdown.Item href="/selectcourse/3.2">
                            選課
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/selectcourse/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/selectcourse/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                    
                    
                </Nav>
                </Navbar.Collapse>
                </Container>
            
                <div className="hello" style={{color:'white'}}>
                    {props.username} 您好!
                </div>
                    
                
                
                <Nav className="userProfile">
                    <NavDropdown title="系統管理" id="basic-nav-dropdown2">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            登出
                        </NavDropdown.Item>
                    </NavDropdown>
                    
                    <div className="collapse navbar-collapse justify-content-end">
                    登出
                    </div>
                </Nav>
            </Navbar>

            
            
            
        </>
    );
    
};
