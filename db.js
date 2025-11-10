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

export const testConnection = async () => {
    const client = await pool.connect();
    client.release();
    return 'OK';
}

export async function getTableContents() {
    console.log('Table Contents:');
    const result = await pool.query('SELECT * FROM clients');
    console.log(result.rows);
}

export const getClientsTable2 = async (req, res) => {
    await pool.query('SELECT * FROM clients', (err, result) => {
        if(err) {
            console.log(result);
            console.error('Error connecting to the database', err.stack);
        }
        res.status(200);    
    });
}