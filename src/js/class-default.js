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
    }
    walk(distance, forward){
        let dist;
        if(forward){
            dist = distance - this.speedWalk;
        } else {
            dist = distance + this.speedWalk;
        }
        return dist;
    }
    run(distance){
        return distance / 3*this.speedWalk;
    }
    reload(){
        this.ap = this.baseAp;
        this.defence = 0;
    }
    block(){
        this.defence +=10;
    }
    innerDamage(damage){
        if (this.defence - damage < 0){
            this.hp += this.defence - damage;
            console.log(this);
        } else {
            console.log("My defense save me");
        }
        if(this.hp < 0){
            console.log(`The ${this.__proto__.constructor.name} was killed`);
            delete this;
        }
    }
    hit(dictance){
        if (this.ap < 5) return "have not action point for this action";
        if (distance > 0) return console.log(`I can't hit my enemy, he is to far`);
        this.ap -= 5;
        return this.damage;
    }
}