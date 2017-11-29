var collections = require('./collections.json');
var collectionTypes = require('./collectionTypes.json')
var items = require('./items.json');

var appRouter = function(app) {

    var rn = require('random-number');
    var gen = rn.generator ({
        max: 500000000000000,
        integer: true
    });    

    //CORS
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    
    //Returns collections
    app.get("/collections", function(req, res) {
        res.send(collections);
    });

    //Returns collection types
    app.get("/collectionTypes", function(req, res) {
        res.send(collectionTypes);
    });

    //Add's collections
    app.post("/collections", function(req, res) {        
        req.body.collectionId = gen(Date.now());
        collections.push(req.body);
        res.send(collections);
    });

    //Returns items belonging to collection
    app.get("/collections/:collectionId/items", function(req, res) {
        res.send(items.filter(itm => itm.collectionId == req.params.collectionId));
    });

    //Get items
    app.get("/items/:itemId", function(req, res) {
        res.send(items.find(itm => itm.itemId == req.params.itemId));
    });
    
    //Get items
    app.post("/items", function(req, res) {        
        req.body.itemId = gen(Date.now());
        items.push(req.body);
        res.send(items);
    });
}

module.exports = appRouter;