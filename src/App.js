import './App.css';
import { ParticipantsList } from './components/participants/ParticipantsList';
import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <div className="App">
      <Navbar variant="dark" bg="dark" expand="lg" style={{'margin-bottom':'5px'}} >
        <Container fluid>
          <Navbar.Brand href="#home">Бойовий Гопак</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Однотан"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">Однотан</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Тан-Двобій
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Забава</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Борня
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.5">
                  Герць
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                  Вільний козацький бій
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <ParticipantsList/>
    </div>
  );
}

export default App;
