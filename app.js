const express = require("express");
const cors = require("cors");
const dbService = require("./dbservice");

const port = 8080;

const app = express();
const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json({ limit: "4mb" }));

app.use(express.Router({ mergeParams: true }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true, limit: "4mb" }));

const SUCCESS = "success";

/** Languages APIs */
app.get("/languages", (req, res) => {
  dbService.getAllLanguages((result) => {
    res.json(result);
  });
});
app.post("/language", (req, res) => {
  dbService.addLanguage(req.body, (result) => {
    res.json(result);
  });
});
app.put("/language", (req, res) => {
  dbService.updateLanguage(req.body, (result) => {
    res.json(result);
  });
});
app.delete("/language", (req, res) => {
  dbService.deleteLanguage(req.body, (result) => {
    res.json(result);
  });
});

app.get("/languages/:id/words", (req, res) => {
  dbService.getAllWordsForLanguage([req.params.id], (result) => {
    res.json(result);
  });
});

app.get("/languages/:id/categories", (req, res) => {
  dbService.getAllCategoriesForLanguage([req.params.id], (result) => {
    res.json(result);
  });
});
/** Languages APIs */

/** Words APIs */
app.get("/words", (req, res) => {
  dbService.getAllWords((result) => {
    res.json(result);
  });
});
app.post("/word", (req, res) => {
  dbService.addWord(req.body, (result) => {
    res.json(result);
  });
});
app.put("/word", (req, res) => {
  dbService.updateWord(req.body, (result) => {
    res.json(result);
  });
});
app.delete("/word", (req, res) => {
  dbService.deleteWord(req.body, (result) => {
    res.json(result);
  });
});

/** Words APIs */

/** Words Map APIs */
app.get("/relatedwords/:id", (req, res) => {
  dbService.getAllRelatedWords([req.params.id], (result) => {
    res.json(result);
  });
});
app.post("/relatedwords", (req, res) => {
  dbService.addRelatedWord(req.body, (result) => {
    res.json(result);
  });
});
app.put("/relatedwords", (req, res) => {
  dbService.updateRelatedWord(req.body, (result) => {
    res.json(result);
  });
});
app.delete("/relatedwords", (req, res) => {
  dbService.deleteRelatedWord(req.body, (result) => {
    res.json(result);
  });
});
/** Words Map APIs */

/** Categories APIs */
app.get("/categories", (req, res) => {
  dbService.getAllCategories((result) => {
    res.json(result);
  });
});
app.post("/category", (req, res) => {
  dbService.addCategory(req.body, (result) => {
    res.json(result);
  });
});
app.put("/category", (req, res) => {
  dbService.updateCategory(req.body, (result) => {
    res.json(result);
  });
});
app.delete("/category", (req, res) => {
  dbService.deleteCategory(req.body, (result) => {
    res.json(result);
  });
});

app.get("/categories/:id/words", (req, res) => {
  dbService.getAllWordsForCategory([req.params.id], (result) => {
    res.json(result);
  });
});

/** Categories APIs */

/** Word Categories APIs */

app.post("/word/category", (req, res) => {
  dbService.addCategoryForWord(req.body, (result) => {
    res.json(result);
  });
});
app.put("/word/category", (req, res) => {
  dbService.updateCategoryForWord(req.body, (result) => {
    res.json(result);
  });
});
app.delete("/word/category", (req, res) => {
  dbService.deleteCategoryForWord(req.body, (result) => {
    res.json(result);
  });
});

/** Word Categories APIs */

app.listen(port, () => {
  console.log(`ISLRTC app listening on port ${port}`);
});
