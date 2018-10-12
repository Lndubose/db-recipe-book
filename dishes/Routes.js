const express = require("express");
const db = require("./db");

const router = express.Router();

router.get("/api/dishes", (req, res) => {
  db.getDishes()
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json({ error: `Server error --> ${err}` }));
});

router.get("/api/dishes/:id", (req, res) => {
  const { id } = req.params;

  db.getDish(id)
    .then(response => {
      response
        ? res.status(200).json(response)
        : res.status(404).json({ error: "No dish with that id." });
    })
    .catch(err => res.status(500).json({ error: `Server error --> ${err}` }));
});

router.post("/api/dishes", (req, res) => {
  const newDish = req.body;

  db.addDish(newDish)
    .then(response => res.status(201).json({ id: response[0] }))
    .catch(err => res.status(500).json({ error: `Server error --> ${err}` }));
});

//Recipe routes
router.get("/api/recipes", (req, res) => {
  db.getRecipes()
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json({ error: `Server error --> ${err}` }));
});

router.post("/api/recipes", (req, res) => {
  const newRecipe = req.body;

  db.addRecipe(newRecipe)
    .then(response => res.status(201).json({ id: response[0] }))
    .catch(err => {
      err.errno === 19
        ? res.status(400).json({ error: "Name of the recipe is already used." })
        : res.status(500).json({ error: `Server error --> ${err}` });
    });
});

module.exports = router;
