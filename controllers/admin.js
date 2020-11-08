var express = require('express');
var router = express.Router();

/// --- Code CONTROLLERs
router.use(function timeLog (req, res, next) {
    console.log('\n\t Admin controller - Time: ', Date.now());
    next();
})

/// ..................................................
router.get('/', adminPage);
function adminPage(req, res) {
    res.send('ADMIN: home page');
}

/// ..................................................
router.get('/adduser', addUserPage);
function addUserPage(req, res) {
    res.send('ADMIN: Add user page');
}


/// ..................................................
router.get('/addproduct', addProductPage);
function addProductPage(req, res) {
    res.send('ADMIN: Add PRODUCT page');
}

var express = require('express');
var router = express.Router();


/// --- Code CONTROLLERs
router.use(function timeLog (req, res, next) {
    console.log('\n\t Product controller - Time: ', Date.now());
    next();
})

/// ..................................................
router.get('/', productPage);
function productPage(req, res) {
    res.send('PRODUCT: home page');
}

/// ..................................................
router.get('/list', listProductPage);
function listProductPage(req, res) {
    res.send('PRODUCT: list PRODUCT page');
}

/// --- EXports
module.exports = router;

app.get('/product', productViewPage);
function productViewPage(req, res) {
    if (session.user)
    {
        MongoClient.connect(urldb, { useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("atn-shop");
            dbo.collection("product").find({}).toArray(function(err, productlist) {
              if (err) throw err;
                res.render("pages/product-list",  {
                    title: "ATN-Shop PRODUCT page", 
                    username: session.user.username,
                    products : productlist 
                    , configHeader: configHeader , currpage: "Product"
                    });
                console.log('Found:', productlist);

              db.close();
            });
          });


    } else {
        res.redirect('/login');
    }
    console.log("\n\t ... connect PRODUCT from ", req.connection.remoteAddress, req.headers.host);
}

