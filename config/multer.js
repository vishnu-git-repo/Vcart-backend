const multer = require("multer")
const path = require("path")

const product_storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,path.join(__dirname,"..","public","uploads","product-img"))
    },
    filename : (req,file,cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})


const product_upload = multer({storage : product_storage});

module.exports = {product_upload}