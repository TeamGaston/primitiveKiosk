import express from "express";
import mysql from "mysql";
import path from "path";

const app = express();

app.use( express.static("public") );

app.set("view engine", "ejs");
app.set("views", "view");

app.listen( 3000, () => {
    console.log("3000 Port is ready");
});

app.get( "/earnPoint", (req, res) => {
    //res.sendFile("html/");
} );

app.get( "/inputPoint", (req, res) => {
    
} );

app.get( "/buying", (req, res) => {
    
} );

app.get( "/showPayment", (req, res) => {
    
} );

app.get( "/printTicket", (req, res) => {
    res.render( "ticketPrintPopup( youjung )" );
} );