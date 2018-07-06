CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(45) NOT NULL,
    department_name VARCHAR(45) NOT NULL,
    price INT NOT NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("croissant", "bakery", "2", "50");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("danish", "bakery", "3", "40");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("coffee cake", "bakery", "1", "20");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("chocolate croissant", "bakery", "2", "10");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("almond croissant", "bakery", "2", "10");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("eclair", "bakery", "4", "20");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("glaced doughnut", "bakery", "2", "50");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("maple doughnut", "bakery", "2", "50");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("blueberry scone", "bakery", "2", "30");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cranberry scone", "bakery", "2", "20");

