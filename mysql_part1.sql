CREATE DATABASE qa_basics; # creates the database
USE qa_basics; # identifies which table you are going to use

CREATE TABLE customers(
cust_id INT UNIQUE NOT NULL AUTO_INCREMENT,
cust_name VARCHAR(100) NOT NULL,
phone_number VARCHAR(11) NOT NULL,
newsletter BOOLEAN NOT NULL DEFAULT false,
points DECIMAL(6,2),
PRIMARY KEY(cust_id));

#Add a new column to an existing table
ALTER TABLE customers ADD age INT NOT NULL;

#Remove a column from an exisiting table
ALTER TABLE customers DROP COLUMN points;

#Modify an existing column, need to include the constraints you want to keep
ALTER TABLE customers MODIFY cust_name VARCHAR(80);

SHOW TABLES;
DESCRIBE customers; #provides a breakdown of the specific table, its columns, data types and constraints

#DROP DATABASE qa_basics