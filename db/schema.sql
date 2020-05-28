CREATE DATABASE burgers_db;
USE burgers_db;

-- USE uu39j94xtihvz999;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
	-- burger_name VARCHAR(255) NOT NULL,
    burger_name VARCHAR(100) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);