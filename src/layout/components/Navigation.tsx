// Navigation.tsx
import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Navigation.css';

interface NavigationProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ isDarkMode, toggleDarkMode }) => {
    return (
      <div className={`navbar-gradient ${isDarkMode ? 'dark-mode' : ''}`}>
        <Container>
          <Navbar expand="lg">
            <LinkContainer to="/home">
              {/* Apply styles conditionally based on isDarkMode */}
              <Navbar.Brand style={{ color: isDarkMode ? 'white !important' : 'black !important', transition: 'color 0.5s ease' }}>GameCellDynamics</Navbar.Brand>

            </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`mr-auto ${isDarkMode ? 'dark-text' : ''}`}>
              <DropdownButton
                variant={isDarkMode ? 'dark' : 'light'}
                menuVariant={isDarkMode ? 'dark' : 'light'}
                className="dropdown-item-button"
                title="Theory"
              >
                <Dropdown.Item>
                  <LinkContainer to="/theory">
                    <Nav.Link>Theory</Nav.Link>
                  </LinkContainer>
                </Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                variant={isDarkMode ? 'dark' : 'light'}
                menuVariant={isDarkMode ? 'dark' : 'light'}
                className={`dropdown-item-button ${isDarkMode ? 'dark-text' : ''}`}
                title="Simulators"
              >
                <Dropdown.Item>
                  <LinkContainer to="/prisonersdilemma">
                    <Nav.Link>Prisoner's Dilemma</Nav.Link>
                  </LinkContainer>
                </Dropdown.Item>
                {/* Dodaj kolor tekstu dla pozostałych elementów w "Simulators" */}
                <Dropdown.Item>
                  <LinkContainer to="/hawkdove">
                    <Nav.Link>Hawk-Dove</Nav.Link>
                  </LinkContainer>
                </Dropdown.Item>
                <Dropdown.Item>
                  <LinkContainer to="/extendedhawkdove">
                    <Nav.Link>Extended Hawk-Dove</Nav.Link>
                  </LinkContainer>
                </Dropdown.Item>
                <Dropdown.Item>
                  <LinkContainer to="/hawkdovespace">
                    <Nav.Link>Hawk-Dove Space</Nav.Link>
                  </LinkContainer>
                </Dropdown.Item>
                <Dropdown.Item>
                  <LinkContainer to="/rockpaperscissors">
                    <Nav.Link>Rock, Paper, Scissors</Nav.Link>
                  </LinkContainer>
                </Dropdown.Item>
                <Dropdown.Item>
                  <LinkContainer to="/sir">
                    <Nav.Link>SIR Model</Nav.Link>
                  </LinkContainer>
                </Dropdown.Item>
                <Dropdown.Item>
                  <LinkContainer to="/mshaigh">
                    <Nav.Link>MS.Haigh</Nav.Link>
                  </LinkContainer>
                </Dropdown.Item>
              </DropdownButton>
              <LinkContainer to="/other">
                <Nav.Link>Other</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className={`ml-auto ${isDarkMode ? 'dark-text' : ''}`}>
              <Nav.Link onClick={toggleDarkMode}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};
