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
    return 'DB CONNECTION OK';
}

export const getClientsTableContents = async () => {
    const result = await pool.query('SELECT * FROM clients');
    return result.rows;
}

export const addClientToClientsTable = async () => {
    const result = await pool.query('SELECT * FROM clients');
    return result.rows;
}