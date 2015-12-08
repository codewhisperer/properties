// FILE: ORM/orm.js
var Waterline = require('Waterline');

// create new instance of waterline
var orm = new Waterline();

// get connection configs
var connectionConfig = require('../configs/connection.js');

// load model definitions
var User = require('../models/user.js');

// load models into orm
orm.loadCollection(User);
// you can load more collections (models) here

// export an orm object
module.exports = {};

// initialize function
module.exports.initialize = function(app, PORT, callback) {
    // Initialize the whole database and store models and connections to app
    orm.initialize(connectionConfig, function(err, models) {
      if(err) throw err;

      // pass the collections (models) and connections created to app
      callback(models.collections, models.connections);

    });
}
