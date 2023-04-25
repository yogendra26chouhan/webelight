const express = require('express');
const dotenv = require('dotenv').config();
const jwt = require("jsonwebtoken");
const Routes = require('./routes');
const cors = require('cors');
const swaggerUiExpress = require("swagger-ui-express");
const YAML = require('yamljs');
const fs = require("fs")

const app = express();
const port = process.env.APP_PORT;

app.use(express.json());
app.use(cors());
app.options('*', cors());
app.use('/', Routes);

const file  = fs.readFileSync('./src/docs/swagger.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)
app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocument));


app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });

app.listen(port, () => {
	console.log(`server run on port ${port}`);
});