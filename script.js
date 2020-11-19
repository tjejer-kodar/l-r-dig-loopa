//1. Create a constant variable and set the value to be the
//   element with id "plantCards" to be able to populate the
//   HTML with more plants


//2. Here's an array with all the plant objects.
//   Feel free to add more or change the values
const plants = [
  {
    name: "Monstera",
    latinName: "Monstera deliciosa",
    light: "sunny",
    water: "when dry",
    imageURL: "./assets/monstera.jpg"
  },
  {
    name: "Moses stentavlor",
    latinName: "Maranta leuconeura",
    light: "light shadow",
    water: "regularily",
    imageURL: "./assets/maranta.jpg"
  },
  {
    name: "Coleus",
    latinName: "Solenostemon scutellarioides",
    light: "sunny",
    water: "often",
    imageURL: "./assets/coleus.jpg"
  },
  {
    name: "Ficus",
    latinName: "Ficus lyrata",
    light: "half sunny",
    water: "when dry",
    imageURL: "./assets/ficus.jpg"
  },
  {
    name: "Pilea",
    latinName: "Pilea peperomioides",
    light: "half sunny",
    water: "when dry",
    imageURL: "./assets/pilea.jpg"
  }
]

//3. Your assignment is that you should use the array above to
//   populate the element with the id plantCards. Begin with looping
//   over the array and for each plant you console.log e.g. its name.

//4. Did you get all the names written out in the console? Cool!
//   Now we can start modifying the DOM. Use the variable
//   you created in the top of this file and change its HTML so that
//   each plant gets its own card.
//   Hint! To not overwrite every card you can use += to add on the HTML
//   that's already there.

//   Hint 2! To have the same styling on these cards as the card that
//   is already there, check out what elements and class names are
//   used in the HTML file. Use the same ones for your cards and they
//   will look the same. PS. Feel free to change the styling as well!