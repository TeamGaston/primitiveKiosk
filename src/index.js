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

<<<<<<< HEAD
=======

>>>>>>> beebdb680910a16176a1d4846b3d0da179e47b83
app.get( "/", (req, res) => {
    res.render("kiosk_main_home");
});

app.get( "/home", (req, res) => {
    res.render("kiosk_ticket_purchase");
});

app.get( "/inputPoint", (req, res) => {
    
});

app.get( "/buying", (req, res) => {
    
} );

app.get( "/showPayment", (req, res) => {
    
} );

app.get( "/printTicket", (req, res) => {
    res.render( "ticketPrintPopup( youjung )" );
} );