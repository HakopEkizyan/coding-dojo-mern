const express = require("express");
const { faker } = require('@faker-js/faker');
const { response } = require("express");

const app = express();

app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

const port = 8000;

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        id: faker.id
    };
    return newUser;
};

const createCompany = () => {
    const newCompany = {
        id: faker.id,
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newCompany;
};

app.get("/api/users/new", (req, res) => {
    res.json({user: createUser()});
});

app.get("/api/companies/new", (req, res) => {
    res.json({company: createCompany()});
});

app.get("/api/user/company", (req, res) => {
    res.json(
        { 
            user: createUser(), company: createUser()
        }
    );
});

app.listen( port, () => console.log('listening on port: ${port}') );