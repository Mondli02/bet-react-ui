const tournamentController = require('../controllers/TournamentController');

module.exports=(router) =>{
    /**
     * get tournament
     */
    router
        .route('/tournament/:id')
        .get(tournamentController.getTournament)
    

     /**
     * add tournament
     */
    router
    .route('/tournament')
    .post(tournamentController.addTournament)

     /**
     * get all tournaments
     */
    router
        .route('/tournaments/')
        .get(tournamentController.getAllTournaments)
}

