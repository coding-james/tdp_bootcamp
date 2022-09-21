CREATE DATABASE qa_restaurant;
USE qa_restaurant;

CREATE TABLE customers(
cust_id INT UNIQUE NOT NULL AUTO_INCREMENT,
cust_name VARCHAR(100) NOT NULL,
phone_number VARCHAR(11) UNIQUE NOT NULL,
address_1 VARCHAR(200) NOT NULL,
address_2 VARCHAR(200),
town_city VARCHAR(100),
post_code VARCHAR(10),
delivery_info VARCHAR(300),
subscribe BOOLEAN DEFAULT false,
marketing_email BOOLEAN DEFAULT true,
marketing_text BOOLEAN DEFAULT false,
marketing_post BOOLEAN DEFAULT false,
PRIMARY KEY(cust_id));

CREATE TABLE menu_items(
menu_item_id INT UNIQUE NOT NULL AUTO_INCREMENT,
item_name VARCHAR(100) NOT NULL,
item_desc VARCHAR(500) NOT NULL,
allergens VARCHAR(500) DEFAULT "none",
price DECIMAL(3,2) NOT NULL,
calories INT NOT NULL,
availability BOOLEAN DEFAULT false NOT NULL,
PRIMARY KEY(menu_item_id));

SHOW TABLES;
DESCRIBE customers;
DESCRIBE menu_items;

ALTER TABLE customers ADD email VARCHAR(100) UNIQUE; #Add in email address

ALTER TABLE customers MODIFY marketing_email BOOLEAN DEFAULT false; #Modify marketing_email to false

ALTER TABLE customers MODIFY post_code VARCHAR(10) NOT NULL; #Modify post_code to NOT NULL

ALTER TABLE customers MODIFY subscribe BOOLEAN DEFAULT false NOT NULL; #Modify subscribe to NOT NULL
#DROP DATABASE qa_restaurant; #delete database