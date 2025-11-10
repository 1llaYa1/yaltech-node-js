import express from "express"
import cors from "cors"
//import fs from 'fs'

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
    const data = JSON.parse(req.body);
    const fullname = data.fullname;
    const email = data.email;
    const comment = data.comment;
    res.send(await addClientToClientsTable(fullname, email, comment));
});

app.get('/testdbconnection', async (req, res) => {
    res.send(await testConnection());
});

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Server OK');
});