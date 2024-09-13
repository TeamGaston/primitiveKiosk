import express from "express";
import mysql from "mysql";
import path from "path";

const app = express();

app.use( express.static("public") );

app.set("view engine", "ejs");
app.set("views", "view");

app.listen( 3001, () => {
    console.log("3001 Port is ready");
});
app.get("/",()=>{
    console.log("root accept");
});

app.get( "/Movie-Info_Popup", (req, res) => {
    res.render( "Movie-Info_Popup" );
} );

app.get( "/selectPeople", (req, res) => {
    console.log(req.query);
    console.log(typeof req.query);
    const movieData =  req.query ;
    res.render("Select_People_Popup_donghyun", {movieData: movieData});
} );

app.get("seatSelection",(req,res)=>{
    res.render("seatSelection_donghyun");
});


// app.get( "/printTicket", (req, res) => {
//     res.render( "ticketPrintPopup( youjung )" );
// } );



