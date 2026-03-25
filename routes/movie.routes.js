const MovieController = require('../controllers/movie.controllers');

const routes = (app) => {
    app.post('/mba/api/v1/movies', MovieController.createMovie);
}

module.exports = routes;