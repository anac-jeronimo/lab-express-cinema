const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    Movie.find()
    .then((allTheMovieFromDB) => {
        console.log('moviesfromdb', allTheMovieFromDB)
        res.render('movies', {movies: allTheMovieFromDB});
    });
});

router.get('/movies/:movieId', (req, res) => {
    let movieId = req.params.movieId;
    Movie.findById(movieId)
    .then((theMovieFound) => {
        res.render('movie-details', {movie: theMovieFound});
    })
    .catch((err) => {
        res.render('error', {err});
    })
});




module.exports = router;
