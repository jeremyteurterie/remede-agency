# Remede-Agency
Use an API for a bank user account with React.
##

<p align="center">
  <img src="./logo.png" />
</p>

##
Clone this repository and follow the instructions bellow.
# 1. Backend

### 1.1 Prerequisites
- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Follow the installation instructions according to your operating system [here](https://www.mongodb.com/docs/manual/administration/install-community/).

### 1.2 Launching the project
In the backend folder `/remede-agency/backend` :

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```
Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

### 1.3 Populated Database Data
Once you run the `populate-db` script, you should have two users in your database:

#### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

#### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

### 1.4 API Documentation
To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

# 2. Frontend

### 2.1 Prerequisites
- [React v18.2.0](https://react.dev/).
- [Redux Toolkit v1.9.3](https://redux-toolkit.js.org/).
- [Axios v1.3.5](https://www.npmjs.com/package/axios).

### 2.2 Lauching the project
In the frontend folder `/remede-agency/frontend` :

```bash
# Install dependencies
npm install

# Start local app
npm run dev
```