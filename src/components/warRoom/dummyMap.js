import { Tile } from "../../classes/tile";
import { terrainTypes } from "../../data/terrainTypes";
import { Map } from "../../classes/map";

const a00 = new Tile("a00", 0, 0, terrainTypes["hills"], true);
const b00 = new Tile("b00", 0, 1, terrainTypes["forest"], false);
const c00 = new Tile("c00", 0, 2, terrainTypes["city"], false);

const b01 = new Tile("b01", 1, 0, terrainTypes["plains"], true);
const c01 = new Tile("c01", 1, 1, terrainTypes["plains"], false);

const b02 = new Tile("c00", 2, 0, terrainTypes["city"], false);
const c02 = new Tile("c00", 2, 1, terrainTypes["forest"], false);
const d02 = new Tile("c00", 2, 2, terrainTypes["hills"], true);

export const testMap = new Map("testMap", "sq", "3x3", [a00, b00, c00, b01, c01, b02, c02, d02]);