export class Formation {
    action_points = 1 //amount of actions a formation can do in a turn.
    work_force = 0 //points to complete the an action.
    damage = 0
    defense = 0
    model_count = 0
    vision = 1
    Xp = 0
    actions=[]
    intelligence = 1
    level = 0
    benefits=[]//this benefits come from the formation type if there is one 
    badges=[]//this are archievements as formation
    movement = 0
    maxMovement = 0
    type = undefined //this comes from the composition of the formation (old 40k formations rules)
    dedication=[] //this are enancements assigned to the formation by user
    color='white' //faction related
    subColor='white' //user choice
    is_listed = false
    point_cost = 0  
    carry_capacity = 0 //from the units
    infantry_count = 0
    isBeen = false
    isMoved = false
    owner = undefined //army that owns it

    constructor(name, composition, s_description="", l_description="", image="", faction="", subfaction=""){
      this.name = name
      this.composition = composition
      this.s_description = s_description
      this.l_description = l_description
      this.image = image
      this.faction = faction
      this.subfaction = subfaction
      this.setPointCost() 
      this.setDamage()
      this.setMovement()
      this.setWorkForce()
      this.setModelCount()
      this.setMaxVision()
      this.setFaction()
      this.setActions()
      //action points?
      }

      getValue = (skill) => {
        let divider;
        if(skill.includes('+')){
          divider = '+';
        }else if(skill.includes('-')){
          divider = '-';
        }else{
          console.log("no divider found");
          return;
        }
        return parseInt(skill.split(divider)[1], 10);
      }
      setPointCost(){ // checked  
        this.composition.forEach(unit =>{
        this.point_const += unit.point_const
        });
      }
      setDamage(){ //checked
          this.damage = Math.floor(this.point_const / 10)
      }
      setWorkForce(){ //checked
        let apply_bonus = false;
        let bonus = 0;
        for (let unit of this.composition){
          if(unit?.skills?.type.includes("infantry")){
            this.work_force += unit.point_const;
          }
          // eslint-disable-next-line
          unit?.skills?.passive.forEach(skill =>{
            if(skill.includes("work_force")){
              apply_bonus = true;
              bonus = (parseInt(skill.split('+')[1], 10)/100);
            }
          });
        }
        if(apply_bonus){
          this.work_force += this.work_force * bonus;
        }
      }
      setMovement(){ //checked
        // eslint-disable-next-line
        
        let transportCapacity = 0;
        let nonInfantryModelsMinMovement = 100;
        let slowestMovement = 100;
  
        //check each unit in the formation.
        this.composition?.forEach(unit => {  
          //checks the slowest movement value in the formation.
          if (unit?.skills?.movement < slowestMovement) {
            slowestMovement = unit.skills.movement;
          }   
          //check how many infantry models.
          if(unit?.skills?.type?.includes('infantry')){
            this.infantry_count += unit.models;
          };
          //what is the minimun movement value of all not infantry models in the formation.
          if(!unit?.skills?.type.includes('infantry')){
            if (unit?.skills?.movement < nonInfantryModelsMinMovement){
              nonInfantryModelsMinMovement = unit.skills.movement;
              }
          }
          //check if there is transport(s) and if true, whats the transport combine capacity.           ,n     321321321vm                         
  
        unit?.skills?.passive.forEach(skill => {
            if(skill.includes('transport')){
              transportCapacity += parseInt(skill.split('+')[1], 10);  
            }
          })       
        })
        //is the transport capacity iqual or more that the infantry models. if yes min movement is taken from tranports else from the slowes unit in the formastion
        if(transportCapacity >= this.infantry_count){
          this.movement = nonInfantryModelsMinMovement;
        }else{
        this.movement = slowestMovement;
          } 
        
          this.maxMovement = this.movement;
      }
      setModelCount(){ //checked
          this.composition.forEach(unit=>{
            this.model_count += unit.models;
          });
      }
      setMaxVision(){ //checked
        let bonusVision = 0;
        let tempBonus = 0;
        this.composition.forEach(unit => {//ok
          unit?.skills?.passive.forEach(skill => {//ok
            if (skill.includes('vision+')){ //ok
              tempBonus = this.getValue(skill);
              if(tempBonus > bonusVision){//ok
                bonusVision = tempBonus;
              };
            };
          });
          this.vision += bonusVision;
        });
      };
      setActions(){
        for(let unit of this.composition){
          if (unit.skills.active){
            for (let action of unit.skills.active){
              if(!this.actions.includes(action)){
                this.actions.push(action);
              }
            }
          }         
        }
      }
      setFaction(){
        switch (this.faction.name) {
          case "The Justice Aliance":
            this.defense = 10;
            this.color = "#309abb";
            break;
          case "damage%+10":
            this.damage += this.damage * 0.1;
            this.color = "#830202";
            break;
          case "The Death Machines":
            this.work_force *= 0.1;
            this.color = "#1fc778";
            //regeneration while still?
            break;
          case "The Beast Hordes":
            this.movement += 1;
            this.color = "#395B64";
            //less intelligent?
            break;
          case "The Advanced Humanoids":
            this.intelligence += 0.1;
            this.color = "#0F3D3E";
            break;
          case "The Infestation Bugs":
            for (let unit in this.units){
              unit.skills.passive.push('claim-tile');
            }
            this.color = "#D1512D";
            //low defence?
            break;
        
          default:
            break;
        }
      }
      increaseXP(increase){
        this.Xp += increase * this.intelligence;
      }

  };