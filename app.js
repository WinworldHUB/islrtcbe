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
app.use(express.json());

app.use(express.Router({ mergeParams: true }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/english/categories", (req, res) => {
  dbService.getAllEnglishCategories((result) => {
    res.json(result);
  });
});

app.get("/english/:category/words", (req, res) => {
  dbService.getAllEnglishCategoryWords(req.params.category ?? "", (result) => {
    res.json(result);
  });
});

app.get("/hindi/:category/words", (req, res) => {
  dbService.getAllHindiCategoryWords(req.params.category ?? "", (result) => {
    res.json(result);
  });
});

app.get("/hindi/categories", (req, res) => {
  dbService.getAllHindiCategories((result) => {
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`ISLRTC app listening on port ${port}`);
});
