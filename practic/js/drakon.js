function Creature(name, health, attack, block, dodge) {
    this.name = name;
    this.health = health;
    this.attack = health;
    this.block = block;
    this.dodge = dodge;
}
Creature.prototype.attackTarget = function (target) {
    target.health = target.health - this.attack;
    console.log(`${this.name} ${target.name} ${this.attack} points`);
}

function Hero(name, health, attack, block, dodge) {
    this.dodge = dodge;
    Creature.call(this, name, health, attack, block);
}
Hero.prototype = Object.create(Creature.prototype);
Hero.prototype.constructor = Hero;

const drakon = new Creature('Vasa', 100, 90, {
    chance: 5,
    value: 80
});
const hero = new Hero('Losa', 100, 50, {
    chance: 90,
    block: 90
}, 90);
let rounds = 0;
while (drakon.health > 0 && hero.heath > 0) {
    drakon.attackTarget(hero);
    hero.attackTarget(drakon);
    console.log(hero.health);
    console.log(drakon.health);
    rounds += 1;

}
console.log(rounds);