export class Skill {

    skillId: number;
    name: string;
    parentSkill: string;

    constructor(skillId: number, name: string, parentSkill: string){
        this.skillId = skillId;
        this.name = name;
        this.parentSkill = parentSkill;
    }

}