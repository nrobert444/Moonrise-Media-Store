import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './Pages/HomePage'
import { Container } from 'react-bootstrap'
const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <HomePage />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
