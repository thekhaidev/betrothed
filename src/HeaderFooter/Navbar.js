import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { BAlexBrush36 } from '../Common/styled/textstyles/AlexBrush36';

export default function BetrothedNavbar() {
  const { event_id: eventId } = useParams();
  const dashboardLink = `dashboard`;
  const guestlistLink = `guestlist`;
  const inviteLink = `invite`;
  const registryAddLink = `registryadd`;

  return (
    <>
      <Container>
        <Row>
          <Col md={{ offset: 0.5 }}>
            <BAlexBrush36>Betrothed</BAlexBrush36>
          </Col>
        </Row>
      </Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Nav className="me-auto">
<<<<<<< HEAD
            <Nav.Link href={dashboardLink}>Dashboard</Nav.Link>
            <Nav.Link href={guestlistLink}>Guests</Nav.Link>
            <Nav.Link href={inviteLink}>Invitation</Nav.Link>
            <Nav.Link href={registryAddLink}>Registry</Nav.Link>
=======
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/guestlist">Guests</Nav.Link>
            <Nav.Link href="/browse-theme">Invitation</Nav.Link>
            <Nav.Link href="/registryadd">Registry</Nav.Link>
>>>>>>> 5309561 (WIP RSVP Preview)
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
