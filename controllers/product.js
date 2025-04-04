const PRODUCTS = require("../models/product")
const fs = require("fs")


const getAllProducts = async(req,res)=>{
    const products = await PRODUCTS.find();
    // products.map((product)=>{
        // let product_img_url = "../public/uploads/product-img/"+product.img
        // file = fs.readFileSync(product_img_url)
        // product.img = file.toString("base64")
    // })
    res.status(200).send(products);
}

const createProduct = async(req,res)=>{
    const {name,attributes,initial_price,fixed_price,seller,ratings} = req.body;
    const img = req.file.filename
    const product = new PRODUCTS(
        {
            name,
            attributes,
            initial_price,
            fixed_price,
            seller,
            ratings,
            img 
        }
    );
    
    product.save()
    .then(()=>{
        console.log("product saved");
        res.status(201).send("success");
    })
    .catch((e)=>{
        console.log("product not saved : \n"+e)
        res.status(201).send("fails");
    })
    
}

module.exports = {getAllProducts,createProduct} 

