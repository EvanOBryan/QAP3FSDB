const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'QAP3',
    password: 'Avon1999',
    port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};