# Moonrise-Media-Store
eCommerce platform built with React, Redux, Node/express, and MongoDb.

This site was built to be utilized as an additional resource for my online retail store Moonrise Media LLC.


<img width="1440" alt="Screen Shot 2020-11-24 at 10 18 21 AM" src="https://user-images.githubusercontent.com/56571134/100792938-4643e180-33d0-11eb-8d3f-478f86d36529.png">

## Features

- Full featured shopping cart
- Product pagination + pagination by category
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration


### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## API End Points

### Product Routes

#### GET
- /api/products/
  - get all products
 
- /api/products/dvd/
  - get all products with the category dvd
  
- /api/products/bluray/
  - get all products with the category bluray
  
- /api/products/games
  - get all products with the category games

- /api/products/:id
  -get product by id

#### POST

- /api/products/
  - create a product. Admin only.
  
#### PUT
- /api/products/:id
  - update a product by id. Admin only.
  
#### DELETE
- /api/products/:id
  - delete a product by id. Admin Only.
  
### Order Routes

#### GET
- /api/orders/
  - get all orders. Admin only
 
- /api/orders/:id
  - get order by id for current user.
  
- /api/orders/myorders
  - get all orders associated with the current user
#### POST

- /api/orders/
  - create an order.
  
#### PUT
- /api/orders/:id/pay
  - update an order by id as paid. Admin only.
  
- /api/orders/:id/deliver
  - update an order by id as delivered. Admin only.

### User Routes

#### GET
- /api/users/
  - get all users. Admin only.
 
- /api/users/profile
  - get profile of current user.
  
- /api/users/:id
  - get user by id. Admin only.

#### POST

- api/users/
  - register a user

- /api/users/login
  - login a user.
  
#### PUT
- /api/users/profile
  - update current user's profile. 
  
- /api/users/:id
  - update a user's profile. Admin only.
  
#### DELETE
- /api/users/:id
  - delete a user by id. Admin Only.
  
### Upload Routes

#### POST

-api/uploads/
  - upload and image for creating a product. Admin only.
  
### Mail Routes
-Optional
#### POST

-/api/send/
  - send email to dedicated inbox.
  
## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

Sample User Logins

admin@example.com (Admin)
123456

sean@example.com (Customer)
123456

```


## License

The MIT License

Copyright (c) 2020 Nick Roberto

