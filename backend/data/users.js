import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin user',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Nick Roberto',
    email: 'nick@example.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'Amy Roberto',
    email: 'amy@example.com',
    password: bcrypt.hashSync('123456', 10)
  }
]
export default users
