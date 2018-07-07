var mysql = require ("mysql2");
var inquirer = require ("inquirer");

var connection = mysql.createConnection ({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "M0v1ng0n#",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    listProducts();
  });

// var list = function (products) {
//     for(p = 0; p < products.length; p++) {
//         console.log ("Product ID:", products[p].item_id);
//         console.log ("Product Name:", products[p].product_name);
//         console.log ("Price:", products[p].price);
//     }
    
// };

function listProducts() {
    console.log("Listing all products:\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log(res);
    });
};
  
  var questions = [
 
    { message: "What is the ID of the product you want to buy?",
      type: "input",
      name: "id"
    },
    
    { message: "How many units do you want to buy?",
      type: "input",
      name: "units"
  }];

  inquirer.prompt(questions);

  
