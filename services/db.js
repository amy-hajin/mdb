const mysql = require("mysql2/promise");
const config = require("../config");

async function query(sql, params) {
  // db 정보는 config.js 에 있지만 연결은 여기서 된다. createCoonection
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute(sql, params);

  return results;
}

module.exports = {
  query,
};
