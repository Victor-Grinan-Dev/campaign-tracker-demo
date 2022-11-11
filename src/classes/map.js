
export class Map {
    
    maxPlayers = 2
    constructor(name, shape, dimensions, map, isAutomated = false){
    this.name = name;
    this.shape = shape;
    this.dimensions = dimensions;
    this.map = map;// array of MapLines/bidimentional array
    this.isAutomated = isAutomated;
    };

    getFormation(fromTileId){       
      this.map.map((row)=>{
          row.map((tile)=>{
              if (tile.id === fromTileId){
                  return tile.formation
              }
          })
      })
    };

    placeFormation(formation, tileId){
        this.map.map((row)=>{
            row.map((tile)=>{
                if (tile.id === tileId){
                    tile.formation = formation
                } 
            })
        })
        return 0;
    };

    deleteFormation(tileId){
        this.map.map((row)=>{
            row.map((tile)=>{
                if (tile.id === tileId){
                    tile.formation = null
                }
            })
        })
        return 0;
    };

    moveFormation(fromTileId, toTileId){
        const formation = this.getFormation(fromTileId);
        this.placeFormation(formation, toTileId);
        this.deleteFormation(fromTileId);
        return 0;
    }
}