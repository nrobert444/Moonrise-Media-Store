import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={HomePage} />
          <Route path='/product/:id' component={ProductPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
