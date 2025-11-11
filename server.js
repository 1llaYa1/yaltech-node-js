import express from "express"
import cors from "cors"

import fs from 'fs'
import http from 'http'
import https from 'https'

var privateKey  = fs.readFileSync('sslsert\/server.key', 'utf8');
var certificate = fs.readFileSync('sslsert\/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};

import { getClientsTableContents, addClientToClientsTable, testConnection } from './db.js'

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        success: true,
    });
});

app.post('/', (req, res) => {
    res.json({
        success: true,
    })
});

app.get('/clients', async (req, res) => {
    res.send(await getClientsTableContents());
});

app.post('/clients', async (req, res) => {
    if (await addClientToClientsTable(req.body.fullname, req.body.email, req.body.comment)){
        res.json({
            success: true,
        })
    } else {
        res.json({
            success: false,
        })
    }
});

app.get('/testdbconnection', async (req, res) => {
    res.send(await testConnection());
});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(4444);

/*app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Http Server OK');
});*/

/*https.listen(8080, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Https Server OK');
});*/