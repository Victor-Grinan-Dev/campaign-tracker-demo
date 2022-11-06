import { Formation } from '../../classes/formation';
import { Unit } from '../../classes/unit';
import { skills_by_unit_type } from '../../data/skillsByUnitType';

export const unit1 = new Unit(1,"unit1", 5, 100, skills_by_unit_type["infantry"]);
export const unit2 = new Unit(2,"unit1", 1, 85, skills_by_unit_type["transport_tank"]);
export const unit3 = new Unit(3,"unit1", 5, 100, skills_by_unit_type["infantry"]);
export const unit4 = new Unit(4,"unit1", 1, 85, skills_by_unit_type["transport_tank"]);

export const testForm = new Formation("Form Test",[unit1, unit2, unit3,
  unit4], "test", "nada" );