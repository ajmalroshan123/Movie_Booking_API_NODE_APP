const Movie = require('../models/movie.model');

const createMovie = async (data) => {
    const movie = await Movie.create(data);
    return movie;
}

const getMovieById = async(id) => {
    const movie = await Movie.findById(id);

    if (!movie) {
        return {
            err: "No Movie found for the corresponding id provided",
            code: 404
        }
    };
    return movie;
}

const deleteMovie = (data) => {
    const response = Movie.findByIdAndDelete(data);
    return response;
}

module.exports = {
    createMovie,
    getMovieById,
    deleteMovie,
}