const choice = ( app ) => {
    app.get( "/choice", ( req, res ) => {
        res.render( "layout", { content: "movieChoice_movie", bottomBar: "denominator/bottomBarFrame" } );
    } );

    app.get( "/choice_time", ( req, res ) => {
        res.render( "layout", { content: "movieChoice_time", bottomBar: "denominator/bottomBarFrame" } );
    } );
}

export default choice;