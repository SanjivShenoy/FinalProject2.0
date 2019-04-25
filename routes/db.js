const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
function getClient() {
  var v = 0;
  const uri =
    "mongodb://Manish:admin@eventmanagementsystem-shard-00-00-abxiq.mongodb.net:27017,eventmanagementsystem-shard-00-01-abxiq.mongodb.net:27017,eventmanagementsystem-shard-00-02-abxiq.mongodb.net:27017/test?ssl=true&replicaSet=EventManagementSystem-shard-0&authSource=admin&retryWrites=true";
  const client = new MongoClient(uri, { useNewUrlParser: true });
  return client;
}

function getResults(req, res, collection, condition = {}, callback) {
  client = getClient();
  client.connect(err => {
    assert.equal(null, err);
    const db = client.db("test");
    const findDocuments = function(db, callback, search_in, condition) {
      const collection = db.collection(search_in);
      collection.find(condition).toArray(function(err, results) {
        assert.equal(err, null);
        callback(results);
      });
    };
    findDocuments(
      db,
      results => {
        client.close();
        callback(results);
      },
      collection,
      condition
    );
  });
}

function insertObject(collection, object) {
  client = getClient();
  client.connect(err => {
    assert.equal(null, err);
    const db = client.db("test");
    const insertDocuments = function(db, callback, insert_into, object) {
      const collection = db.collection(insert_into);
      collection.insertOne(object, function(err, result) {
        assert.equal(err, null);
        callback(result);
      });
    };
    insertDocuments(
      db,
      function() {
        client.close();
      },
      collection,
      object
    );
  });
}

function modifyObject(collection, object) {}

module.exports.getResults = getResults;
module.exports.insertObject = insertObject;
module.exports.modifyObject = modifyObject;
module.exports.getResults = getResults;
