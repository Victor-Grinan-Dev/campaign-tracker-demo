import { Formation } from '../../classes/formation';
import { Unit } from '../../classes/unit';
import { skills_by_unit_type } from '../../data/skillsByUnitType';
import { factions } from '../../data/factions';

export const unit1 = new Unit(1,"unit1", 5, 100, skills_by_unit_type["infantry"]);
export const unit2 = new Unit(2,"unit1", 1, 85, skills_by_unit_type["transport_tank"]);
export const unit3 = new Unit(3,"unit1", 5, 100, skills_by_unit_type["infantry"]);
export const unit4 = new Unit(4,"unit1", 1, 85, skills_by_unit_type["transport_tank"]);

export const unit5 = new Unit(1,"unit1", 5, 100, skills_by_unit_type["infantry"]);
export const unit6 = new Unit(2,"unit1", 1, 85, skills_by_unit_type["transport_armoured_tank"]);
export const unit7 = new Unit(3,"unit1", 5, 100, skills_by_unit_type["infantry"]);
export const unit8 = new Unit(4,"unit1", 1, 85, skills_by_unit_type["transport_armoured_tank"]);

const testForm1 = new Formation("Form Test",[unit1, unit2, unit3,
  unit4], factions["human_kin"], "nada" );
testForm1.point_cost = 370;
testForm1.damage = 45;
const testForm2 = new Formation("Form Test",[unit5, unit6, unit7,
  unit8], factions["human_kin"], "nada" );
testForm1.point_cost = 570;
testForm1.damage = 63;
const testFormList = [testForm1, testForm2]
export default testFormList;
