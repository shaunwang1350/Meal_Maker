const menu = {
  _courses : {
    appetizers: [],
    mains: [],
    desserts: [],
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {name:dishName, price:dishPrice};
      this._courses[courseName].push[dish];
    },
    getRandomDishFromCourse(courseName) {
      let dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length());
      return dishes[randomIndex];
    },
    generateRandomMeal(){
      let appetizer = this.getRandomDishFromCourse(appetizers);
      let main = this.getRandomDishFromCrouse(mains);
      let dessert = this.getRandomDishFromCourse(desserts);
      let totalPrice = appetizer.price + main.price + dessert.price;
      return `The price of your meal is ${totalPrice}`;
    }
  },
  set appetizers(appetizersIn) {
    this._courses.appetizers.push(appetizersIn);
  },
  set mains(mainsIn) {
    this._courses.mains.push(mainsIn);
  },
  set desserts(dessertsIn) {
    this._courses.desserts.push(dessertsIn);
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get dessert() {
    return this._courses.dessert;
  }
};

menu.addDishToCourse('appetizers', 'Tuna TarTar', 5);
menu.addDishToCourse('appetizers', 'Steak TarTar', 6);
menu.addDishToCourse('appetizers', 'Shark Ceviche', 5);
menu.addDishToCourse('appetizers', 'Tuna TarTar', 5);
