import {v4 as uuid} from 'uuid';

let players = [];

/**
 * Const that gets all players from array
 * @param {*} req - null or undefined
 * @param {*} res - Response that gets players from server if everything is fine
 */
export const getPlayers = (req, res) => {
    try{
        console.log("Getting players...");
        res.send(players);
    }catch(e){
        console.log("Could not get players.");
    }
    
}

/**
 * Const that gets player with given id
 * @param {*} req - unique player identifier {id}
 * @param {*} res - Response that gets player with unique {id} from server if everything is fine
 */
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

/**
 * Const that creates a new player with the given data
 * @param {*} req - Given player data
 * @param {*} res - Response that gets player {player.firstName} that was inserted if everything is fine
 */
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

/**
 * Const that deletes player with given id 
 * @param {*} req - Given unique id
 * @param {*} res - Response that gets ${id} of deleted player if everything is fine
 */
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

/**
 * Const that updates player with given data
 * @param {*} req - Given unique id
 * @param {*} res - Response that gets ${id} of updated player if everything is fine
 */
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
