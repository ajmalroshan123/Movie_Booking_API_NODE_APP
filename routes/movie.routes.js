const movieController = require('../controllers/movie.controllers');
const MovieMiddlwares = require('../middlewares/movie.middlewares');

const routes = (app) => {

    app.post(
        '/mba/api/v1/movies',
        movieController.createMovie);

    app.delete(
        '/mba/api/v1/movies/:id', 
        movieController.deleteMovie
    );

    app.get(
        '/mba/api/v1/movies/:id',
        movieController.getMovie
    )
};




module.exports = routes;