const express = require("express");
const mysql = require("mysql");
const path = require("path")
const app = new express()
app.use(express.static(path.join(__dirname,"public")))
app.get("/books", (req, res) => {
    const connnection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "123456",
        database: "lemonsread"
    })
    const query = req.query
    connnection.connect();
    connnection.query('select * from `books` where `bookName` like ? or `author` like ?',[`%${query.search}%`,`%${query.search}%`], function (error, results, fields) {
        if (error) res.send(error)
        console.log('The solution is: ', results);
        res.send(results)
    });

    connnection.end();
})
app.listen("8080",()=>{
    console.log("express 已启动");
})