USE world;

SHOW tables;
SELECT * FROM city;
SELECT * FROM country;
SELECT * FROM countrylanguage;


#Q1 - Using COUNT, get the number of cities in the USA.
SELECT COUNT(id) FROM city WHERE CountryCode="USA";
# 274 cities

#Q2 - Find out the population and life expectancy for people in Argentina
SELECT Population, LifeExpectancy FROM country WHERE name="Argentina";
# Population 3,7032,000
# Life Epectancy 75.1

#Q3 - Using IS NOT NULL, ORDER BY, and LIMIT, which country has the highest life expectancy?
SELECT Name, LifeExpectancy FROM country WHERE LifeExpectancy IS NOT NULL ORDER BY LifeExpectancy DESC LIMIT 1;
# Andorra 83.5 yrs

#Q4 - Using JOIN ... ON, find the capital city of Spain.
SELECT country.Name, city.Name FROM country JOIN city ON country.code=city.CountryCode WHERE city.id=(SELECT Capital FROM country WHERE name="Spain");
# Madrid

#Q5 - Using JOIN ... ON, list all the languages spoken in the Southeast Asia region.
SELECT DISTINCT country.Region, countrylanguage.Language FROM country JOIN countrylanguage ON country.code=countrylanguage.CountryCode WHERE country.Region="Southeast Asia"; 

#Q6 - Using a single query, list 25 cities around the world that start with the letter F.
SELECT * FROM city WHERE name LIKE "F%" LIMIT 25;
#SELECT count(ID) FROM city WHERE name LIKE "F%"; # 78 cities begin with F

#Q7 - Using COUNT and JOIN ... ON, get the number of cities in China.
SELECT COUNT(name) FROM city WHERE CountryCode="CHN";
SELECT count(city.Name) FROM country JOIN city ON country.code=city.CountryCode WHERE city.CountryCode=(SELECT code FROM country WHERE name="CHINA");
# 363 cities in China

#Q8 - Using IS NOT NULL, ORDER BY, and LIMIT, which country has the lowest population? Discard non-zero populations.
SELECT Name, Population FROM country WHERE Population IS NOT NULL ORDER BY Population ASC LIMIT 1;
# Antarctica 0

#Q9 - Using aggregate functions, return the number of countries the database contains.
SELECT COUNT(Code) FROM country;
# 239 Countries

#10 - What are the top ten largest countries by area?
SELECT name, SurfaceArea FROM country ORDER BY SurfaceArea DESC LIMIT 10;
#Russia, Anarctica, Canada, China, USA, Brazil, Australia, India, Argentina and Kazakstan

#11 - List the five largest cities by population in Japan

#12 - List the names and country codes of every country with Elizabeth II as its Head of State. You will need to fix the mistake first! 13.	List the top ten countries with the smallest population-to-area ratio. Discard any countries with a ratio of 0.

#14 - List every unique world language.

#15 - List the names and GNP of the world's top 10 richest countries.

#16 - List the names of, and number of languages spoken by, the top ten most multilingual countries.

#17 - List every country where over 50% of its population can speak German.

#18 - Which country has the worst life expectancy? Discard zero or null values.

#19 - List the top three most common government forms.

#20 - How many countries have gained independence since records began?
