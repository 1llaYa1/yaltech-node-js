import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import path from 'path'

dotenv.config({ path: path.resolve('../.env') });

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

export const testConnection = async () => {
    const client = await pool.connect();
    client.release();
    return 'OK';
}

/*async function testConnect() {
    console.log('Before connect');
    const client = await pool.connect();
    console.log('Connected!');
    client.release();
}*/

export const getClientsTable = async (req, res) => {
    await pool.query('SELECT * FROM clients', (error, result) => {
        if(error) {
            console.error('Error connecting to the database', err.stack);
        }
        console.log(result.rows[0]);   
    });
}

//var w = getClientsTable();
console.log(await testConnection())