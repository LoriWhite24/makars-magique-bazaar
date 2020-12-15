const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'shopping_webapp',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});


app.listen(3000, () => console.log('Express server is running at port no : 3000'));

//Get all products
app.get('/products', (req, res) => {
    mysqlConnection.query('SELECT * FROM product', (err, rows) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Get product by ID
app.get('/products/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM product WHERE product_id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});