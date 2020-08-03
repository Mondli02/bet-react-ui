const Tournament = require('./../models/Tournament')

module.exports = {
    addTournament:(req, res, next) =>{
        console.log(req.body);
        
        //crud operation
        const savetournament = req.body;
        const tournament = new Tournament(savetournament);
        if(!savetournament._id){
            tournament.save((err, newTournament) =>{
                if(err)
                    res.send(err)
                else if(!newTournament)
                    res.send(400)
                else
                    res.send(newTournament)
                next()
        });
    }else{
        tournament.findById(req.body._id, function(err,tournament){
            if(err) return handleError(err)
            tournament.set(savetournament);
            tournament.save((err, updateTournament) =>{
                if(err)
                res.send(err)
            else if(!updateTournament)
                res.send(400)
            else
                res.send(updateTournament)
            next()
            });
        });
    }
},
    getTournament: (req, res, next) =>{
        console.log(req.params.id);

        const tournamentid = req.params.id;
        Tournament.findById(tournamentid)
             .exec((err, tournament) =>{
            if(err)
                res.send(err)
            else if(!tournament)
                res.send(404)
            else
                res.send(tournament)
            next()
        });


    },
    getAllTournaments: (req, res, next) =>{
        console.log("getAllTournaments");

        Tournament.find((err, tournaments) =>{
            if(err)
                res.send(err)
            else if(!tournaments)
                res.send(404)
            else
                res.send(tournaments)
            next()
        });
    }
}
   
