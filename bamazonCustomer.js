var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

function itemLister() {
    connection.query("SELECT product_name, price FROM products", function (err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res, null, 2));
        shopper();
    });

}

itemLister();

function shopper() {
    inquirer
        .prompt({
            name: "shoppingList",
            type: "list",
            message: "what do you want?",
            choices: [
                "sammich",
                "a single gummy bear",
                "solid gold strawberries",
                "old shirt",
                "some kinda shoes",
                "jacket",
                "pants",
                "tv",
                "robot dinosaur",
                "circuit board",
                "skateboard",
                "sportsball",
                "Exit"
            ]
        },
            {
                name: "quantity",
                type: "input",
                Message: "how many?"
            })
        .then(function (answer) {
            switch (answer.shoppingList) {
                case "sammich":
                case "a single gummy bear":
                case "solid gold strawberries":
                case "old shirt":
                case "some kinda shoes":
                case "jacket":
                case "pants":
                case "tv":
                case "robot dinosaur":
                case "circuit board":
                case "skateboard":
                case "sportsball":
                    itemChecker(answer.shoppingList);
                    break;
                case "exit":
                    quitter();
                default:
                    console.log("that's not a thing");
                    itemLister();
                    break;
            };
        });
};

var total = 0;

function itemChecker(shoppingCart) {
    var query = connection.query(
        "SELECT * FROM products WHERE product_name = answer.shoppingList",
        console.log(query)
    );
};

function keepshopping() {
    var query = connection.query(
        "SELECT * FROM products",
        function (err, res) {
            console.log("aright, cool \n total cost " + total)
            inquirer
                .prompt({
                    name: "shop_again",
                    type: "confirm",
                    message: "you done?",
                    default: 0
                })
                .then(function (answer) {
                    if (answer.shop_again) {
                        quitter();
                    }
                    else {
                        itemLister()
                    };
                });
        }
    );
};

function quitter() {
    console.log("so long, sucker!");
    connection.end()
};