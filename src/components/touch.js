const touch = ( app ) => {
    app.get("/", (req, res) => {
        res.render( "layout", { content: "touchPage" } );
    });
}

export default touch;