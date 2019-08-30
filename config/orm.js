let connection = require("./connection.js");

let orm = {
    selectAll: function(tableInput, callback) {
        let queryString = `SELECT * FROM ??`;

        connection.query(queryString, [tableInput], function(error, results) {
            if (error) throw error;
            
            callback(results);
        });
    },
    insertOne: function(tableInput, columnInput, valueInput, callback) {
        // let queryString = `INSERT INTO ${tableInput} (${columnInput}) VALUES ("${valueInput}")`;
        let queryString = `INSERT INTO ?? (??) VALUES (?)`;
    
        connection.query(queryString, [tableInput, columnInput, valueInput], function(error, result) {
            if (error) throw err;
            
            callback(result);
        });
    },
    updateOne: function(tableInput, idInput, callback) {
        // let queryString = `UPDATE ${tableInput} SET devoured = true WHERE id = ${idInput}`; //optional WHERE burger_name = x
        let queryString = `UPDATE ?? SET devoured = true WHERE id = ?`;

        connection.query(queryString, [tableInput, idInput], function(error, result) {
            if (error) throw err;
            
            callback(result);
        });
      }

};

module.exports = orm;


