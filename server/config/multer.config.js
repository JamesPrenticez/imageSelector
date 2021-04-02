const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
       cb(null, __basedir + '/uploads/')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname) //working but there is another one thta is not?
    }
  });   
   
const upload = multer({storage: storage});

module.exports = upload;