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