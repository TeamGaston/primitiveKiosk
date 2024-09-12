const home = ( app ) => {
    app.get( "/home", ( req, res ) => {
        res.render( "layout", { content: "home", bottomBar: "denominator/bottomBarFrame" } );
    } );
}

export default home;