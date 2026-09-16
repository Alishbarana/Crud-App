-- Run this in phpMyAdmin (XAMPP) or via the mysql CLI to set up the database

CREATE DATABASE IF NOT EXISTS crud_app_db;

USE crud_app_db;

CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  description VARCHAR(500),
  price DECIMAL(10, 2) NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optional sample data
INSERT INTO products (name, description, price) VALUES
('Sample Product', 'This is a demo row so you can see GET working right away', 9.99);
