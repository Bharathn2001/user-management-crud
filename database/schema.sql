CREATE DATABASE UserDetailsDB;
USE UserDetailsDB;
CREATE TABLE Users (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100),
    Address VARCHAR(255),
    State VARCHAR(100),
    District VARCHAR(100),
    DateOfBirth DATE,
    Language VARCHAR(50)
);
SELECT * FROM Users;




