import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, childen }) => {
  return <Alert variant={variant}>{childen}</Alert>
}
Message.defaultProps = {
  variant: 'info'
}
export default Message
