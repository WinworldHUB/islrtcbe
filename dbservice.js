const queries = require("./queries.json");
const mysql = require("mysql2");

const SUCCESS = "success";
const FAILURE = "failure";

const dbPool = mysql.createPool({
  connectTimeout: 60000,
  connectionLimit: 10,
  database: "toshanig_islrtcdb",
  host: "204.93.216.11",
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  namedPlaceholders: true,
  password: "Password@123d",
  port: 3306,
  queueLimit: 0,
  user: "toshanig_islrtc",
  waitForConnections: true,
});

const dbService = {
  /** Languages Functions */
  getAllLanguages: (onCallback) => {
    dbPool.query(queries.GET_ALL_LANGUAGES, [], (err, result) => {
      if (err) console.log(err);
      if (result) {
        console.log(result);
        if (result) {
          onCallback({ status: SUCCESS, data: result });
        } else {
          onCallback({ status: FAILURE, data: "No languages found" });
        }
      }
    });
  },

  addLanguage: (language, onCallback) => {
    dbPool.query(queries.ADD_LANGUAGE, language, (err, result) => {
      if (err) console.log(err);
      console.log(result);
      if (result) {
        onCallback({ status: SUCCESS, data: result.insertId });
      } else {
        onCallback({ status: FAILURE, data: "Unable to add the language" });
      }
    });
  },

  updateLanguage: (language, onCallback) => {
    dbPool.query(queries.UPDATE_LANGUAGE, language, (err, result) => {
      if (err) console.log(err);
      console.log(result);
      if (result) {
        onCallback({ status: SUCCESS, data: result.affectedRows });
      } else {
        onCallback({ status: FAILURE, data: "Unable to update the language" });
      }
    });
  },

  deleteLanguage: (language, onCallback) => {
    dbPool.query(queries.DELETE_LANGUAGE, language, (err, result) => {
      if (err) console.log(err);
      console.log(result);
      if (result) {
        onCallback({ status: SUCCESS, data: result.affectedRows });
      } else {
        onCallback({ status: FAILURE, data: "Unable to delete the language" });
      }
    });
  },
  /** Languages Functions */

  /** Words Functions */
  getAllWords: (onCallback) => {
    dbPool.query(queries.GET_ALL_WORDS, [], (err, result) => {
      if (err) console.log(err);
      if (result) {
        console.log(result);
        if (result) {
          onCallback({ status: SUCCESS, data: result });
        } else {
          onCallback({ status: FAILURE, data: "No words found" });
        }
      }
    });
  },

  addWord: (word, onCallback) => {
    dbPool.query(queries.ADD_WORD, word, (err, result) => {
      if (err) console.log(err);
      console.log(result);
      if (result) {
        onCallback({ status: SUCCESS, data: result.insertId });
      } else {
        onCallback({ status: FAILURE, data: "Unable to add the word" });
      }
    });
  },

  updateWord: (word, onCallback) => {
    dbPool.query(queries.UPDATE_WORD, word, (err, result) => {
      if (err) console.log(err);
      console.log(result);
      if (result) {
        onCallback({ status: SUCCESS, data: result.affectedRows });
      } else {
        onCallback({
          status: FAILURE,
          data: "Unable to update the word",
        });
      }
    });
  },

  deleteWord: (word, onCallback) => {
    dbPool.query(queries.DELETE_WORD, word, (err, result) => {
      if (err) console.log(err);
      console.log(result);
      if (result) {
        onCallback({ status: SUCCESS, data: result.affectedRows });
      } else {
        onCallback({
          status: FAILURE,
          data: "Unable to delete the word",
        });
      }
    });
  },

  getAllWordsForLanguage: (languageId, onCallback) => {
    dbPool.query(
      queries.GET_ALL_WORDS_FOR_LANGUAGE,
      { languageId: languageId },
      (err, result) => {
        if (err) console.log(err);
        if (result) {
          console.log(result);
          if (result) {
            onCallback({ status: SUCCESS, data: result });
          } else {
            onCallback({ status: FAILURE, data: "No words found" });
          }
        }
      }
    );
  },

  /** Words Functions */

  /** Word Map Functions */
  getAllRelatedWords: (wordId, onCallback) => {
    dbPool.query(
      queries.GET_ALL_RELATED_WORDS,
      { wordId: wordId },
      (err, result) => {
        if (err) console.log(err);
        if (result) {
          console.log(result);
          if (result) {
            onCallback({ status: SUCCESS, data: result });
          } else {
            onCallback({ status: FAILURE, data: "No words found" });
          }
        }
      }
    );
  },

  addRelatedWord: (relatedWord, onCallback) => {
    dbPool.query(queries.ADD_RELATED_WORD, relatedWord, (err, result) => {
      if (err) console.log(err);
      console.log(result);
      if (result) {
        onCallback({ status: SUCCESS, data: result.insertId });
      } else {
        onCallback({ status: FAILURE, data: "Unable to add the related word" });
      }
    });
  },

  updateRelatedWord: (relatedWord, onCallback) => {
    dbPool.query(queries.UPDATE_RELATED_WORD, relatedWord, (err, result) => {
      if (err) console.log(err);
      console.log(result);
      if (result) {
        onCallback({ status: SUCCESS, data: result.affectedRows });
      } else {
        onCallback({
          status: FAILURE,
          data: "Unable to update the related word",
        });
      }
    });
  },

  deleteRelatedWord: (relatedWord, onCallback) => {
    dbPool.query(queries.DELETE_RELATED_WORD, relatedWord, (err, result) => {
      if (err) console.log(err);
      console.log(result);
      if (result) {
        onCallback({ status: SUCCESS, data: result.affectedRows });
      } else {
        onCallback({
          status: FAILURE,
          data: "Unable to delete the related word",
        });
      }
    });
  },
  /** Word Map Functions */

  /** Categories Functions */
  getAllCategories: (onCallback) => {
    dbPool.query(queries.GET_ALL_CATEGORIES, [], (err, result) => {
      if (err) console.log(err);
      if (result) {
        console.log(result);
        if (result) {
          onCallback({ status: SUCCESS, data: result });
        } else {
          onCallback({ status: FAILURE, data: "No categories found" });
        }
      }
    });
  },

  addCategory: (category, onCallback) => {
    dbPool.query(queries.ADD_CATEGORY, category, (err, result) => {
      if (err) console.log(err);
      console.log(result);
      if (result) {
        onCallback({ status: SUCCESS, data: result.insertId });
      } else {
        onCallback({ status: FAILURE, data: "Unable to add the category" });
      }
    });
  },

  updateCategory: (category, onCallback) => {
    dbPool.query(queries.UPDATE_CATEGORY, category, (err, result) => {
      if (err) console.log(err);
      console.log(result);
      if (result) {
        onCallback({ status: SUCCESS, data: result.affectedRows });
      } else {
        onCallback({ status: FAILURE, data: "Unable to update the category" });
      }
    });
  },

  deleteCategory: (category, onCallback) => {
    dbPool.query(queries.DELETE_CATEGORY, category, (err, result) => {
      if (err) console.log(err);
      console.log(result);
      if (result) {
        onCallback({ status: SUCCESS, data: result.affectedRows });
      } else {
        onCallback({ status: FAILURE, data: "Unable to delete the category" });
      }
    });
  },

  getAllCategoriesForLanguage: (languageId, onCallback) => {
    dbPool.query(
      queries.GET_ALL_CATEGORIES_FOR_LANGUAGE,
      { languageId: languageId },
      (err, result) => {
        if (err) console.log(err);
        if (result) {
          console.log(result);
          if (result) {
            onCallback({ status: SUCCESS, data: result });
          } else {
            onCallback({ status: FAILURE, data: "No categories found" });
          }
        }
      }
    );
  },
  /** Categories Functions */

  /** Word Categories Functions */
  getAllWordsForCategory: (categoryId, onCallback) => {
    dbPool.query(
      queries.GET_ALL_WORDS_FOR_CATEGORY,
      { categoryId: categoryId },
      (err, result) => {
        if (err) console.log(err);
        if (result) {
          console.log(result);
          if (result) {
            onCallback({ status: SUCCESS, data: result });
          } else {
            onCallback({ status: FAILURE, data: "No words found" });
          }
        }
      }
    );
  },

  addCategoryForWord: (wordCategory, onCallback) => {
    dbPool.query(queries.ADD_CATEGORY_FOR_WORD, wordCategory, (err, result) => {
      if (err) console.log(err);
      console.log(result);
      if (result) {
        onCallback({ status: SUCCESS, data: result.insertId });
      } else {
        onCallback({
          status: FAILURE,
          data: "Unable to add the category for word",
        });
      }
    });
  },

  updateCategoryForWord: (wordCategory, onCallback) => {
    dbPool.query(
      queries.UPDATE_CATEGORY_FOR_WORD,
      wordCategory,
      (err, result) => {
        if (err) console.log(err);
        console.log(result);
        if (result) {
          onCallback({ status: SUCCESS, data: result.affectedRows });
        } else {
          onCallback({
            status: FAILURE,
            data: "Unable to update the category for word",
          });
        }
      }
    );
  },

  deleteCategoryForWord: (wordCategory, onCallback) => {
    dbPool.query(
      queries.DELETE_CATEGORY_FOR_WORD,
      wordCategory,
      (err, result) => {
        if (err) console.log(err);
        console.log(result);
        if (result) {
          onCallback({ status: SUCCESS, data: result.affectedRows });
        } else {
          onCallback({
            status: FAILURE,
            data: "Unable to delete the category for word",
          });
        }
      }
    );
  },
  /** Word Categories Functions */
};

module.exports = dbService;
