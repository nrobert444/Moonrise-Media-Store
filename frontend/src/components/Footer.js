import React from 'react'
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import { faPhone, faUser } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer>
      <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse>
            <Row>
              <Col className='text-left'>
                Copyright &copy; Moonrise Media LLC
              </Col>
            </Row>
            <Nav className='ml-auto'>
              <LinkContainer to='/contact'>
                <Nav.Link>
                  <FontAwesomeIcon className='fab fa-2x' icon={faPhone} />{' '}
                  Contact
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
                <Nav.Link>
                  <FontAwesomeIcon className='fab fa-2x' icon={faUser} /> About
                </Nav.Link>
              </LinkContainer>
              <Nav.Link href='https://www.linkedin.com/in/nicholas-roberto/'>
                <FontAwesomeIcon className='fab fa-2x' icon={faLinkedin} />
              </Nav.Link>
              <Nav.Link href='https://twitter.com/Nichola55137683'>
                <FontAwesomeIcon className='fab fa-2x' icon={faTwitter} />
              </Nav.Link>
              <Nav.Link href='https://github.com/nrobert444'>
                <FontAwesomeIcon className='fab fa-2x' icon={faGithub} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </footer>
  )
}

export default Footer
