/**
 * Created by dima on 24.02.2017.
 */
export default class BasicCharacter {
    constructor(hp = 100, power = 50, damage= 15, baseAp = 10, speedWalk = 5){
        this.hp = hp;
        this.power = power;
        this.damage = damage;
        this._baseAp = baseAp;
        this.ap = baseAp;
        this.speedWalk = speedWalk;
        this.defence = 0;
    };
    actionWalk(forward){
        if (this.ap < 5) {
            console.log(`have not action point for this action,\n${this.constructor.name} have ${this.ap} action points`);
            return 0;
        }
        this.ap -= 5;
        let dist;
        if(forward){
            dist = distance - this.speedWalk;
            if (dist < 0) dist = 0;
        } else {
            dist = distance + this.speedWalk;
        }
        return dist;
    };
    actionRun(forward){
        if (this.ap < 10) {
            console.log(`have not action point for this action,\n${this.constructor.name} have ${this.ap} action points`);
            return 0;
        }
        this.ap -= 10;

        let dist;
        if(forward){
            dist = distance - 3*this.speedWalk;
            if (dist < 0) dist = 0;
        } else {
            dist = distance + 3*this.speedWalk;
        }
        return dist;


    }
    reload(){
        this.ap = this.baseAp;
        this.defence = 0;
    };
    actionBlock(){
        if (this.ap < 5) {
            console.log(`have not action point for this action,\n${this.constructor.name} have ${this.ap} action points`);
            return false;
        }
        this.ap -= 5;
        this.defence +=5;
        console.log(`${this.constructor.name} defense = ${this.defence}`);
        return true;
    }
    innerDamage(damageFunc){
        if (this.defence - damageFunc < 0){
            this.hp += this.defence - damageFunc;
            console.log(this);
        } else {
            console.log("My defense save me");
        }
        if(this.hp < 0){
            console.log(`The ${this.constructor.name} was killed`);
            delete this;
        }
    }
    actionHit(distance = 0){
        console.log(`${this} hit`);
        if (this.ap < 5) {
            console.log(`have not action point for this action,\n${this.constructor.name} have ${this.ap} action points`);
            return false;
        }
        this.ap -= 5;
        if (distance > 0) {
            console.log(`I can't hit my enemy, he is to far`);
            return
        }

        return this.damage;
    }
}