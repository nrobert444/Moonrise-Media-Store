import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import AboutPage from './Pages/AboutPage'
import Footer from './components/Footer'
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'
import CartPage from './Pages/CartPage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import ProfilePage from './Pages/ProfilePage'
import ShippingPage from './Pages/ShippingPage'
import PaymentPage from './Pages/PaymentPage'
import PlaceOrderPage from './Pages/PlaceOrderPage'
import OrderPage from './Pages/OrderPage'
import UserListPage from './Pages/UserListPage'
import UserEditPage from './Pages/UserEditPage'
import ProductListPage from './Pages/ProductListPage'
import ProductEditPage from './Pages/ProductEditPage'
import OrderListPage from './Pages/OrderListPage'
import BlurayPage from './Pages/BlurayPage'
import DvdPage from './Pages/DvdPage'
import GamePage from './Pages/GamePage'
import ContactPage from './Pages/ContactPage'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3' style={{ backgroundColor: '#ffffe6' }}>
        <Container>
          <Route path='/order/:id' component={OrderPage} />
          <Route path='/shipping' component={ShippingPage} />
          <Route path='/payment' component={PaymentPage} />
          <Route path='/placeorder' component={PlaceOrderPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/product/:id' component={ProductPage} />
          <Route path='/shop/games' component={GamePage} exact />
          <Route path='/shop/dvd' component={DvdPage} exact />
          <Route path='/shop/bluray' component={BlurayPage} exact />
          <Route path='/shop/dvd/:pageNum' component={DvdPage} exact />
          <Route path='/shop/bluray/:pageNum' component={BlurayPage} exact />
          <Route path='/shop/games/:pageNum' component={GamePage} exact />
          <Route path='/cart/:id?' component={CartPage} />
          <Route path='/admin/userlist' component={UserListPage} />
          <Route path='/admin/user/:id/edit' component={UserEditPage} />
          <Route path='/admin/productlist' component={ProductListPage} exact />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListPage}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditPage} />
          <Route path='/admin/orderlist' component={OrderListPage} />
          <Route path='/search/:keyword' component={HomePage} exact />
          <Route path='/page/:pageNumber' component={HomePage} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomePage}
            exact
          />
          <Route path='/about' component={AboutPage} exact />
          <Route path='/contact' component={ContactPage} exact />
          <Route path='/' component={HomePage} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
