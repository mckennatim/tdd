var assert = require('assert');
var mongoskin = require('mongoskin');

describe('basic database tests', function(){
  before(function(){
  });
  it('should return 3 users', function(done){
    var db = mongoskin.db('mongodb://localhost:27017/stuffTest', {safe:true});
    db.collection('users').find().toArray(function  (err,result){
      console.log(result.length);
      assert.equal(result.length,3);
    });
  });
});