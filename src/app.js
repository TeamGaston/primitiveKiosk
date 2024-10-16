import { log } from "console";
import express from "express";
import mysql from "mysql";
import path from "path";
/* DONGHYUN*/

import dbconfig from '../config/dbconfig.js';
const db = mysql.createConnection( dbconfig );
/*let dbData = null;
async function fetchDataFromDatabase() {
            try {
                const [data1, data2] = await Promise.all([
                    new Promise((resolve, reject) => {
                        connection.query('select * from movies where 1', (error, results) => {
                            if (error) reject(error);
                            resolve(results);
                        });
                    }),
                    new Promise((resolve, reject) => {
                        connection.query('select B.movie_id, B.duration, B.title,  A.start_time, B.img_path from showtimes A join movies B on A.movie_id = B.movie_id', (error, results) => {
                            if (error) reject(error);
                            resolve(results);
                        });
                    })
                ]);
        
                // 결과를 객체로 묶기
                const result = {
                    movie_selection_data: data1,
                    movie_time_selection_data: data2,
                };
                return result;
        
            } catch (error) {
                console.error('Error fetching data:', error);
            }
}

fetchDataFromDatabase().then(result => {
    dbData = result; // 데이터 출력
    console.log(dbData);
});*/

/* END DONGHYUN */
const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "view");

app.listen(45120, () => {
    console.log("http://kkms4001.iptime.org:45120    45120 Port is ready");
});


/*******************************************************************/
//DONGHYUN DB ROUTING

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

app.post("/movie_selection1", (req, res) => {
    db.query('SELECT * FROM movies WHERE 1', (err, dbData) => {
        if (err) {
            console.error(err); // 쿼리 오류 처리
            res.status(500).send('Database query error');
        } else {
            res.json(dbData); // 정상적으로 dbData를 클라이언트에 반환
        }
    });
});

app.post("/movie_selection2", (req, res) => {
    const sql = 'SELECT B.movie_id, B.duration, B.title, A.start_time, B.img_path FROM showtimes A JOIN movies B ON A.movie_id = B.movie_id'
    db.query(sql, (err, dbData) => {
        if (err) {
            console.error(err); // 쿼리 오류 처리
            res.status(500).send('Database query error');
        } else {

            res.json(dbData); // 정상적으로 dbData를 클라이언트에 반환
        }
    });
});

app.post("/checkUser",(req,res)=>{
	console.log(req.body.checkInformation)
    const checkInformation = req.body.checkInformation;
    const sql = `select * from reservations where reservation_num = "${checkInformation}"`;
    
    db.query(sql, (err, dbData) => {
        if (err) {
            console.error(err); // 쿼리 오류 처리
            res.status(500).send('Database query error');
        } else {
            if (dbData && dbData.length > 0) { // 데이터가 있으면
                console.log("Dbdata: ", dbData);
                console.log("데이터 있다.");
                // req.body.checkInformation
		console.log( `/ticket_info?num=${checkInformation}` )
                //res.redirect(`/ticket_info?num=${checkInformation}`)
                res.json()
            } else { // 데이터가 없으면
                console.log("Dbdata: ", dbData);
                console.log("데이터 없다.");
                res.send('데이터 없다'); // 데이터가 없을 때 리다이렉트할 페이지
            }
        }
    });
});

//DONGHYUN DB ROUTING
/*******************************************************************/



// data 저장
let queryData = {};
let movieQueryData = {} // 오직 주환이만 씀 // Dont use this Object only can use Juhwan

/// ===페이지 이동=== ///

// EX) data = { content: "", sideBar: "", popup: "", bottomBar: "" }

// [touch_page] 화면을 터치해주세요  
app.get("/", (req, res) => {
    res.render("touch_page");
});

// [admin_password] 관리자 > 비밀번호 화면
app.get("/admin_password", (req, res) => {
    res.render("layout", { content: "content_admin_password", sideBar: "", popup: "", bottomBar: "bottomBarFrame", queryData: queryData });
});


// [home] 1. 현장예매 / 2. 예매티켓조회
app.get("/home", (req, res) => {
    res.render("layout", { content: "content_home", sideBar: "", popup: "", bottomBar: "bottomBarFrame", queryData: queryData });
});

// === 1. 현장예매 ===
// [content_movie_selection] 영화별/시간대별 선택
app.get("/movie_selection", (req, res) => {
    res.render("layout", { content: "content_movie_selection", sideBar: "sideBarFrame", popup: "", bottomBar: "bottomBarFrame", queryData: queryData });
});

// [content_select_movie_time] 상영시간선택
app.get("/select_movie_time", (req, res) => {
    const queryData = req.query;
    /* DONGHYUN */
	console.log("test");
	console.log(queryData);
    /* END DONGHYUN*/
    res.render("layout", { content: "content_select_movie_time", sideBar: "sideBarFrame", popup: "", bottomBar: "bottomBarFrame", queryData: queryData });
});


// === 2. 예매티켓조회 ===
// [content_ticket_info] 티켓정보
app.get("/ticket_info", (req, res) => {
    const queryData = req.query;
    res.render("layout", { content: "content_ticket_info", sideBar: "", popup: "", bottomBar: "bottomBarFrame", queryData: queryData });
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
    const queryData = req.query;
    res.render("layout", { content: "", sideBar: "sideBarFrame", popup: "popup_select_headcount", bottomBar: "bottomBarFrame", queryData: queryData });
});

// [content_seat_selection] 좌석선택
app.get("/select_seat", (req, res) => {
    const queryData = req.query;
    res.render("layout", { content: "content_seat_selection", sideBar: "sideBarFrame", popup: "", bottomBar: "bottomBarFrame", queryData: queryData });
});

// [content_payment] 결제창
app.get("/payment", (req, res) => {
    const queryData = req.query;
    movieQueryData = {...queryData};
    res.render("layout", { content: "content_payment", sideBar: "sideBarFrame", popup: "", bottomBar: "bottomBarFrame", queryData: queryData});
});

// ## 포인트 사용 ##

// [popup_user_verification] 회원번호 입력
app.get("/user_verification", (req, res) => {
    const queryData = req.query;
    res.render("layout", { content: "content_payment", sideBar: "sideBarFrame", popup: "popup_user_verification", bottomBar: "bottomBarFrame", queryData: queryData});
});

// [popup_point_confirmation] 사용 포인트 입력
app.get("/point_confirmation", (req, res) => {
    const queryData = req.query;
    res.render("layout", { content: "content_payment", sideBar: "sideBarFrame", popup: "popup_point_confirmation", bottomBar: "bottomBarFrame", queryData: queryData});
});

// ## 카드 결제 ## 
// [popup_payment_point_selection] 포인트를 적랍하시겠습니까?
app.get("/earn_point", (req, res) => {
    const queryData = req.query;
    //res.render("layout", { content: "content_payment", sideBar: "sideBarFrame", popup: "popup_payment_point_selection", bottomBar: "bottomBarFrame", queryData: queryData });
    res.render("layout", { content: "content_payment", sideBar: "sideBarFrame", popup: "popup_payment_point_selection", bottomBar: "bottomBarFrame", queryData: queryData });
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
