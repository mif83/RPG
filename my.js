/**
 * Created by dima on 16.02.2017.
 */
function BasicCharacter(hp, power, damage){
    this.hp = hp || 100;
    this.power = power || 50;
    this.damage = damage || 15;

}
BasicCharacter.prototype.walk = function(distance){
    return +distance / 5;
};
BasicCharacter.prototype.run = function(distance){
    return +distance / 15;
};
// humans
function CreateHuman(hp, power, damage){
    BasicCharacter.call(this, 80, 30, 10);
}

CreateHuman.prototype = Object.create(BasicCharacter.prototype);
CreateHuman.prototype.constructor = CreateHuman;

CreateHuman.prototype.build = (function(){
    var count = 0;
    return function(){
        if (count < 3){
            this.hp += 10;
            count++;
            console.log(this);
        }
    }
})();
// Orcs
function CreateOrc(hp, power, damage){
    BasicCharacter.call(this, 110, 80, 30);
};
CreateOrc.prototype = Object.create(BasicCharacter.prototype);
CreateOrc.prototype.constructor = CreateOrc;

CreateOrc.prototype.aggression = (function(){
    var count = 0;
    return function(){
        if (count < 5){
            this.power += 10;
            count++;
            console.log(this);
        }
    }
})();
// Elf
function CreateElf (hp, power, damage){
    BasicCharacter.call(this, 40, 20, 10);
};
CreateElf.prototype = Object.create(BasicCharacter.prototype);
CreateElf.prototype.constructor = CreateElf;

CreateElf.prototype.shoot = (function(){
    var countArrows = 10;

    function sh(arrows, distance){
        debugger;
        if(countArrows == 0){
            console.log("it so pity, elf have not arrows");
            return;
        }
        if(arrows*5 - 0.1*distance < 0 ){
            return "too far";
        }
        if (countArrows - arrows < 0) {
            arrows = countArrows;
            console.log("Elf have only "+ arrows +" arrows");
            countArrows = 0;
        }
        if (countArrows != 0)countArrows -= arrows;
        var dam = arrows*5 - 0.1*distance;
        console.log(this);
        console.log("Shooted " + arrows + " on " + distance + " meters, damage = " + (this.damage +dam));

        return dam;

    };
    sh.reload = function(){
      countArrows = 10;
    };
    sh.showArrow = function(){
        return countArrows;
    }
    return sh;
})();





var human = new CreateHuman();
var orc = new CreateOrc();
var elf = new CreateElf();