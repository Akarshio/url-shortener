const express = require("express");
const router = express.Router();
const {handlerPostUrl, handlerRedirect, handlerGetVisitorCount} = require('../controllers/url');




router.post('/', handlerPostUrl);
router.get('/visitors/:shortId', handlerGetVisitorCount);
router.get('/:shortId', handlerRedirect);


module.exports = router;

