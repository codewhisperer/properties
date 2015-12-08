// FILE: configs/connection.js
var mysqlAdapter = require('sails-mysql');
var sqlite3Adapter = require('waterline-sqlite3');
var myDiskAdapter = require('sails-disk');

module.exports = {

  // setup adapters for each type of database
  adapters: {
    'default': mysqlAdapter,
    disk: myDiskAdapter,
    mysql: mysqlAdapter,
    sqlite3: sqlite3Adapter
  },

  // setup all type of connections you could have
  connections: {
    // mysql connection configs
    mysqlLocalhost: {
      adapter: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'properties', // change your database name here
      user: 'root',
      password: 'password'
    },
    //using sails-disk method
    diskLocal: {
        adapter: 'disk'
    },
    sqlitedb: {
      adapter: 'sqlite3',
      /**
       * Database instance type. Specify whether to store the database on disk
       * or in memory.
       */
      type: 'disk', // or 'memory'

      /**
       * Location of file if type='disk'
       */
      filename: './db.sqlite',

      /**
       * Set to true to output SQL queries
       */
      debug: false
    }
  },

  // some config about migration or something
  defaults: {
    // migration mode
    migrate: 'alter'
  }
};
