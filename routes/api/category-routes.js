const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const allCats = await Category.findAll({ include: Product });
    res.status(200).json({ allCats, message: 'All Categories Retrieved!' });
  } catch (err) {
    console.error(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const cat = await Category.findOne({
      where: { id: req.params.id },
      include: Product,
    });
    if (cat) {
      res.status(200).json({ cat, message: 'Data Retrieve Success!' });
    } else {
      res.status(404).json({ message: 'No Data Found' });
    }
  } catch (err) {
    console.error(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const created = await Category.create({ category_name: req.body.name });
    res.status(201).json(created);
  } catch (err) {
    console.error(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const update = await Category.findByPk(req.params.id);
    update.category_name = req.body.name;
    update.save();
    res.status(200).json(update);
  } catch (err) {
    console.error(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const catDelete = await Category.destroy({ where: { id: req.params.id } });
    if (catDelete) {
      res.status(200).json({ message: 'Category Deleted' });
    } else {
      res.status(404).json({ message: 'That category doesnt exist' });
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
