import {v4 as uuid} from 'uuid';

let players = [];

export const getPlayers = (req, res) => {
    try{
        console.log("Getting players...");
        res.send(players);
    }catch(e){
        console.log("Could not get players.");
    }
    
}

export const getPlayer = (req, res) => {
    try{
        const { id } = req.params;
        console.log("Getting player with id {}", id);
        const foundPlayer = players.find((player) => player.id == id);
        res.send(foundPlayer);
    }catch(e){
        console.log("Could not find player with id {}", id);
    }
   
};


export const createPlayer = (req, res) => {   
    const player = req.body;
    try {
        players.push({...player, id: uuid()});
        console.log("Creating player {}", player);
        res.send(`Football player ${player.firstName} added to the array/db.`);
    }catch(e) {
        console.log("Could not create player {}", e, player);
    }

    
};


export const deletePlayer = (req, res) => { 
    try {
        const { id } = req.params;
        console.log("Deleting player {}", id);
        players = players.filter((player) => player.id === id);
        res.send(`Player with id ${id} deleted.`)
    } catch (e) {
        console.log("Could not delete player with id ${id}", e, id);
    }
    
};

export const updatePlayer =  (req,res) => {
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const player = players.find((player) => player.id === req.params.id);
    try{
        if(firstName) player.firstName = firstName;
        if(lastName) player.lastName = lastName;
        if(age) player.age = age;
        res.send(`Player with id ${id} has been updated`)
    }catch(e){
        console.log("Could not update player with id {}", e, id)
    }
    
    
};
