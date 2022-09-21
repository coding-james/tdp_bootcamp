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
#ALTER TABLE customers DROP email; #delete out email column

ALTER TABLE customers MODIFY marketing_email BOOLEAN DEFAULT false; #Modify marketing_email to false

ALTER TABLE customers MODIFY post_code VARCHAR(10) NOT NULL; #Modify post_code to NOT NULL

ALTER TABLE customers MODIFY subscribe BOOLEAN DEFAULT false NOT NULL; #Modify subscribe to NOT NULL
#DROP DATABASE qa_restaurant; #delete database

#Adding Data
USE qa_restaurant; #identify which database

#Add Customers
INSERT INTO customers(cust_name, email, phone_number, address_1, address_2, town_city, post_code, delivery_info, subscribe, marketing_email, marketing_text, marketing_post) VALUES("Elizabeth", "queen@royalfamily.uk", "07000000001", "Buckingham Palace","","London","SW1A 1AA","Watch out for the corgis",TRUE,TRUE,FALSE,TRUE);
INSERT INTO customers(cust_name, email, phone_number, address_1, address_2, town_city, post_code, delivery_info, subscribe, marketing_email, marketing_text, marketing_post) VALUES("Boris", "pm@gov.uk", "07000000002", "10 Downing Street","","London","SW1A 2AA","",1,0,1,0);
INSERT INTO customers(cust_name, email, phone_number, address_1, address_2, town_city, post_code, delivery_info, subscribe, marketing_email, marketing_text, marketing_post) VALUES("Paddington Bear", "paddington@bear.uk", "07000000003", "Paddington Station","","London","W2 1HQ","",FALSE,FALSE,FALSE,FALSE);
INSERT INTO customers(cust_name, email, phone_number, address_1, address_2, town_city, post_code, delivery_info, subscribe, marketing_email, marketing_text, marketing_post) VALUES("Nelson", "nelson@column.uk", "07000000004", "Nelson's Column","Trafalger Street","London","WC2","",TRUE,TRUE,TRUE,TRUE);
INSERT INTO customers(cust_name, email, phone_number, address_1, address_2, town_city, post_code, delivery_info, subscribe, marketing_email, marketing_text, marketing_post) VALUES("Peter Pan", "peter@pan.uk", "07000000005", "Hyde Park Street","","London","W2 2UH","",0,0,0,0);

#Add Menu Items
INSERT INTO menu_items(item_name, item_desc, allergens, price, calories, availability) VALUES("Jambalaya","Plant-based dish with rice and beans cooked in a single pot","Peanuts",8,324,True);
INSERT INTO menu_items(item_name, item_desc, allergens, price, calories, availability) VALUES("Chilli","Plant-based chilli served with Sweet Potato","",7.5,400,True);
INSERT INTO menu_items(item_name, item_desc, allergens, price, calories, availability) VALUES("Vegan Lobster","Carrots shapped to look like a lobster","",6.50,200,True);
INSERT INTO menu_items(item_name, item_desc, allergens, price, calories, availability) VALUES("Give Peas a Chance","Peas!","",3,100,True);
INSERT INTO menu_items(item_name, item_desc, allergens, price, calories, availability) VALUES("Toast Sandwhich","Slice of toast between two slices of bread, seasoned with salt and pepper","gluten",3.5,450,False);

#Modify Records
UPDATE customers SET cust_name="Charles", email="king@royalfamily.uk", delivery_info="" WHERE cust_id=1; #Change Elizabth to Charles
UPDATE customers SET cust_name="Liz" WHERE cust_id=2; #Change Boris to Liz
UPDATE menu_items SET item_name="Hot Chilli", item_desc="Spicy plant-based chilli served with Sweet Potato and Sour Cream" Where menu_item_id=2; #Update Chili name and description

#Delete Records
DELETE FROM customers WHERE cust_id=4; #Remove Nelson
DELETE FROM menu_items WHERE menu_item_id=3; #Remove Vegan Lobster

#Add additional records
INSERT INTO menu_items(item_name, item_desc, allergens, price, calories, availability) VALUES("Not Mushroom for this Burger","Mushroom Burger with triple cooked chips","Gluten",9.5,632,True);
INSERT INTO customers(cust_name, email, phone_number, address_1, address_2, town_city, post_code, delivery_info, subscribe, marketing_email, marketing_text, marketing_post) VALUES("William", "PrinceOfWales@royalfamily.uk", "07000000006", "Buckingham Palace","","London","SW1A 1AA","",0,0,0,0);

SHOW TABLES; #Show Tables
DESCRIBE customers; #Show Columns, Datatypes, Constraints for tables
SELECT * FROM customers; #Show customer records
SELECT * FROM menu_items; #Show menu items records

#Create Orders Table
CREATE TABLE orders(
order_id INT UNIQUE NOT NULL AUTO_INCREMENT,
cust_id INT NOT NULL,
total_price DECIMAL(6,2),
PRIMARY KEY(order_id),
FOREIGN KEY(cust_id) REFERENCES customers(cust_id));

DESCRIBE orders;

#Create Order Items Table
CREATE TABLE orders_items(
oi_id INT UNIQUE NOT NULL AUTO_INCREMENT,
order_id INT NOT NULL,
menu_item_id INT NOT NULL,
quantity INT,
PRIMARY KEY(oi_id),
FOREIGN KEY(order_id) REFERENCES orders(order_id),
FOREIGN KEY(menu_item_id) REFERENCES menu_items(menu_item_id));

DESCRIBE orders_items; #View table columns, data types and constraints

ALTER TABLE orders ADD order_date DATETIME NOT NULL; #Add in date and time, format "YYYY-MM-DD HH:MM:SS"
DESCRIBE orders; #View table columns, data types and constraints

#Create Orders and Order Items
INSERT INTO orders(cust_id,order_date) VALUES(1,"2022-09-21 15:15"),(3,"2022-09-21 15:30"),(5,"2022-09-21 15:35"),(2,"2022-09-21 16:00"),(6,"2022-09-21 16:15");
SELECT * FROM orders; #show orders

INSERT INTO orders_items(order_id, menu_item_id, quantity) VALUES(1,1,2),(1,4,1),(2,2,1),(3,1,1),(3,6,2),(4,5,2),(5,6,1),(5,1,3),(5,4,1);
SELECT * FROM orders_items; #show orders items

#Add Totals to orders
UPDATE orders SET total_price=19 WHERE order_id=1;
UPDATE orders SET total_price=7.5 WHERE order_id=2;
UPDATE orders SET total_price=27 WHERE order_id=3;
UPDATE orders SET total_price=7 WHERE order_id=4;
UPDATE orders SET total_price=36.5 WHERE order_id=5;
SELECT * FROM orders; #show orders

#Delete an order and its items
DELETE FROM orders_items WHERE oi_id=6; #Delete Liz's order_items
DELETE FROM orders WHERE order_id=4; #Delete Liz's order, Have to delete order_items first

#Add in a new order
INSERT INTO orders(cust_id, order_date) VALUES(2,"2022-09-21 16:20"); #add new order for customer 2 - Liz
INSERT INTO orders_items(order_id, menu_item_id, quantity) VALUES(6,1,2); #add items for Liz's order
UPDATE orders SET total_price=16 WHERE order_id=6;
SELECT * FROM orders; #show orders
SELECT * FROM orders_items; #show orders_items