import * as dotenv from 'dotenv';
import { response } from 'express';
import path from 'path';

dotenv.config({ path: path.resolve('./.env') });

import { Pool } from 'pg';

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
    return 'DB CONNECTION OK';
}

export const getClientsTableContents = async () => {
    const result = await pool.query('SELECT * FROM clients');
    return result.rows;
}

export const addClientToClientsTable = async (fullname, email, comment, req, res) => {
    Promise.all([
        await pool.query(`INSERT INTO clients (fullname, email, comment) VALUES ('${fullname}', '${email}', '${comment}');`)
    ]).then((result) => {
        return result;
    });
}

export const trunkateClientsTable = async () => {
    const result = await pool.query(`TRUNCATE TABLE clients RESTART IDENTITY;`);
    return true;
}

export const test = async (req, res) => {
    Promise.all([
        await pool.query('SELECT * FROM clients')
    ]).then((result) => {
        res.send(result);
    });
}