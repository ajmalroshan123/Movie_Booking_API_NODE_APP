const mongoose = require('mongoose');
const Movie = require('../models/movie.model');
const movieService = require('../services/movie.service');
const {errorResponseBody, successResponseBody} = require('../utils/responsebody')


/**  
 * Controller function to create a new movie
 */
const createMovie = async (req, res) => {
    try{
        const movie = await movieService.createMovie (req.body);
        
        successResponseBody.data = movie;
        successResponseBody.message = "Successfully created a movie";
        return res.status(201).json(successResponseBody);

    } catch (err) {
        console.log(err);
        return res.status(500).json(errorResponseBody);
    }
}

/**  
 * Controller function to delete a movie
 */
const deleteMovie = async(req, res) => {
    try {
        const response = await movieService.deleteMovie(req.params.id);

        successResponseBody.data = response;
        successResponseBody.message = "Successfully deteled the movie";
        return res.status(200).json(successResponseBody);

    }catch (err) {
        console.log(err);
        return res.status(500).json(errorResponseBody);
        
    }
}

/**  
 * Controller function to get a movie
 */
const getMovie = async(req, res) => {
    try {
        const response = await movieService.getMovieById(req.params.id);
        if (response.err) {
            errorResponseBody.err = response.err;
            return res.status(response.code).json(errorResponseBody);
        }

        successResponseBody.data = response;
        return res.status(200).json(successResponseBody);

    }catch (err) {
        console.log(err); 
        return res.status(500).json(errorResponseBody);
        
    }
};

module.exports = {
    createMovie,
    deleteMovie,
    getMovie,
}