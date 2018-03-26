var mysql=require('mysql');
var connection=mysql.createPool({
    host:'sql12.freemysqlhosting.net',
    user:'sql12228778',
    password:'dSUWZ6DakP',
    database:'sql12228778'
    // host:'localhost',
    // user:'root',
    // password:'',
    // database:'medsky'
});
module.exports=connection;