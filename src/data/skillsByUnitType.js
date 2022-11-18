export const skills_by_unit_type = {//TODO?: smarter change all this to separate tags?
  anti_air:{
    type:"anti_air",
    movement:4,
    active:[],
    negative:[],
    passive:[],
    description:"It can shoot planes"
  },
  artillery_battery:{
    type:"artillery_battery",
    movement:1,
    active:['deploy', "barage"],
    negative:["no_water"],
    passive:["damage+10"],
    description:"It can perform long and very strong sieges but moves very slow"
  },
  artillery_tank:{
    type:"artillery_tank",
    movement:4,
    active:['deploy', "barage(-5)"],
    negative:["no_water"],
    passive:["defence+5"],
    description:"It can perform short weak sieges, but moves fast, it has defence"
  },

  artillery_truck:{
    type:"artillery_truck",
    movement:4,
    active:['deploy', "barage"],
    negative:["no_water"],
    passive:["defense-5"],
    description:"it can perform strong and long siege but is very weak"
  },

  beast_rider:{
    type:"beast_rider",
    movement:3,
    active:["hit&run", "turbo_boost", "charge"],
    negative:["No_water"],
    passive:["vision+1, all terrain"],
    description:"Better vision, not slowed by terrain"
  },

  beast:{ 
    type:"beast",
    movement:3,
    active:["charge"],
    negative:[],
    passive:["vision+1"],
    description:"Better vision, not slowed by terrain"
  },

  infantry:{
      type:"infantry",
      movement:2,
      active:["build", "set_defence", "claim_tile"],
      negative:[],
      passive:["claim_tile", "all_terrain", "work_force%+20"],
      description:"Can claim tiles and build"
    },
    light_infantry:{
      type:"light_infantry",
      movement:2,
      active:["conceal", "claim_tile"],
      negative:["defense-10", "damage-10"],
      passive:["hold_position", "all_terrain", "movement+1" ],
      description:"Can claim tiles, weaker than infantry, not slowed by terrain"
    },
    heavy_armoured_infantry:{
      type:"heavy_armoured_infantry",
      movement:1,
      active:[ "set_defence", "claim_tile"],
      negative:[],
      passive:["hold_position", "all_terrain", "defense+5"],
      description:"slow but not slowed by terrain, high defence"
    },
    heavy_weapons_infantry:{
      type:"heavy_weapons_infantry",
      movement:1,
      active:[ "set_defence", "claim_tile"],
      negative:[],
      passive:["hold_position", "all_terrain", "damage+5"],
      description:"slow but not slowed by terrain, high damage"
    },
    jet_infantry:{
      type:"jet_infantry",
      movement:4,
      active:["deep_assault", "jump"],
      negative:["No_water", "recharge_jets"],
      passive:["fly"],
      description:"very fast and tricky"
    },
    rider:{
      type:"rider",
      movement:5,
      active:["hit&run"],
      negative:["No_water", "no_Mountain", "hard_in_swamps" ],
      passive:["turbo_boost"],
      description:"very fast in plains, very slow in other terrains."
    },
    transport_tank:{
      type:"transport_tank",
      movement:4,
      active:null,
      negative:["No_water", "no_Mountain" ],
      passive:["transport+10", "defence+5"],
      description:"Boost up to 10 troops speed, give defence bonus"
    },
  
    transport_armoured_tank:{
      type:"transport_armoured_tank",
      movement:4,
      active:null,
      negative:["No_water", "no_Mountain" ],
      passive:["transport+6"],
      description:"Boost up to 6 troops speed, give defence bonus and damage bonus"
    },
  
    light_tank:{
      type:"light_tank",
      movement:4,
      active:null,
      negative:["No_water", "no_Mountain", "low_defence", "damage+5" ],
      passive:[],
      description:"very, very fast, no defence bonus, damage bonus"
    },
  
    mid_tank:{
      type:"mid_tank",
      movement:4,
      active:null,
      negative:["No_water", "no_Mountain"],
      passive:["defense+5", "damage+5"],
      description:"defence and damage bonus"
    },
  
    heavy_tank:{
      type:"heavy_tank",
      movement:3,
      active:null,
      negative:["No_water", "no_Mountain"],
      passive:["defense+10", "damage+10"],
      description:"high defence and damage bonus"
    },
  
    hover_transport:{
      type:"hover_transport",
      movement:6,
      active:null,
      negative:["low_defence", "defence-5"],
      passive:["fly", "transport+5"],
      description:"Boost 5 light infantry speed,low defence"
    },
  
    fast_hover:{
      type:"fast_hover",
      movement:6,
      active:null,
      negative:[ "low_defence"],
      passive:["fly"],
      description:"high speed, bonus damage, low defence"
    },
  
    walker_wehicle:{
      type:"walker_wehicle",
      movement:2,
      active:null,
      negative:["no_water", "no_swamp"],
      passive:["defence+5", "damage+5"],
      description:"bonus defence, bonud damage"
    },
  
    warsuit:{
      type:"warsuit",
      movement:3,
      active:[],
      negative:["no_water"],
      passive:["defence+5", "damage+5"],
      description:"bonus defence, bonud damage"
    },
  
    monster:{
      type:"monster",
      movement:3,
      active:[],
      negative:[],
      passive:["damage+10"],
      description:"..."
    },

    flying_beast:{
      type:"flying_beast",
      movement:6,
      active:[],
      negative:[],
      passive:["vision+2"],
      description:"..."
    },
  };