const mysql = require("mysql2")

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Myapp'
}
)

module.exports = pool