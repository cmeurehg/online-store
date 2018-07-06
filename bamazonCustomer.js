var mysql = require ("mysql2");
var inquirer = require ("inquirer");

var connect = mysql.createConnection ({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

var list = function (products) {
    for(p = 0; p < products.length; p++) {
        console.log ("Product ID:", products[p].item_id);
        console.log ("Product Name:", products[p].product_name);
        console.log ("Price:", products[p].price);
    }
    
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