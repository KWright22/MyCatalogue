var collections = require('./collections.json');
var items = require('./items.json');

var appRouter = function(app) {

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

    //Add's collections
    app.post("/collections", function(req, res) {
        const uuidv4 = require('uuid/v4');
        req.body.collectionId = uuidv4();
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
        items.push(req.body);
        res.send(items);
    });
}

module.exports = appRouter;