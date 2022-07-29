# MERN-CRUD
A simple MERN CRUD to improve ReactJS and Node.
<div align="center">
  <img src="https://user-images.githubusercontent.com/83086622/181826394-9218b57e-910a-4656-94dc-2862130c0807.png">
</div>

## How to test
1. Preparing the database
```bash
# Create a MySQL database with Docker
docker run --name employeeSystem -e MYSQL_ROOT_PASSWORD=password -p 30306:3306 -d mysql

# Enter the MySQL container to create the table that will be used. The previous password will be asked.
sudo docker exec -it employeeSystem bash
mysql -u root -p

# Create the database and the table
CREATE DATABASE employeeSystem;
USE employeeSystem;
CREATE TABLE `employeeSystem`.`employees` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `age` INT NOT NULL,
  `position` TEXT NOT NULL,
  `wage` INT NOT NULL,
  `country` TEXT NOT NULL,
  PRIMARY KEY (`id`));
```
2. Cloning the project
```bash
# Clone this repository
git clone https://github.com/KelvinNovais/MERN-CRUD
cd MERN-CRUD

# Open a terminal on the server folder and run
yarn
node index.js

# Open a terminal on the client folder and run
yarn
yarn start
```
Note: you must have Docker, NodeJS and Yarn installed on your computer

## Tutorials followed:

https://www.youtube.com/watch?v=re3OIOr9dJI4

https://www.youtube.com/watch?v=AohARsUlwQk
