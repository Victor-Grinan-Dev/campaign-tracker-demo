export class Campaign {
    isPublished = true;
    isStarted = false;
    isEnded = false;
    rules = [];
    players = [];
    turn = 0;
    phase = 'deploy'; //result( at initiative ) - reaction_orders - solve - consecuences
    initialMap = []; //initial map in case of comparison
    banner = undefined;
    actionPool = [] //[ timestamp, armyName, action ]
    camapignMaster = undefined;

    constructor(campaignId, name, armySize, map, rounds=4, timeLapse="weeks") {
        this.campaignId = campaignId;
        this.name = name;
        this.armySize = armySize;
        this.map = map;

        if (rounds < 4){
            rounds = 4;
        }else{
            this.rounds = rounds;
        }
        this.timeLapse=timeLapse;
        this.setInitialSavedMap();
    }

    setInitialSavedMap(){
        this.initialMap = this.map.map;
    }
    
}