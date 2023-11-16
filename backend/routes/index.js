const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', function(req, res, next){
    res.render()
});





module.exports = router;