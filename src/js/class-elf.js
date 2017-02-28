/**
 * Created by dima on 24.02.2017.
 */
import BasicCharacter from './class-default';

export default class Elf extends BasicCharacter{
    constructor(){
        super(40,20);
        this._arrows = 10;

    };
    showArrows(){
        return this._arrows;
    };
    actionShoot(distance = 0){
        if (this.ap < 5) {
            console.log(`have not action point for this action,\n${this.constructor.name} have ${this.ap} action points`);
            return false;
        }
        this.ap -= 5;
        // maximum distance 90m,  in the 10m and < maximum damage this.damage + arrow damage(5)
        let baseDistance = distance - 10;
        let curentDamage = baseDistance <= 0 ? this.damage + 5 : (this.damage + 5) - (this.damage + 5)*(baseDistance*1.23)/100 ;
        // 1.23 - it step from 0 to 81
        return curentDamage;
    };
}