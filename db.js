import { Pool } from 'pg';
import { configDotenv } from 'dotenv';

configDotenv({override: true, path: './.env'}); 

const pool = new Pool({
  user: 'postgres',
  host: '62.84.123.36',
  database: 'yaltech',
  password: 'Didi0902',
  port: 5432,
});

export async function testConnection() {
    console.log('Before connect');
    const client = await pool.connect();
    console.log('Connected!');
    client.release();
}

export const getClientsTable = async (req, res) => {
    await pool.query('SELECT * FROM clients', (err, result) => {
        if(err) {
            console.log(result);
            console.error('Error connecting to the database', err.stack);
        }
        res.status(200);    
    });
}