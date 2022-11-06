export const skills_by_unit_type = {//TODO?: smarter change all this to separate tags?
  anti_air:{
    type:"anti_air",
    movement:4,
    active:[],
    negative:[],
    passive:[]
  },
  artillery_battery:{
    type:"artillery_battery",
    movement:1,
    active:['deploy', "barage"],
    negative:["no_water"],
    passive:[]
  },
  artillery_tank:{
    type:"artillery_tank",
    movement:4,
    active:['deploy', "barage"],
    negative:["no_water"],
    passive:[]
  },

  artillery_truck:{
    type:"artillery_tank",
    movement:4,
    active:['deploy', "barage"],
    negative:["no_water"],
    passive:[]
  },

  beast_rider:{
    type:"beast_rider",
    movement:3,
    active:["hit&run", "turbo_boost", "charge"],
    negative:["No_water"],
    passive:["vision+1"]
  },

  beast:{ 
    type:"beast",
    movement:3,
    active:["charge"],
    negative:[],
    passive:["vision+1"]
  },

  infantry:{
      type:"infantry",

      movement:2,
      active:["build", "set_defence", "claim_tile"],
      negative:[],
      passive:["claim_tile", "all_terrain", "work_force%+20"]
    },
    light_infantry:{
      type:"light_infantry",

      movement:2,
      active:["conceal", "claim_tile"],
      negative:["defense-10", "damage-10"],
      passive:["hold_position", "all_terrain", "movement+1" ]
    },
    heavy_armoured_infantry:{
      type:"heavy_armoured_infantry",

      movement:1,
      active:[ "set_defence", "claim_tile"],
      negative:[],
      passive:["hold_position", "all_terrain", "defense+5"]
    },
    heavy_weapons_infantry:{
      type:"heavy_weapons_infantry",

      movement:1,
      active:[ "set_defence", "claim_tile"],
      negative:[],
      passive:["hold_position", "all_terrain", "damage+5"]
    },
    jet_infantry:{
      type:"jet_infantry",

      movement:4,
      active:["deep_assault", "jump"],
      negative:["No_water", "recharge_jets"],
      passive:["fly"]
    },
    rider:{
      type:"rider",
      movement:5,

      active:["hit&run"],
      negative:["No_water", "no_Mountain", "hard_in_swamps" ],
      passive:["turbo_boost"]
    },
    transport_tank:{
      type:"transport_tank",

      movement:4,
      active:null,
      negative:["No_water", "no_Mountain" ],
      passive:["transport+10"]
    },
  
    transport_armoured_tank:{
      type:"transport_armoured_tank",
      movement:4,
      active:null,
      negative:["No_water", "no_Mountain" ],
      passive:["transport+6"]
    },
  
    light_tank:{
      type:"light_tank",

      movement:4,
      active:null,
      negative:["No_water", "no_Mountain", "low_defence" ],
      passive:[]
    },
  
    mid_tank:{
      type:"mid_tank",

      movement:4,
      active:null,
      negative:["No_water", "no_Mountain"],
      passive:["defense+5", "damage+5"]
    },
  
    heavy_tank:{
      type:"heavy_tank",

      movement:3,
      active:null,
      negative:["No_water", "no_Mountain"],
      passive:["defense+10", "damage+10"]
    },
  
    hover_transport:{
      type:"hover_transport",

      movement:6,
      active:null,
      negative:["low_defence"],
      passive:["fly", "transport+5"]
    },
  
    fast_hover:{
      type:"fast_hover",
      movement:6,
      active:null,
      negative:[ "low_defence"],
      passive:["fly"]
    },
  
    walker_wehicle:{
      type:"walker_wehicle",

      movement:2,
      active:null,
      negative:["no_water", "no_swamp"],
      passive:[]
    },
  
    warsuit:{
      type:"warsuit",

      movement:3,
      active:[],
      negative:["no_water"],
      passive:[]
    },
  
    monster:{
      type:"monster",

      movement:3,
      active:[],
      negative:[],
      passive:[]
    },

    flying_beast:{
      type:"flying_beast",

      movement:6,
      active:[],
      negative:[],
      passive:["vision+2"]
    },
  };