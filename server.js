import express from "express"
import cors from "cors"
//import fs from 'fs'

import { getClientsTableContents, testConnection } from './db.js'

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

app.get('/testdbconnection', async (req, res) => {
    res.send(await testConnection());
});

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Server OK');
});