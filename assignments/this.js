/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding - overall scope without any other rules/call functions.
* 2. Implicit Binding - the object before the dot
* 3. New Binding - when calling a consturctor, this refers to the specific time the object is created and returned
* 4. Explicit Binding - when this is explicit defined during JS's call/apply method
*
* write out a code example of each explanation above
*/

// Principle 1

function nameColor(color) {
    console.log(this);
    return color;
}

nameColor("Rainbow");

// code example for Window Binding

// Principle 2
const supplies = {
    item: 'Pencil',
    observeObject: function(adjective){
        console.log(`This ${this.item} is ${adjective}`);
        console.log(this);
    }
};
supplies.observeObject('ugly');



// code example for Implicit Binding

// Principle 3
function greatestAvenger(yelling){
    this.person = 'Hulk ';
    this.yelling = yelling;
    this.speak = function(){
        console.log(this.person + this.yelling);
        console.log(this);
    };
}

//const greenCutie = new greatestAvenger('Hulk');
const phrase = new greatestAvenger('Smash');
const secondAction = new greatestAvenger('hugs');

phrase.speak();

// code example for New Binding

// Principle 4
phrase.speak.call(secondAction);

// code example for Explicit Binding



// function song(music) {

    

//     console.log(`${this.name}, ${this.rhianna}`);
// }
// const vulgarName = {
//     name: 'B*** '
// };

// const curse = {
//     rhianna: 'Better have my money'
// }

// song.call(vulgarName, curse);

function comeAtMe(att) {
    this.name = att.name;  //key.value     //key.treasurechest
    this.item = att.item;
    this.sing = function () {
      return `${this.name}, better have ${this.item}`;
    };
  }

  const song = new comeAtMe({
    name: 'B***',
    item: 'money'
  });

console.log(song.sing());
