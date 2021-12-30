const express = require('express');
const next = require('next');
const path = require('path');
const aws = require('aws-sdk');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const moment = require('moment');
const requestIp = require('request-ip');

const config = require('./config');
// const routes = require('./routes');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();
const https = require('https');

const server = express();
server.disable('x-powered-by');
server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());
server.use(cookieParser());
server.use(requestIp.mw());

app.prepare().then(() => {
  server.use('/episode/_next/static', express.static(path.join(__dirname, '.next/static')));
  // server.use('/episode/data', express.static(path.join(__dirname, 'data')));

  
  // starFeedback API
  server.post('/episode/api/starFeedback', (req, res) => {
    const ip = req.clientIp;
    const agent = new https.Agent({keepAlive: true})
    const docClient = new aws.DynamoDB.DocumentClient({httpOptions: {agent}});
    const params = {
      TableName: config.ddbName,
      Item: {
        "userId": req.cookies._ga +":"+ req.body.params.userUrl,
        "feedback": {
          "date": moment().format('YYYY-MM-DD, HH:mm:ss'),
          "ip": ip,
          "star": req.body.params.userStar
        }
      }
    };
    console.log("Adding a new item...");
    const putObjectPromise = docClient.put(params).promise();
    putObjectPromise.then((data) => {
      console.log("Added item:", JSON.stringify(data, null, 2));
    }).catch((err) => {
      console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    });
    let epCookie = req.body.params.userUrl.replace(/\//gi, "_");
    res.cookie(epCookie, 'checked');
    res.send('OK');
  });


  server.use(handle);
})
.catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
})

module.exports = server;
