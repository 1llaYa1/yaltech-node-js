import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: '62.84.123.36',
  database: 'yaltech',
  password: 'Didi0902',
  port: 5432,
});

async function testConnect() {
    console.log('Before connect');
    const client = await pool.connect();
    console.log('Connected!');
    client.release();
}

async function getTableContents() {
    console.log('Table Contents:');
    const result = await pool.query('SELECT * FROM clients');
    console.log(result.rows);
}

getTableContents();

testConnect();