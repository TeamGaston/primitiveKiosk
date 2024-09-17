import express from "express";
import mysql from "mysql";
import path from "path";

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "view");

app.listen(3000, () => {
    console.log("3000 Port is ready");
});

/// ===페이지 이동=== ///

// data = { content: "", sideBar: "", popup: "", bottomBar: "" }

// 화면을 터치해주세요
app.get("/", (req, res) => {
    res.render("touch_page");
});

// home (현장예매, 예매티켓조회)
app.get("/home", (req, res) => {
    res.render("layout", { content: "content_home", sideBar: "", popup: "", bottomBar: "bottomBarFrame" });
});

// 영화별/시간대별 선택
app.get("/movie_selection", (req, res) => {
    res.render("layout", { content: "content_movie_selection", sideBar: "sideBarFrame", popup: "", bottomBar: "bottomBarFrame" });
});

// 상영시간선택
app.get("/select_movie_time_popup", (req, res) => {
    res.render("select_movie_time_popup");
});

// 관람 인원 설정
app.get("/select_headcount", (req, res) => {
    res.render("select_headcount_popup"); // 임시
});

// 좌석선택
app.get("/select_seat", (req, res) => {
    res.render("layout", { content: "content_seat_selection", sideBar: "sideBarFrame", popup: "", bottomBar: "bottomBarFrame" });
});

// 결제창
app.get("/payment", (req, res) => {
    res.render("layout", { content: "content_payment", sideBar: "sideBarFrame", popup: "", bottomBar: "bottomBarFrame" });
});

// ## 포인트 사용 ##

// 회원번호 입력
app.get("/user_verification", (req, res) => {
    res.render("user_verification_popup");
});

// 사용 포인트 입력
app.get("/point_confirmation", (req, res) => {
    res.render("point_confirmation_popup");
});

// ## 카드 결제 ## 
app.get("/earn_point", (req, res) => {
    res.render("payment_point_selection_popup"); 
});

// 포인트 적립을 위한 번호 넣기
app.get("/inputPoint", (req, res) => {
    res.render("payment_point_accumulation_popup"); 
});

// === 결제 공통 ===

 // 카드 입력 대기 [setTimeout]
app.get("/buying", (req, res) => {
    res.render("payment_card_input_popup");
});

// 결제가 완료되었습니다 [setTimeout]
app.get("/show_payment", (req, res) => { 
    res.render("payment_summary_popup");
});

// 티켓 출력 
app.get("/printTicket", (req, res) => {
    res.render("ticket_print_popup"); 
});

// 결제완료 [setTimeout]
app.get("/complete", (req, res) => {
    res.render("complete");
});

// test
app.get("/test", (req, res) => {
    res.render("layout", { content: "content_payment", sideBar: "sideBarFrame", popup: "", bottomBar: "bottomBarFrame" });
});