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

app.get("/", (req, res) => {
  dbService.getAllWords((result) => {
    res.json(result);
  });
});

app.get("/:id", (req, res) => {
  const existingWord = [req.params.id];
  dbService.getWord(existingWord, (result) => {
    res.json(result);
  });
});

app.get("/video/:url", (req, res) => {
  const existingWord = { videourl: req.params.url };
  dbService.getWordFromVideoUrl(existingWord, (result) => {
    res.json(result);
  });
});

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

app.post("/", (req, res) => {
  const newWord = [
    req.body.category_english,
    req.body.category_hindi,
    req.body.word_english,
    req.body.word_hindi,
    req.body.video_url_english,
    req.body.video_url_hindi,
  ];
  dbService.addWord(newWord, (result) => {
    res.json(result);
  });
});

app.post("/:id", (req, res) => {
  const existingWord = [
    req.body.category_english,
    req.body.category_hindi,
    req.body.word_english,
    req.body.word_hindi,
    req.body.video_url_english,
    req.body.video_url_hindi,
    req.params.id,
  ];
  dbService.editWord(existingWord, (result) => {
    res.json(result);
  });
});

app.delete("/:id", (req, res) => {
  const existingWord = [req.params.id];
  dbService.deleteWord(existingWord, (result) => {
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`ISLRTC app listening on port ${port}`);
});
