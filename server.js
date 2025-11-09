import express from "express"
import cors from "cors"
import fs from 'fs'

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        success: true,
    });
});

app.post('/', (req, res) => {
    fs.writeFile('./output.json', req, 'utf8', (err) => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                success: true,
                req
            });
        }
    })
});

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Server OK');
});