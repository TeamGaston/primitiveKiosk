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
app.get( "/", (req, res) => {
    res.render("main_temp");
});

=======
>>>>>>> 4ea9b393dbbeed8851c24dc1276d743200d45f4a
app.get( "/inputPoint", (req, res) => {
    
});

app.get( "/buying", (req, res) => {
    
} );

app.get( "/showPayment", (req, res) => {
    
} );

app.get( "/printTicket", (req, res) => {
    res.render( "ticketPrintPopup( youjung )" );
} );