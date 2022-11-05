import { ArmyList } from "./army";

export class User {
  
  type = "user"
  level = 0
  rank = "Conscript"
  badges = []
  battles = 0
  winRate = 0
  formations = []
  armyList = new ArmyList()//players can have only one army list
  email = ""
  image = "conscript_red.png"
  images = ["conscript_red.png", "conscript_blue.png", "conscript_green.png", "conscript_yellow.png"]

  constructor(username, password=""){
      this.username = username
      this.password = password
  }
}