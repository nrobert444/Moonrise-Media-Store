import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price, order, userInfo }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_EhSoHQw2WQIA1vhA2QvcqBJS00tlH0vlmz'

  const onToken = async token => {
    try {
      await axios
        .post(`/order/${order._id}`, {
          data: {
            amount: priceForStripe,
            token: userInfo.token
          }
        })
        .then(response => {
          alert('succesful payment')
        })
    } catch (error) {
      console.log('Payment Error: ', error)
      alert(
        'There was an issue with your payment! Please make sure you use the provided credit card.'
      )
    }
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Moonrise Media'
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
