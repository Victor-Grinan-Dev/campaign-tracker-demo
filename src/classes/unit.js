import { heroTypes } from "../data/heroTypes"

export class Unit {
    
    hero = null;
    equipment = [];
    constructor(id, unitName, models, point_cost, skills){
        this.id = id;
        this.name = unitName;
        this.models = models;
        this.point_cost = point_cost;
        this.skills = skills;
        if(this.skills?.type){this.image = this.skills.type;}
    }
    makeHero(type){
      this.hero = heroTypes[type];
    }

  
};