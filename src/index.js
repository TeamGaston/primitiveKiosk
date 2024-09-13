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

app.get("/", (req, res) => {
    res.render("kiosk_main_home"); // touch page
});

app.get("/home", (req, res) => {
    res.render("kiosk_ticket_purchase"); // home
});

app.get("/movie_selection", (req, res) => {
    res.render("Movie_Selection"); // movie choice
});

app.get( "/select_movie_time_popup", (req, res) => {
    res.render( "select_movie_time_popup" );
} );

app.get( "/select_headcount_popup", (req, res) => {
    console.log(req.query);
    console.log(typeof req.query);
    const movieData =  req.query ;
    res.render("select_headcount_popup", {movieData: movieData});
} );

app.get( "/select_seat", (req, res) => {
    res.render( "seat_selectionA" );
});

app.get( "/payment", (req, res) => {
    res.render( "Payment_PointsUsage_uk" );
} );

app.get( "/earnPoint", (req, res) => {
    res.render("payment_point_selection_popup"); // 포인트를 적립하시겠습니까?
} );

app.get( "/inputPoint", (req, res) => {
    res.render("payment_Accumulation_popup"); // 포인트 적립을 위한 번호 넣기
} );

app.get( "/buying", (req, res) => {
    res.render( "payment_card_input_guide_popup" ); // 카드 입력 대기
} );

app.get( "/showPayment", (req, res) => {
    res.render("payment_summary_popup");
} );

app.get( "/printTicket", (req, res) => {
    res.render( "ticket_print_popup" ); // 티켓 출력 하시겠습니까?
} );

app.get( "/complete", (req, res) => {
    res.render( "payment_complete" );
} );
