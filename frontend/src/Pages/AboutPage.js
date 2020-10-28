import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, Card } from 'react-bootstrap'
import logo from '../assets/Moonrise Media LLC Logo.png'
const AboutPage = () => {
  return (
    <>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>

      <Row className='justify-content-md-center mb-5'>
        <Col md={4}>
          <Image src={logo} alt='moonrise logo' fluid rounded />
        </Col>
      </Row>

      <Row>
        <Card>
          <Card.Body>
            <Card.Title as='h1'>
              <strong>'Moonrise Media - Who We Are'</strong>
            </Card.Title>
            <Card.Text as='p'>'Description'</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </>
  )
}

export default AboutPage
