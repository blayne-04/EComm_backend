const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const allTags = await Tag.findAll({include: Product});
    res.status(200).json({ allTags, message: "All Tags Retrieved!" });
  } catch (err) {
    console.error(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try{
    const tag = await Tag.findOne({where: {id: req.params.id}, include: Product})
    if(tag){
      res.status(200).json({tag, message: 'Data Retrieve Success!'})
    } else{
      res.status(404).json({message: 'No Data Found'})
    }
  } catch(err) {
    console.error(err)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const createTag = await Tag.create({ tag_name: req.body.name})
    res.status(201).json(createTag)
  } catch (err){
    console.error(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try{
    const updateTag = await Tag.findByPk(req.params.id)
    updateTag.tag_name = req.body.name
    await updateTag.save()
    res.status(200).json(updateTag)
  } catch (err){
    console.error(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value  
  try{
    const tagDelete = await Tag.destroy({ where: { id: req.params.id}})
    if(tagDelete){
      res.status(200).json({message: 'Tag Deleted'})
    } else{
      res.status(404).json({message: 'That tag doesnt exist'})
    }
  } catch(err) {
    console.error(err)
  }
});

module.exports = router;
