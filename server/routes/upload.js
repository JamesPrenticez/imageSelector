const express = require('express')
const router = express.Router()
const multer = require('multer');
const upload = multer({dest: __dirname + '../../img/upload'});
module.exports = router

router.post('/upload', upload.single('photo'), (req, res) => {
    if(req.file) {
        res.json(req.file);
    }
    else throw 'error' + console.log(err);
});
