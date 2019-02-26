DROP DATABASE abc12;
CREATE DATABASE IF NOT EXISTS abc12;
USE abc12;
CREATE TABLE abc12users(
	UserName VARCHAR(100) NOT NULL UNIQUE,
	PasswordHash VARCHAR(400),
	Phone VARCHAR(20)
);
USE abc12;
INSERT INTO abc12users(UserName, PasswordHash, Phone)
VALUES('hoang12','amnehfudhierhei2222', '024-55547789');
SELECT * FROM abc12users WHERE UserName=