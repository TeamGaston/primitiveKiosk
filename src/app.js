import { log } from "console";
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

// EX) data = { content: "", sideBar: "", popup: "", bottomBar: "" }

// [touch_page] 화면을 터치해주세요  
app.get("/", (req, res) => {
    res.render("touch_page");
});

// [admin_password] 관리자 > 비밀번호 화면
app.get("/admin_password", (req, res) => {
    res.render("layout", { content: "content_admin_password", sideBar: "", popup: "", bottomBar: "bottomBarFrame" });
});


// [home] 1. 현장예매 / 2. 예매티켓조회
app.get("/home", (req, res) => {
    res.render("layout", { content: "content_home", sideBar: "", popup: "", bottomBar: "bottomBarFrame" });
});

// === 1. 현장예매 ===
// [content_movie_selection] 영화별/시간대별 선택
app.get("/movie_selection", (req, res) => {
    res.render("layout", { content: "content_movie_selection", sideBar: "sideBarFrame", popup: "", bottomBar: "bottomBarFrame" });
});

// [content_select_movie_time] 상영시간선택
app.get("/select_movie_time", (req, res) => {
    res.render("layout", { content: "content_select_movie_time", sideBar: "sideBarFrame", popup: "", bottomBar: "bottomBarFrame" });
});


// === 2. 예매티켓조회 ===
// [content_ticket_info] 티켓정보
app.get("/ticket_info", (req, res) => {
    res.render("layout", { content: "content_ticket_info", sideBar: "", popup: "", bottomBar: "bottomBarFrame" });
});

// ===================
// app.get("/popup/:popupId", (req, res) => {
//     const popupId = req.params.popupId; // URL에서 경로 매개변수 'popupId'를 가져옵니다.
//     console.log(popupId);
    
//     res.render( "popup_layout", { popupContent: popupId } );
// });
// ===================

// [popup_select_headcount] 관람 인원 설정
app.get("/select_headcount", (req, res) => {
    res.render("layout", { content: "", sideBar: "sideBarFrame", popup: "popup_select_headcount", bottomBar: "bottomBarFrame" });
});

// [content_seat_selection] 좌석선택
app.get("/select_seat", (req, res) => {
    res.render("layout", { content: "content_seat_selection", sideBar: "sideBarFrame", popup: "", bottomBar: "bottomBarFrame" });
});

// [content_payment] 결제창
app.get("/payment", (req, res) => {
    res.render("layout", { content: "content_payment", sideBar: "sideBarFrame", popup: "", bottomBar: "bottomBarFrame" });
});

// ## 포인트 사용 ##

// [popup_user_verification] 회원번호 입력
app.get("/user_verification", (req, res) => {
    res.render("layout", { content: "content_payment", sideBar: "sideBarFrame", popup: "popup_user_verification", bottomBar: "bottomBarFrame" });
});

// [popup_point_confirmation] 사용 포인트 입력
app.get("/point_confirmation", (req, res) => {
    res.render("layout", { content: "content_payment", sideBar: "sideBarFrame", popup: "popup_point_confirmation", bottomBar: "bottomBarFrame" });
});

// ## 카드 결제 ## 
// [popup_payment_point_selection] 포인트를 적랍하시겠습니까?
app.get("/earn_point", (req, res) => {
    res.render("layout", { content: "content_payment", sideBar: "sideBarFrame", popup: "popup_payment_point_selection", bottomBar: "bottomBarFrame" });
});

// [popup_payment_point_accumulation] 포인트 적립 번호 입력
app.get("/input_point", (req, res) => {
    res.render("layout", { content: "content_payment", sideBar: "sideBarFrame", popup: "popup_payment_point_accumulation", bottomBar: "bottomBarFrame" });
});

// === 결제 공통 ===

 // [popup_payment_card_input] 카드 입력 대기 [setTimeout]
app.get("/buying", (req, res) => {
    res.render("layout", { content: "", sideBar: "", popup: "popup_payment_card_input", bottomBar: "bottomBarFrame" });
});

// [popup_payment_summary] 결제가 완료되었습니다 [setTimeout]
app.get("/show_payment", (req, res) => { 
    res.render("layout", { content: "", sideBar: "", popup: "popup_payment_summary", bottomBar: "bottomBarFrame" });
});

// [popup_ticket_print] 티켓 출력 
app.get("/printTicket", (req, res) => {
    res.render("layout", { content: "", sideBar: "", popup: "popup_ticket_print", bottomBar: "bottomBarFrame" });
});

// [popup_complete] 결제완료 [setTimeout]
app.get("/complete", (req, res) => {
    res.render("layout", { content: "", sideBar: "", popup: "popup_complete", bottomBar: "bottomBarFrame" });
});
