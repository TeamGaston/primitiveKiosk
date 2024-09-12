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
    //res.render(""); // 포인트를 적립하시겠습니까?
} );

app.get( "/inputPoint", (req, res) => {
    res.render("mvpoint02"); // 포인트 적립을 위한 번호 넣기
} );

app.get( "/buying", (req, res) => {
    res.render( "paymentPopup_donghyun" ); // 카드 입력 대기
} );

app.get( "/showPayment", (req, res) => {
    
} );

app.get( "/printTicket", (req, res) => {
    res.render( "ticketPrintPopup( youjung )" ); // 티켓 출력 하시겠습니까?
} );

app.get( "/complete", (req, res) => {
    res.render( "mvpaycompleted03" );
} );
