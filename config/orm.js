let connection = require("./connection.js");

let orm = {
    selectAll: function(tableInput, callback) {
        let queryString = `SELECT * FROM ${tableInput};`;

        connection.query(queryString, function(error, results) {
            if (error) throw error;
            
            callback(results);
        });
    },
    insertOne: function(tableInput, columnInput, valueInput, callback) {
        let queryString = `INSERT INTO ${tableInput} (${columnInput}) VALUES ("${valueInput}")`;
    
        // queryString += " (";
        // queryString += cols.toString();
        // queryString += ") ";
        // queryString += "VALUES (";
        // queryString += printQuestionMarks(vals.length);
        // queryString += ") ";

        // console.log(queryString);
    
        connection.query(queryString, function(error, results) {
            if (error) throw err;
            
            callback(result);
        });
    },
    updateOne: function(tableInput, idInput, callback) {
        var queryString = `UPDATE ${tableInput} SET devoured = true WHERE id = ${idInput}`; //optional WHERE burger_name = x

        // UPDATE people
        // SET has_pet = true, pet_name = "Franklin", pet_age = 2
        // WHERE id = 4;
        // -- WHERE name = "Peter";
    
        // queryString += " SET ";
        // queryString += objToSql(objColVals);
        // queryString += " WHERE ";
        // queryString += condition;
    
        // console.log(queryString);

        connection.query(queryString, function(error, results) {
            if (error) throw err;
            
            callback(result);
        });
      }







};

module.exports = orm;


