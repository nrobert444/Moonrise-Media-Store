import React from 'react'
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse>
            <Row>
              <Col className='text-left py-3'>
                Copyright &copy; Moonrise Media LLC
              </Col>
            </Row>
            <Nav className='ml-auto'>
              <LinkContainer to='/contact'>
                <Nav.Link>
                  <i className='fas fa-phone-square' /> Contact
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
                <Nav.Link>
                  <i className='fas fa-user' /> About
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </footer>
  )
}

export default Footer
