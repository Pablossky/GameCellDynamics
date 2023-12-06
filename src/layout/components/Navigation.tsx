import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { LinkContainer } from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const Navigation = () => {
    return (
        <div className="navbar-gradient">
            <Container>
                <Navbar expand="lg">
                    <LinkContainer to="/home">
                        <Navbar.Brand>GameCellDynamics</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <DropdownButton variant="dark" menuVariant="dark" className="dropdown-item-button" title="Theory" >
                            <Dropdown.Item><LinkContainer to="/theory"><Nav.Link>Theory</Nav.Link></LinkContainer></Dropdown.Item>
                            <Dropdown.Item><LinkContainer to="/theory2"><Nav.Link>Models</Nav.Link></LinkContainer></Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton variant="dark" menuVariant="dark" className="dropdown-item-button" title="Models" >
                            <Dropdown.Item><LinkContainer to="/prisonersdilemma"><Nav.Link>Prisoner's Dilemma</Nav.Link></LinkContainer></Dropdown.Item>
                            <Dropdown.Item><LinkContainer to="/hawkdove"><Nav.Link>Hawk-Dove</Nav.Link></LinkContainer></Dropdown.Item>
                            <Dropdown.Item><LinkContainer to="/hawkdovespace"><Nav.Link>Hawk-Dove Space</Nav.Link></LinkContainer></Dropdown.Item>
                            <Dropdown.Item><LinkContainer to="/rockpaperscissors"><Nav.Link>Rock, Paper, Scissors</Nav.Link></LinkContainer></Dropdown.Item>
                            <Dropdown.Item><LinkContainer to="/mshaigh"><Nav.Link> MS.Haigh</Nav.Link></LinkContainer></Dropdown.Item>
                        </DropdownButton>
                            <LinkContainer to="/other"><Nav.Link>Other</Nav.Link></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    )
}