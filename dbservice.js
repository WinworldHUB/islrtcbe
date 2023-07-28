const queries = require("./queries.json");
const mysql = require("mysql2");

const SUCCESS = "success";
const FAILURE = "failure";

const dbPool = mysql.createPool({
  database: "toshanig_islrtcdb",
  host: "204.93.216.11",
  user: "toshanig_islrtc",
  password: "Password@123d",
  port: 3306,
  connectTimeout: 20000,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
});

const dbService = {
  getAllEnglishCategories: (onCallback) => {
    dbPool.query(queries.GET_ALL_ENGLISH_CATEGORIES, [], (err, result) => {
      if (err) console.log(err);
      if (result) {
        console.log(result);
        if (result.length > 0) {
          onCallback({ status: SUCCESS, data: result });
        } else {
          onCallback({ status: FAILURE, data: "No english categories found" });
        }
      }
    });
  },

  getAllEnglishCategoryWords: (category, onCallback) => {
    dbPool.query(
      queries.GET_ENGLISH_CATEGORY_WORDS,
      [category],
      (err, result) => {
        if (err) console.log(err);
        if (result) {
          console.log(result);
          if (result.length > 0) {
            onCallback({ status: SUCCESS, data: result });
          } else {
            onCallback({
              status: FAILURE,
              data: `No english words found for ${category}`,
            });
          }
        }
      }
    );
  },

  getAllHindiCategoryWords: (category, onCallback) => {
    dbPool.query(
      queries.GET_HINDI_CATEGORY_WORDS,
      [category],
      (err, result) => {
        if (err) console.log(err);
        if (result) {
          console.log(result);
          if (result.length > 0) {
            onCallback({ status: SUCCESS, data: result });
          } else {
            onCallback({
              status: FAILURE,
              data: `No hindi words found for ${category}`,
            });
          }
        }
      }
    );
  },

  getAllHindiCategories: (onCallback) => {
    dbPool.query(queries.GET_ALL_HINDI_CATEGORIES, [], (err, result) => {
      if (err) console.log(err);
      if (result) {
        console.log(result);
        if (result.length > 0) {
          onCallback({ status: SUCCESS, data: result });
        } else {
          onCallback({ status: FAILURE, data: "No hindi categories found" });
        }
      }
    });
  },
};

module.exports = dbService;