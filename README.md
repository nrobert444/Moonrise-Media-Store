# Moonrise-Media-Store
eCommerce platform built with React, Redux, Node/express, and MongoDb.

This site was built to be utilized as an additional resource for my online retail store Moonrise Media LLC.


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

