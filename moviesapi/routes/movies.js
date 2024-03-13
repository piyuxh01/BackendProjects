const express = require('express')
const router = express.Router();
const {newMovie,deleteMovie, getMovie, updateMovie, deleteMovieById} = require('../controller/setup');
router.get('/getMovie',getMovie);
router.get('/getMovieById',getMovieById);
router.post('/newMovie',newMovie);
router.delete('/deleteMovie',deleteMovie);
router.delete('/deleteMovieById',deleteMovieById);
router.patch('/updateMovie',updateMovie);
module.exports = router;
