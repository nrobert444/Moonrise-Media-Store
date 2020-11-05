import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone,
  faEnvelope,
  faAddressCard
} from '@fortawesome/free-solid-svg-icons'
import FormContainer from '../components/FormContainer'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { contactUser } from '../actions/userActions'
import { USER_CONTACT_RESET } from '../constants/userConstants'

const ContactPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()

  const userContact = useSelector(state => state.userContact)
  const { loading, error, success } = userContact

  useEffect(() => {
    if (success) {
      dispatch({ type: USER_CONTACT_RESET })
      setName('')
      setMessage('')
      setEmail('')
    }
  }, [success, dispatch])

  const submitHandler = async e => {
    e.preventDefault()
    dispatch(contactUser(name, email, message))
  }

  return (
    <Container fluid>
      <Link to='/' className='btn btn-light my-3 border'>
        Go Back
      </Link>
      <Row className='mb-5'>
        <h1 className='m-auto'>Contact Us!</h1>
      </Row>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <FormContainer>
        <Form onSubmit={submitHandler} className='mb-5'>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Name'
              value={name}
              onChange={e => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='message'>
            <Form.Label>Message</Form.Label>
            <Form.Control
              type='text'
              size='lg'
              placeholder='Enter message'
              value={message}
              onChange={e => setMessage(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type='submit' variant='primary'>
            Submit
          </Button>
        </Form>
      </FormContainer>
      <Row>
        <Col md={4}>
          <FontAwesomeIcon className='fa-2x' icon={faEnvelope} />
          <h3>Email</h3>
          <h6>moonrisestore44@gmail.com</h6>
        </Col>
        <Col md={4}>
          <FontAwesomeIcon className='fa-2x' icon={faPhone} />
          <h3>Phone</h3>
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
