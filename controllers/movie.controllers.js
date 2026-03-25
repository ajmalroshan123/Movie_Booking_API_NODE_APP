const Movie = require('../models/movie.model')


/**  
 * Controller function to create a new movie
 */
const createMovie = async (req, res) => {
    try{
        const movie = await Movie.create(req.body);
        console.log(movie, "this is it");
        
        return res.status(201).json({
            sucuss: true,
            error: {},
            data: movie,
            message: 'Successfully created a new movie'
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            sucess: true,
            error: err,
            data: {},
            message: 'Something went wrong'
        })
    }
}

module.exports = {
    createMovie
}