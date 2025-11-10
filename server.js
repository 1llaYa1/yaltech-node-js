import express from "express"
import cors from "cors"
//import fs from 'fs'

import { getTableContents } from './db.js'

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

app.get('/test', (req, res) => {
    res.send(`${getTableContents()}`);
});

/*app.post('/', (req, res) => {  
    fs.readFile('./output.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        try { 
        fs.writeFileSync('./output.json', data.body, 'utf8', (err) => {
            if (err) {
                res.send(err.body);
            } else {
                res.json({
                    success: true
                });
            }
        });
        } catch {
            res.json({
                success: true
            });
        }
    });
});*/

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Server OK');
});