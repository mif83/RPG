/**
 * Created by user on 18.02.17.
 */
class BasicCharacter {
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
class Human extends BasicCharacter{
    constructor(){
        super(80, 30);
        this._buildCount = 0;
    };
    build (){
        if (this.ap < 10) return "have not action point for this action";
        this.ap -= 10;
        if (this._buildCount < 3){
            this.hp +=10;
            this._buildCount++;
            console.log(`The human have ${JSON.stringify(this)} param`);
        } else {
            console.log(`I can't build the house`);
        }
        return this._buildCount;
    };


}
class Elf extends BasicCharacter{
    constructor(){
        super(40,20);
        this._arrows = 10;
    };
    showArrows(){
        return this._arrows;
    };
    shoot(distance){
        //debugger;
        if (this.ap < 5) return "have not action point for this action";
        this.ap -= 5;
        // maximum distance 90m,  in the 10m and < maximum damage this.damage + arrow damage(5)
        let baseDistance = distance - 10;
        let curentDamage = baseDistance <= 0 ? this.damage + 5 : (this.damage + 5) - (this.damage + 5)*(baseDistance*1.23)/100 ;
        // 1.23 - it step from 0 to 81
    return curentDamage;
    };
}
let hum = new Human;
let elf = new Elf;

console.log(hum);
console.log(elf);