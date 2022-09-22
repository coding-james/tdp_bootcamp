CREATE DATABASE qa_restaurant;
USE qa_restaurant;

CREATE TABLE customers(
cust_id INT UNIQUE NOT NULL AUTO_INCREMENT,
cust_name VARCHAR(100) NOT NULL,
phone_number VARCHAR(11) UNIQUE NOT NULL,
address_1 VARCHAR(200) NOT NULL,
address_2 VARCHAR(200),
town_city VARCHAR(100),
post_code VARCHAR(10) NOT NULL,
delivery_info VARCHAR(300),
subscribe BOOLEAN DEFAULT false NOT NULL,
marketing_email BOOLEAN DEFAULT false,
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

#ALTER TABLE customers MODIFY marketing_email BOOLEAN DEFAULT false; #Modify marketing_email to false
#ALTER TABLE customers MODIFY post_code VARCHAR(10) NOT NULL; #Modify post_code to NOT NULL
#ALTER TABLE customers MODIFY subscribe BOOLEAN DEFAULT false NOT NULL; #Modify subscribe to NOT NULL
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
#DELETE FROM customers WHERE cust_id=4; #Remove Nelson
#DELETE FROM menu_items WHERE menu_item_id=3; #Remove Vegan Lobster

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
FOREIGN KEY(cust_id) REFERENCES customers(cust_id) ON DELETE CASCADE);

DESCRIBE orders;

#Create Order Items Table
CREATE TABLE orders_items(
oi_id INT UNIQUE NOT NULL AUTO_INCREMENT,
order_id INT NOT NULL,
menu_item_id INT NOT NULL,
quantity INT,
PRIMARY KEY(oi_id),
FOREIGN KEY(order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
FOREIGN KEY(menu_item_id) REFERENCES menu_items(menu_item_id) ON DELETE CASCADE);

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
SELECT * FROM orders; #show orders, all columns
SELECT * FROM orders_items; #show orders_items, all columns

#DROP TABLE orders_items; #Used to delete tables and add in ON DELETE Cascade
#DROP TABLE orders; #Used to delete tables and add in ON DELETE Cascade
#DELETE FROM customers WHERE cust_id=2; #Delete customer 'Liz', deletion should cascade

SELECT * FROM orders_items WHERE order_id=3; #filters to show just order 3
# Operators
# = eqaul to
# > greater than (exclusive)
# < less than (exclusive)
# != not equal to
# >= greater than or equal to (inclusive)
# <= less than or equal to (inclusive)
SELECT * FROM orders WHERE total_price>7.50;
SELECT * FROM orders WHERE total_price!=7.50;

#Search for a range
SELECT * FROM orders WHERE total_price>1.00 AND total_price<20.00; #exclusive range
SELECT * FROM orders WHERE total_price BETWEEN 1.00 AND 20.00; #Inclusive range like using >= and <=

#Search for patterns in text data
SELECT * FROM menu_items WHERE item_name LIKE "%r"; #where text ends with a s
SELECT * FROM menu_items WHERE item_name LIKE "to%"; #where text begin with a to
SELECT * FROM customers WHERE post_code LIKE "%SW%"; #where item has SW within it
SELECT * FROM customers WHERE cust_name LIKE "p_%"; #where begins with a D and at least two characters long

SELECT DISTINCT order_id from orders_items; #Selects the First Instance in a specific column

#Sorting/ordering data - works with Text, Numbers and Dates
SELECT * FROM menu_items ORDER BY item_name; #defaults to Acending Order, you can include ASC to specify
SELECT * FROM menu_items ORDER BY item_name DESC; #sorted in Descending Order

#Limit Order, Top x records
SELECT * FROM menu_items LIMIT 2; #First two records
SELECT * FROM menu_items ORDER BY price DESC LIMIT 2; #Most expensive two items
SELECT * FROM menu_items ORDER BY item_name ASC LIMIT 2; #first two items alphabetically
SELECT * FROM menu_items ORDER BY item_name DESC LIMIT 2; #last two items alphabetically

#Aggregate Functions - Analyses of data to create a single value (averages, totals, etc)
#AVG = Average
#SUM = Sum / Total
#MIN = Minimum
#MAX = Maximim
#COUNT = Count

SELECT AVG(price) FROM menu_items; #Average price of items
SELECT MIN(price) FROM menu_items; #lowest price
SELECT MAX(price) FROM menu_items; #highest price
SELECT SUM(price) FROM menu_items; #total price
SELECT COUNT(price) FROM menu_items; #counts number of instances
SELECT SUM(total_price) FROM orders; #total price of all orders
#SELECT SUM(price) FROM menu_items WHERE menu_item_id=2; #returns the price of a specific item

#Nested Query - A Query in a query
SELECT cust_id FROM orders WHERE order_id=3; #return customer id for order 3
SELECT * FROM customers WHERE customer_id=5; #return customer id 5 return their details

#To nest these would be
SELECT * FROM customers WHERE cust_id=(SELECT cust_id FROM orders WHERE order_id=3); #Show customer details for order_id 3
SELECT * FROM menu_items WHERE menu_item_id=(SELECT menu_item_id FROM orders_items WHERE oi_id=3); #Show menu_items for order items id 3

#Joins - Join multiple tables together
#INNER JOIN - default joing used by SQL - combines tables together based on data present in both tables
SELECT * FROM customers JOIN orders ON customers.cust_id=orders.cust_id; #Joins customers and their orders (all columns), only returning those with an order
SELECT customers.cust_name, customers.phone_number, orders.order_id FROM customers JOIN orders ON customers.cust_id=orders.cust_id;
SELECT c.cust_name, c.phone_number,o.order_id FROM customers c JOIN orders o ON c.cust_id=o.cust_id; #as above but told it c = customer and o = order

#Outer Joins - two types, Left Outer Join and Right Outer Join
#Left OUTER JOIN
SELECT * FROM customers c LEFT OUTER JOIN orders o ON c.cust_id=o.cust_id; #customers table is looking for records to match in the order table (displayed on the right of it), includes those without an order
#Right OUTER JOIN
SELECT * FROM customers c RIGHT OUTER JOIN orders o ON c.cust_id=o.cust_id; #only returns those with an order

SELECT * FROM customers c JOIN orders o ON c.cust_id=o.cust_id JOIN orders_items oi ON o.order_id=oi.order_id JOIN menu_items m ON oi.menu_item_id=m.menu_item_id;
SELECT c.cust_name, o.order_id, m.item_name, m.price FROM customers c JOIN orders o ON c.cust_id=o.cust_id JOIN orders_items oi ON o.order_id=oi.order_id JOIN menu_items m ON oi.menu_item_id=m.menu_item_id;