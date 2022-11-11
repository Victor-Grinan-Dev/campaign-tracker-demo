import { terrainTypes } from '../data/terrainTypes';
import { Tile } from '../classes/tile';
import { Map } from '../classes/map';

const relation = {
    "5":1,
    "7":2,
    "9":4,
    "11":6,
    "13":8,
}

const diagonChar = [
    'a', 'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    ]

export const generateTileId = (y, x, alphabet_start) => {
    let id;
    if(y < 10){
        id = diagonChar[alphabet_start + x] + "0" + y;
    }else{
        id = `${diagonChar[alphabet_start + x] + y}`;
    }
    return id;
}

export const hexCleaner = (nestedArray) => {

    let cleanedNestedArray = [];
    
    for (let y = 0; y < nestedArray.length; y++){
        let newArray = [];
        let has_started = false;
        const currentRow = nestedArray[y];
        for (let x = 0; x < nestedArray[y].length; x++){
            const currentTile = nestedArray[y][x]
            if (nestedArray[y][x].image !== null){
                has_started = true;
            }
            if(has_started && currentTile.image === null){
                // newArray = currentRow.slice(x - 1)
                newArray = currentRow.slice(0, x);
                cleanedNestedArray.push(newArray);
                break;
            }
        }
    }

    return cleanedNestedArray;
}
export const canvasSquare = (name, maxRows, maxCols) => {

    let columns;
    const map = [];
    for (let y = 0; y < maxRows; y++){
        const rows = [];
        y % 2 === 0 ? columns = maxCols : columns = maxCols - 1;
        for (let x = 0; x < columns; x++){
            const alphaStart = y;
            const id = generateTileId(y,x, alphaStart)
            const newTile = new Tile(id, x, y, terrainTypes["blank"]);
            rows.push(newTile);
        }
        map.push(rows);
    }
    return new Map(name, "sq",`${maxRows}x${maxCols}`, map, null);
}
export const canvasHex = (name, side = 13) => {
    //TODO: fix the generator to start in alphabet "a" instead of "i"

    if (side < 5){
        side = 5;
    }else if (side > 13){
        side = 13;
    }else if (side % 2 === 0){
        side += 1;
    }

    const width = side * 3 - 5;
    const height = side * 2 - 1;

    let row;
    let funnyCase;  
    side > 5 ? funnyCase = 0 : funnyCase = 1;     
    let rule = Math.floor(side / 2) + 1;
    let hex = [];
		

    for (let y = 0; y < height; y++){
        let alphaStart = 0;
        y % 2 === 0 ? row = width : row = width - 1;
        
        if (y < side && y % 2 !== 0)
		    rule -= 1
	    else if (y > side && y % 2 === 0){
            rule += 1
        }
	    let line = [];
        
        for (let x = 0; x < row; x++){
    
            if (x < rule -1 || x > row - rule - relation[side] + 1 ){
                line.push(new Tile(null, null));
            }else if (x > rule - funnyCase){
                const id = generateTileId(y, x, alphaStart)
                line.push(new Tile(id, "blank"));
            }
        }
        hex.push(line);
        alphaStart += 1
    }
    hex = hexCleaner(hex)
    
    const hexMap = new Map(name, "hx",`${side}`, hex)
    
    return hexMap;
}
//TODO: generate a proper map:
const generateHexagonalMap = (name, side = 13) => {
    let hexMap;
    hexMap =  canvasHex(name, side);
    return hexMap;
}
//TODO: generate a proper map:
const generateSqMap  = (name = "Blank Canvas", maxRows = 25, maxCols = 25, shape="sq") => {
    //not done
    //this should be a random tile generator
    let map;
    map = canvasSquare(name, maxRows, maxCols);
    return map;
}
//TODO: switcth shapes
export const generateMap = (name = "Unknown", dimensions="7x7", shape = "sq") => {
    //this should be the only function you need to generate any of the available map options as a canvas or a random tiles
    let map;
    let y;
    let x;
    if(shape === "sq"){
        if(dimensions.split('x').length === 2){
            y = dimensions.split('x')[0]
            x = dimensions.split('x')[1]
            map = generateSqMap(name, y, x);
        }else{
            map = generateSqMap(name, dimensions, dimensions);
        }
        
    }else if (shape === "hx"){
        map = generateHexagonalMap(name, dimensions);
    }
    return map;
}