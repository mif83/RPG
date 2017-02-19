/**
 * Created by user on 18.02.17.
 */
class BasicCharacter {
    constructor(hp = 100, power = 50, damage= 15, baseAp = 10, speedWalk = 5){
        this.hp = hp;
        this.power = power;
        this.damage = damage;
        this.baseAp = baseAp;
        this.ap = baseAp;
        this.speedWalk = speedWalk;
        this.defence = 0;
    }
    walk(distance){
        return distance / this.speedWalk;
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
}
class Human extends BasicCharacter{
    constructor(){
        super(80, 30, 10);
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
        super(40,20,10);
        this.arrows = 10;
    };
    showArrows(){
        return this.arrows;
    };
    shoot(distance, goal){
        if (this.ap < 10) return "have not action point for this action";
        this.ap -= 5;

    };
}
let basic = new BasicCharacter;
let hum = new Human;
let elf = new Elf;
console.log(basic);
console.log(hum);
console.log(elf);