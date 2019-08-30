let orm = require("../config/orm.js");

let burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(results) {
            callback(results);
        });
    },
    insertOne: function(valueInput, callback) {
        orm.insertOne("burgers", "burger_name", valueInput, function(result) {
            callback(result);
        });
    },
    updateOne: function(idInput, callback) {
        orm.updateOne("burgers", idInput, function(result) {
            callback(result);
        });
    }

};

module.exports = burger;


