# 1.	List all actors.
SELECT * FROM actor;

# 2.	Find the surname of the actor with the forename 'John'.
SELECT * FROM actor WHERE first_name="John";

# 3.	Find all actors with surname 'Neeson'.
SELECT * FROM actor WHERE last_name="Neeson";

# 4.	Find all actors with ID numbers divisible by 10.
SELECT * FROM actor WHERE actor_id LIKE "%0";

# 5.	What is the description of the movie with an ID of 100?
SELECT * FROM film WHERE film_id=100;

# 6.	Find every R-rated movie.
SELECT * FROM film WHERE rating="R";

# 7.	Find every non-R-rated movie.
SELECT * FROM film WHERE rating!="R";

# 8.	Find the ten shortest movies.
SELECT * FROM film ORDER BY length ASC LIMIT 10;

# 9.	Find the movies with the longest runtime, without using LIMIT.
SELECT * FROM film  ORDER BY length DESC;
SELECT * FROM film WHERE length=(SELECT MAX(length) FROM film);

# 10.	Find all movies that have deleted scenes.
SELECT * FROM film WHERE special_features LIKE "%Deleted Scenes%";

# 11.	Using HAVING, reverse-alphabetically list the last names that are not repeated.
SELECT last_name FROM actor GROUP BY last_name HAVING COUNT(last_name)=1;

# 12.	Using HAVING, list the last names that appear more than once, from highest to lowest frequency.
SELECT last_name, COUNT(last_name) AS ln_count  FROM actor GROUP BY last_name HAVING COUNT(last_name)>1 ORDER BY ln_count DESC;

# 13.	Which actor has appeared in the most films?
SELECT a.first_name, a.last_name, fa.actor_id, COUNT(fa.actor_id) AS actor_films FROM film_actor fa JOIN actor a ON fa.actor_id=a.actor_id ORDER BY actor_films DESC LIMIT 1;
#PENELOPE GUINESS - 5,462 films

# 14.	When is 'Academy Dinosaur' due?
SELECT release_year FROM film WHERE title="Academy Dinosaur";
#2006

# 15.	What is the average runtime of all films?
SELECT AVG(length) AS avg_runtime FROM film;
# 115.2720

# 16.	List the average runtime for every film category.
SELECT category, AVG(length) AS avg_runtime FROM film_list GROUP BY category ORDER BY avg_runtime DESC;

# 17.	List all movies featuring a robot.
SELECT * FROM film WHERE description LIKE "%robot%";

# 18.	How many movies were released in 2010?
SELECT COUNT(release_year) FROM film WHERE release_year=2010;
SELECT * FROM film ORDER BY release_year DESC;
# None....all 1000 films say released in 2006!

# 19.	Find the titles of all the horror movies.
SELECT * FROM film_list WHERE category="Horror";

# 20.	List the full name of the staff member with the ID of 2.
SELECT * FROM staff_list WHERE id=2;

# 21.	List all the movies that Fred Costner has appeared in.
SELECT * FROM film_list WHERE actors LIKE "%Fred Costner%";

# 22.	How many distinct countries are there?
SELECT COUNT(DISTINCT country) FROM country;
# 109

# 23.	List the name of every language in reverse-alphabetical order.
SHOW TABLES;
SELECT * FROM language ORDER BY language DESC;

# 24.	List the full names of every actor whose surname ends with '-son' in alphabetical order by their forename.
SELECT CONCAT(first_name, " ", last_name) AS full_name FROM actor WHERE last_name LIKE "%son" ORDER BY first_name;

# 25.	Which category contains the most films?
SELECT category, COUNT(category) AS films FROM film_list GROUP BY category ORDER BY films DESC;