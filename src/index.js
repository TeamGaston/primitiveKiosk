import express from "express";
import mysql from "mysql";

const app = express();

app.use( express.static("public") );

app.set("view engine", "ejs");
app.set("views", "view");


app.listen( 3000, () => {
    console.log("3000 Port is ready");
});

import touch from "./components/touch.js";
import home from "./components/home.js";
import choice from "./components/choice.js";

// data = { content: "파일", popup: "popup/파일" , bottomBar: "denominator/bottomBarFrame" };
const main = (() => {
    touch( app );
    home( app );
    choice( app );
})();

app.get("/test", (req, res) => {
    // data = { content: "파일", popup: "popup/파일" , bottomBar: "denominator/bottomBarFrame" }

    res.render( "layout", { content: "touchPage", popup: "popup/earnPointPopup" , bottomBar: "denominator/bottomBarFrame" } )
});