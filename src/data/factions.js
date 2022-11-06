export const factions = {
  human_kin:{
    id:"hk",
    name:"thr_human_kin",
    color:"#d5d5d5",
    benefit:["luck+20"]
  },
    justice_aliance:{
      id:"ja",
      name:"The Justice Aliance",
      color:"#309abb",
      benefit:["defence+10"]
    },
        
    dark_forces:{
      id:"df",
      name:"The Dark Forces",
      color:"#830202",
      benefit:["damage%+10"]
    },
    advanced_humanoids:{
      id:"ae",
      name:"The Advanced Humanoids",
      color:"#1fc778",
      benefit:['XP%+10']
    },
    death_machines:{
      id:"dm",
      name:"The Death Machines",
      color:"#395B64",
      benefit:["build%+10"]},
    beast_hordes:{
      id:"bh",
      name:"The Beast Hordes",
      color:"#0F3D3E",
      benefit:["movement+1"]
    },
    infestation_bugs:{
      id:"ib",
      name:"The Infestation Bugs",
      color:"#D1512D",
      benefit:["pasive: claim_tile"]
    }
  }

export const allFactions = [
  "hk",
  "ja",
  "df",
  "ae",
  "dm",
  "bh",
  "ib",
]
