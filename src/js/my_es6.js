/**
 * Created by user on 18.02.17.
 */

import Human from './class-human';
import Elf from './class-elf';

export let hum = new Human;
export let elf = new Elf;

console.log(hum);
console.log(elf);

let distance = 35;
function fight(war1, war2) {
    console.log(distance);
    console.log(war1);
}

fight(hum, elf);