/**
 * GET /anode -> getMultiple()
 * POST /anode -> create()
 * PUT /anode/:id -> update()
 * DELETE /anode/:id -> remove()
 */

const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  //   console.log({ offset });
  const rows = await db.query(
    `SELECT id, name, number FROM list LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function create(list) {
  const { name, number } = list;
  const nameStr = JSON.stringify(name);
  const result = await db.query(
    `INSERT INTO list
     (name, number)
     VALUES
     (${nameStr}, ${number})`
  );

  let message = "Error in creating list";

  if (result.affectedRows) {
    message = "list created successfully";
  }

  return { message };
}

async function update(id, list) {
  const { name, number } = list;
  const nameStr = JSON.stringify(name);
  const result = await db.query(
    `UPDATE list
     SET name=${nameStr}, number=${number}
     WHERE id=${id}`
  );

  let message = "Error in updating list";

  if (result.affectedRows) {
    message = "list updated successfully";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(`DELETE FROM list WHERE id=${id}`);
  console.log(result);
  let message = "Error in deleting list";

  if (result.affectedRows) {
    message = "list deleted successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
};
