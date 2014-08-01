var express = require('express');
var mysql = require("mysql");
var router = express.Router();

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'huajiemu'
});
/* GET users listing. */
router.get('/', function(req, res) {
  var name = "";
//  connection.connect();
    connection.query('select * from users', function(err,rows,fields){
        if(err){
            throw err;
        }
        name = rows[0].name
        res.send('respond with a resource '+name);
    });
//    connection.end();

});

module.exports = router;
