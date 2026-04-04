
const validateMovieCreateRequest = async (req, res, next) => {
    
    // validate the movie name
    if (!req.body.name) {
        return res.status(400).json({
            success: false,
            err: "The name of the movie is not in the Request sent",
            data: {},
            message: "Malformed Request || bad request"
        })
    };

    // validate the movie description
    if (!req.body.description) {
        return res.status(400).json({
            success: false,
            err: "The description of the movie is not in the Request sent",
            data: {},
            message: "Malformed Request || bad request"
        })
    };

    // validate the movie duration
    if(!req.body.cast) {
        return res.status(400).json({
            success: false,
            err: "The cast of the movie is not in the Request sent",
            data: {},
            message: "Malformed Request || bad request"
        })
    };

    // validate the movie release date
    if(!req.body.releaseDate) {
        return res.status(400).json({
            success: false,
            err: "The release date of the movie is not in the Request sent",
            data: {},
            message: "Malformed Request || bad request"
        })
    };

    // validate the movie trailer url
    if(!req.body.trailerUrl) {
        return res.status(400).json({
            success: false,
            err: "The trailer url of the movie is not in the Request sent",
            data: {},
            message: "Malformed Request || bad request"
        })
    }

    next();

};




module.exports = {
    validateMovieCreateRequest
}