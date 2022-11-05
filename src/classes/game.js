
export class Game {
   
    phase = "start"
    gameOver = false
    
    constructor(campaign){
        this.campaign = campaign
        this.map = this.campaign.map.map
    }

}