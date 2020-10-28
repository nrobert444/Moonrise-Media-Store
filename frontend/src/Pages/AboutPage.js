import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, Card } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'

const AboutPage = () => {
  return (
    <>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>

      <Row>
        <Col md={4}>
          {/* <Image src={} alt='moonrise logo' fluid rounded /> */}
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
