CREATE DATABASE burgers_db;
USE burgers_db;

-- USE uu39j94xtihvz999;

CREATE TABLE burgers (
	id INT NOT NULL IDENTITY,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (ID)
);