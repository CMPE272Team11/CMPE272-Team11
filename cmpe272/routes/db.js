var ejs= require('ejs');
var mysql = require('mysql');

function getConnection(){
	

	var connection = mysql.createConnection({
	  host     : 'a***',
	  user     : '***',
	  password : '***',
	  port 	   : '3306',
	  database : 'ebdb',
	});
    return connection;
}


function fetchData(callback,sqlQuery){
    
    console.log("\nSQL Query::"+sqlQuery);
    
    var connection=getConnection();
    
    connection.query(sqlQuery, function(err, rows, fields) {
        if(err){
            console.log("ERROR: " + err.message +  console.log( err.stack ));
        }
        else 
        {    // return err or result
            callback(err, rows);
        }
    });
    console.log("\nConnection closed..");
    connection.end();
}    

exports.fetchData=fetchData;