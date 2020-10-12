import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'
import ProductListPage from './Pages/ProductListPage'
import ProductEditPage from './Pages/ProductEditPage'
import CartPage from './Pages/CartPage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import ProfilePage from './Pages/ProfilePage'
import ShippingPage from './Pages/ShippingPage'
import PaymentPage from './Pages/PaymentPage'
import OrderPage from './Pages/OrderPage'
import PlaceOrderPage from './Pages/PlaceOrderPage'
import UserListPage from './Pages/UserListPage'
import UserEditPage from './Pages/UserEditPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/product/:id' component={ProductPage} />
          <Route path='/cart/:id?' component={CartPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/admin/userlist' component={UserListPage} />
          <Route path='/admin/user/:id/edit' component={UserEditPage} />
          <Route path='/admin/productlist' component={ProductListPage} />
          <Route path='/admin/product/:id/edit' component={ProductEditPage} />
          <Route path='/shipping' component={ShippingPage} />
          <Route path='/payment' component={PaymentPage} />
          <Route path='/placeorder' component={PlaceOrderPage} />
          <Route path='/order/:id' component={OrderPage} />
          <Route exact path='/' component={HomePage} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
