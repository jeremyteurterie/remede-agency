# Remede-Agency
Use an API for a bank user account with React.
##
![LOGO](./public/logo2.png)
##
# 1. Backend
- The repository is available here [Backend](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API).

### 1.1 Prerequisites
- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

### 1.2 Launching the project
- Clone the repository ([Backend](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API)) on your computer.
In the project directory run the following commands:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```
Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

### Populated Database Data
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

### API Documentation
To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

# 2. Frontend
- Clone this repository on your computer.

### 2.1 Prerequisites
- [React v18.2.0](https://react.dev/).
- [Redux Toolkit v1.9.3](https://redux-toolkit.js.org/).
- [Axios v1.3.5](https://www.npmjs.com/package/axios).

### 2.2 Lauching the project
In the project directory run the following commands:
- Install the dependencies with the `npm install` command.
- Run the app with the `npm run dev` command.
```bash
# Install dependencies
npm install

# Start local app
npm run dev
```