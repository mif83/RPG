/**
 * Created by user on 18.02.17.
 */


import Human from './class-human';
import Elf from './class-elf';

let hum = new Human;
let elf = new Elf;


let distance = 35;
function raund(war1 , war2) {

    war1.action(war2);
    war1.reload();

}

raund(hum, elf);