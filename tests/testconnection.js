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

async function testConnect() {
    console.log('Before connect');
    const client = await pool.connect();
    console.log('Connected!');
    client.release();
}

testConnect();