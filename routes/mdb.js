const express = require("express");
const router = express.Router();
const mdb = require("../services/mdb");

/*GET mdb*/
router.get("/", async function (req, res, next) {
  console.log("mdb router get");
  try {
    res.json(await mdb.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting mdb`, err.message);
    next(err);
  }
});

/* POST mdb */
router.post("/", async function (req, res, next) {
  try {
    res.json(await mdb.create(req.body));
  } catch (err) {
    console.error(`Error while creating mdb`, err.message);
    next(err);
  }
});

/* PUT mdb */
router.put("/:id", async function (req, res, next) {
  try {
    res.json(await mdb.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating mdb`, err.message);
    next(err);
  }
});

/* DELETE mdb */
router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await mdb.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting mdb`, err.message);
    next(err);
  }
});

module.exports = router;
