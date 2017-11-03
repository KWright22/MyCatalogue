var collections = require('./collections.json');
var items = require('./items.json');

var appRouter = function(app) {
    //Returns collections
    app.get("/collections", function(req, res) {
        res.send(collections);
    });

    //Add's collections
    app.post("/collections", function(req, res) {
        collections.push(req.body);
        res.send(collections);
    });

    //Get items
    app.get("/items", function(req, res) {
        res.send(items);
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