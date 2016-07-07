// write a class/Constructor
// called Pokemon() that has
//
// - an init method
// - a reader method
// - a private variable
// - and a static method

// -------- BONUS
// write it a second way
// with ES6

var pokemonAttacks = {
  growl: function(){
    console.log ( this.name + ' ' + 'used growl!')
  },
  vinewhip: function(){
    console.log( this.name + ' ' + 'used vinewhip!')
  },
  tackle: function(){
    console.log( this.name + ' ' + 'used tackle!')
  }
}

var makePokemon = function(name, level, type) {
  var pokemon = {};
  pokemon.name = name;
  pokemon.level = level;
  pokemon.type = type;
  pokemon.growl = pokemonAttacks.growl;
  pokemon.vinewhip = pokemonAttacks.vinewhip;
  pokemon.tackle = pokemonAttacks.tackle;
  return pokemon;
}

var eavie = makePokemon('Eavie', 4, 'earth');
var bulbasaur = makePokemon('Bulbasaur', 12, 'earth')

eavie.tackle();
bulbasaur.vinewhip();
