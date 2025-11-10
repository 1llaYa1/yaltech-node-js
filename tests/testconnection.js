import { Pool } from 'pg';

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