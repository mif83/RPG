/**
 * Created by dima on 24.02.2017.
 */
import BasicCharacter from './class-default';

export default class Human extends BasicCharacter{
    constructor(){
        super(80, 30);
        this._buildCount = 0;
    };
    build (){
        if (this.ap < 10) {
            console.log(`have not action point for this action,\n${this.constructor.name} have ${this.ap} action points`);
            return false;
        }
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
    action(enemy){
        console.log(distance);
        let direct = false;
        if(enemy.constructor.name === "Elf" ){
            if (this.hp < 30 || distance >= 91){
                this.build();
            }
            if (distance < 50 && distance !== 0 ){
                distance = this.actionRun(true);
            }
            if (enemy._arrows === 0 && distance !== 0){
                distance = this.actionRun(true);
                direct = true;
            }
            if (distance > 70 && distance < 91){
                distance = this.actionRun(false);
            }
            if(distance === 0){
                enemy.innerDamage(this.actionHit());
                enemy.innerDamage(this.actionHit());
            }

        }
    };

}