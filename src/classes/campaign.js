export class Campaign {
    isStarted = false
    isEnded = false
    rules = []
    players = []
    turn = 0
    phase = 'orders' //result( at initiative ) - reaction_orders - solve - consecuences
    savedMap = []

    constructor(campaignId, name, armySize, map, availableFactions, rounds=4, timeLapse="weeks") {
        this.campaignId = campaignId
        this.name = name
        this.armySize = armySize
        this.map = map
        this.availableFactions = availableFactions
        if (rounds < 4){
            rounds = 4
        }else{
            this.rounds = rounds
        }
        this.timeLapse=timeLapse
        this.setInitialSavedMap()
    }

    setInitialSavedMap(){
        this.savedMap = this.map.map;
    }
    
}