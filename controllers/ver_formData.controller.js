const db = require("../configs/mysql_config");
const asyncHandler = require("../middlewares/asyncHandler");

//to-do: create a new route file for vefication form data fetching and status update
//to-do: add the new route file to index.js
//to-do: new file for verfier status update
//to-do: move pf modules to a new folder and update the routes at all refs

//Fetch landform data for verification

const getver_landformData_sql = ``; //insert SQL query here

exports.getver_landformData = asyncHandler(async (req, res) => {
  const connection = await db.getConnection();
  const form_id = req.query.form_id; 
  try {
    const [results] = await connection.execute(getver_landformData_sql, [form_id]);
    if (results.length > 0) {
      res.json(results[0]); //check the response with log
    } else {
      res.json(0);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    connection.release();
  }
});

//Fetch pondform data for verification

const getver_pondformData_sql = ``; //insert SQL query here

exports.getver_pondformData = asyncHandler(async (req, res) => {
  const connection = await db.getConnection();
  const form_id = req.query.form_id; 
  try {
    const [results] = await connection.execute(getver_pondformData_sql, [form_id]);
    if (results.length > 0) {
      res.json(results[0]); //check the response with log
    } else {
      res.json(0);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    connection.release();
  }
});

//Fetch plantationform data for verification

const getver_plantationformData_sql = ``; //insert SQL query here

exports.getver_plantationformData = asyncHandler(async (req, res) => {
  const connection = await db.getConnection();
  const form_id = req.query.form_id; 
  try {
    const [results] = await connection.execute(getver_plantationformData_sql, [form_id]);
    if (results.length > 0) {
      res.json(results[0]); //check the response with log
    } else {
      res.json(0);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    connection.release();
  }
});
