DROP DATABASE IF EXISTS budget_db;
CREATE DATABASE budget_db;
-- Makes it so all of the following code will affect budget_db --
USE budget_db;

CREATE TABLE categories (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE transactions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  category_id INT,
  description VARCHAR(50) NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  date DATE NOT NULL,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO categories (name) VALUES
('Bills'),
('Entertainment'),
('Food'),
('Misc');