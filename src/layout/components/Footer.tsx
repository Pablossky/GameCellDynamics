// Footer.tsx
import React from 'react';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './Footer.css';

interface FooterProps {
  isDarkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const getYear = () => {
    let baseYear = 2023;
    let currentYear = new Date().getFullYear();
    return currentYear === baseYear ? currentYear : `${baseYear} - ${currentYear}`;
  };

  return (
    <Container>
      <div id="footer" className={`d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ${isDarkMode ? 'dark-mode' : ''}`}>
        <Col className="col-md-4 d-flex align-items-center">
          <span className="text-muted">&copy; {getYear()} GameCellDynamics </span>
        </Col>
      </div>
    </Container>
  );
};
