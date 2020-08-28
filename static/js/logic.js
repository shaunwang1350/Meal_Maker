const menu = {
  _courses : {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  set appetizers(appetizersIn) {
    this._courses.appetizers = appetizersIn;
  },
  set mains(mainsIn) {
    this._courses.mains = mainsIn;
  },
  set desserts(dessertsIn) {
    this._courses.desserts = dessertsIn;
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get dessert() {
    return this._courses.dessert;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    }
  },
  addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
      name: dishName, 
      price: dishPrice,
      };
      this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
  },
  generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `The meal for today starts with ${appetizer.name}. Following, we will serve a delicious ${main.name}. At the end, we will finish with a ${dessert.name}. The total price of your meal comes out to $${totalPrice}`;
  }
};

menu.addDishToCourse('appetizers', 'Tuna TarTar', 5);
menu.addDishToCourse('appetizers', 'Chopped Salad', 4);
menu.addDishToCourse('appetizers', 'Shark Ceviche', 5);

menu.addDishToCourse('mains', 'Lamb Shank', 5);
menu.addDishToCourse('mains', 'Salmon Pizza', 10);
menu.addDishToCourse('mains', 'Pasta', 8);

menu.addDishToCourse('desserts', 'Chocolate Cake', 5);
menu.addDishToCourse('desserts', 'Espresso', 6);
menu.addDishToCourse('desserts', 'Ice Cream', 4);

const meal = menu.generateRandomMeal()
console.log(meal);
