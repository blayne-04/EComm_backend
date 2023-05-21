# E-Comm Backend
## Description
This application contains the backend functionality for an ecommerce website, including the ability to view all, view, delete and update tags, products and categories
## Getting Started
### Dependencies 
* Node JS
* understand .env files
* mysql
* IDE
* Insomnia or similar HTTP/API Client
### Execution
* Run schema.sql in mysql
* Set Up .env file with the following
```
DB_NAME="ecommerce_db"
DB_USER="{your mysql username}"
DB_PASSWORD="{your mysql password}"
```
* Run the following commands in the CLI
```
npm i
node seeds/index.js
node server.js
```
* The following json can be used in the corresponding insomnia routes

* /api/categories POST
* /api/categories/:id PUT
* /api/tags POST
* /api/tags/:id PUT
```JSON
  {
    "name": "ExampleName"
  }
```
* /api/products POST
* /api/products/:id PUT
```JSON
  {
    "product_name": "Basketball",
    "price": 200.00,
    "stock": 3,
    "tagIds": [1, 2, 3, 4]
  }
```

## License
This project is licensed under the MIT License - see LICENSE.md file for additional details

## Acknowledgements 
[Witt Code's Sequelize Tutorial Series](https://www.youtube.com/playlist?list=PLkqiWyX-_Lov8qmMOVn4SEQwr9yOjNn3f)

## Contributors
Blayne Fuller

## Help 
If you have any questions about the usage of this application feel free to contact me at befuller2004@gmail.com

## Tutorial Video
[Embedded Tutorial Video]()