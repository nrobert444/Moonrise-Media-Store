import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone,
  faEnvelope,
  faAddressCard
} from '@fortawesome/free-solid-svg-icons'

const ContactPage = () => {
  return (
    <Container fluid>
      <Link to='/' className='btn btn-light my-3 border'>
        Go Back
      </Link>
      <Row className='mb-5'>
        <h1 className='m-auto'>Contact Us!</h1>
      </Row>
      <Row>
        <Col md={4}>
          <FontAwesomeIcon className='fa-2x' icon={faEnvelope} />
          <h3>Email</h3>
          <h6>Nick@gmail.com</h6>
        </Col>
        <Col md={4}>
          <FontAwesomeIcon className='fa-2x' icon={faPhone} />
          <h3>Phone Number</h3>
          <h6>(843)-209-7711</h6>
        </Col>
        <Col md={4}>
          <FontAwesomeIcon className='fa-2x' icon={faAddressCard} />
          <h3>Address</h3>
          <h6>5845 NE Hoyt St. Portland, OR</h6>
        </Col>
      </Row>
    </Container>
  )
}

export default ContactPage
