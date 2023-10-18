const Controller= require('../controllers/db.controller');
const express=require('express');
const router= express.Router();
router.get('/',Controller.Get);
router.get('/:id',Controller.GetOne);

router.post('/',Controller.Post);
router.put('/:id',Controller.Put);
router.delete('/:id',Controller.Delete);
module.exports=router;