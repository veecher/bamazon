DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER(10),
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("sammich", "food", 15.75, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("a single gummy bear", "food", 199.99, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("solid gold strawberries", "food", 7000, 750);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("old shirt", "clothes", 1.25, 27);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("some kinda shoes", "clothes", 199.99, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("jacket", "clothes", 7000, 750);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pants", "clothes", 1.25, 27);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tv", "electronics", 199.99, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("robot dinosaur", "electronics", 7000, 750);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("circuit board", "electronics", 1.25, 27);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("skateboard", "sporting goods", 199.99, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("sportsball", "sporting goods", 7000, 750);