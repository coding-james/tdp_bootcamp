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
UPDATE customers SET cust_name="Charles", email="king@royalfamily.uk", delivery_info="" WHERE cust_id=1;
UPDATE customers SET cust_name="Liz" WHERE cust_id=2;
UPDATE menu_items SET item_name="Hot Chilli", item_desc="Spicy plant-based chilli served with Sweet Potato and Sour Cream" Where menu_item_id=2;

#Delete Records
DELETE FROM customers WHERE cust_id=4;
DELETE FROM menu_items WHERE menu_item_id=3;

#Add additional records
INSERT INTO menu_items(item_name, item_desc, allergens, price, calories, availability) VALUES("Not Mushroom for this Burger","Mushroom Burger with triple cooked chips","Gluten",9.5,632,True);
INSERT INTO customers(cust_name, email, phone_number, address_1, address_2, town_city, post_code, delivery_info, subscribe, marketing_email, marketing_text, marketing_post) VALUES("William", "PrinceOfWales@royalfamily.uk", "07000000006", "Buckingham Palace","","London","SW1A 1AA","",0,0,0,0);

SHOW TABLES; #Show Tables
DESCRIBE customers; #Show Columns, Datatypes, Constraints for tables
SELECT * FROM customers; #Show customer records
SELECT * FROM menu_items; #Show menu items records