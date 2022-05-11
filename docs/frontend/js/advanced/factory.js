// factory pattern

function Dog(options) {
  this.name = options.name
  this.speak = function () {
    console.log(options.speak)
  }
}
function Cat(options) {
  this.name = options.name
  this.speak = function () {
    console.log(options.speak)
  }
}

function animalFactory() {
  this.animalType = Dog
  this.getPet = function (options) {
    if (options.type == "Dog") this.animalType = Dog
    if (options.type == "Cat") this.animalType = Cat
    return new this.animalType(options)
  }
}

const petStore = new animalFactory()

const pet1 = petStore.getPet({ type: "Dog", name: "tom", speak: "wof" })
const pet2 = petStore.getPet({ type: "Cat", name: "jerry", speak: "meoo" })

console.log(pet1.speak(), pet2.speak())