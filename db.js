import { Pool } from 'pg';
import { configDotenv } from 'dotenv';

configDotenv({override: true, path: './.env'}); 

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
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