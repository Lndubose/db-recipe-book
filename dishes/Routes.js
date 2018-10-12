const express = require('express');
const db = require('./db');

const router = express.Router();

router.get('/api/dishes', (req, res) => {
  db.getDishes()
  	.then(response => console.log(response))
    .catch(err => console.log(err))
});

router.get('/api/dishes/:id', (req, res) => {
  const { id } = req.params;

  db.getDish(id)
  	.then(response => console.log(response))
    .catch(err => console.log(err))
});

router.post('/api/dishes', (req, res) => {
  const newDish = req.body;

  db.addDish(newDish)
  	.then(response => console.log(response))
    .catch(err => console.log(err))
});

//Recipe routes
router.get('/api/recipes', (req, res) => {
  db.getRecipes()
  	.then(response => console.log(response))
    .catch(err => console.log(err))
});

router.post('/api/recipes', (req, res) => {
  const newRecipe = req.body;

  db.addRecipe(newRecipe)
  	.then(response => console.log(response))
    .catch(err => console.log(err))
});


module.exports = router;