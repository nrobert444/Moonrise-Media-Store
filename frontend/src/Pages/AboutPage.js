import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, Card } from 'react-bootstrap'
import logo from '../assets/Moonrise Media LLC Logo.png'

const AboutPage = () => {
  return (
    <>
      <Link to='/' className='btn btn-light my-3 border'>
        Go Back
      </Link>

      <Row className='justify-content-md-left mb-5'>
        <Col md={4}>
          <Image src={logo} alt='moonrise logo' fluid rounded />
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title as='h1'>
                <strong>Who We Are</strong>
              </Card.Title>
              <Card.Text as='p' style={{ fontSize: '19px' }}>
                Moonrise Media was born from a passion for film and two brothers
                quest to find obscure and underseen works of cinematic art. In
                our search we found that many of these rare items could only be
                purchased at a premium and began developing lists of the rarest
                and most interesting finds to seek out. These lists became the
                foundation for what would become nearly a decade of traveling
                the US finding these obscurities and using the proceeds of
                selling to support both our passion for film and our lives.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default AboutPage
