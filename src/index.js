import express from "express";
import mysql from "mysql";

const app = express();

app.use( express.static("public") );

// app.set("view engine", "ejs");
app.set("views", "view");

app.listen( 3000, () => {
    console.log("3000 Port is ready");
});

app.get( "/", (req, res) => {

} );

app.get( "/", (req, res) => {
    
} );

app.get( "/", (req, res) => {
    
} );

app.get( "/", (req, res) => {
    
} );

app.get( "/", (req, res) => {
    
} );