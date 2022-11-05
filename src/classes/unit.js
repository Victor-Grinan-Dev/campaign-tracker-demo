import { heroTypes } from "../dummyDatabse/heroTypes"

export class Unit {
    image = ""
    hero = null
    equipment = []
    constructor(id, unitName, models, point_const, skills){
      this.id = id
        this.name = unitName
        this.models = models
        this.point_const = point_const
        this.skills = skills
    }
    makeHero(type){
      this.hero = heroTypes[type]
    }
};