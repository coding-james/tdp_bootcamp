CREATE DATABASE qa_restaurant; # creates the database
USE qa_restaurant; # identifies which table you are going to use
CREATE TABLE customers(
cust_id INT UNIQUE NOT NULL AUTO_INCREMENT,
cust_name VARCHAR(100) NOT NULL,
phone_number VARCHAR(11) NOT NULL,
newsletter BOOLEAN NOT NULL DEFAULT false,
points DECIMAL(6,2),
PRIMARY KEY(cust_id));

SHOW TABLES;
DESCRIBE customers; #provides a breakdown of the specific table, its columns, data types and constraints

#DROP DATABASE qa_restaurant