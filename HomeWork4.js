// Exercise 1. University
// class UniversityMember {
//     constructor(name,age,role,energy = 24) {
//         this.name = name;
//         this.age = age;
//         this.role = role;
//         this.energy = energy;
//     }
//     info(){
//         return {
//             name:this.name,
//             age:this.age,
//             role:this.role,
//             energy:this.energy
//         }
//     }
// }
//
// class University {
//     constructor(teachers = [],students = []) {
//         this.teachers = teachers;
//         this.students = students;
//     }
//     addMember(member){
//         if(member.role === "teacher"){
//             this.teachers.push(member);
//         }
//         if(member.role === "student"){
//             this.students.push(member);
//         }
//     }
//     removeMember(member){
//         if(member.role === "teacher"){
//             this.teachers = this.teachers.filter(function (value) {
//                 return value !== member;
//             })
//         }
//         if(member.role === "student"){
//             this.students = this.teachers.filter(function (value) {
//                 return value !== member;
//             })
//         }
//
//     }
//     startLesson(){
//         this.teachers.forEach(function (value) {
//             value.energy = value.energy - 5;
//         })
//         this.students.forEach(function (value) {
//             value.energy = value.energy -2;
//         })
//     }
// }
//
//
// let Polytechnic = new University();
//
//
// let teacher1 = new UniversityMember("Steven","Hocking","teacher",50);
// let teacher2 = new UniversityMember("Isahak","Newton","teacher",100);
//
// let student1 = new UniversityMember("Albert","Hovhannisyan","student",100);
// let student2 = new UniversityMember("John","Wick","student",120);
//
//
//
// Polytechnic.addMember(teacher1);
// Polytechnic.addMember(teacher2);
// Polytechnic.addMember(student1);
// Polytechnic.addMember(student2);
//
// Polytechnic.startLesson();
//
// Polytechnic.removeMember(teacher1);

//Exercise 2. CoffeeShop
// class CoffeeShop {
//     constructor(name,menu,orders = []) {
//         this.name = name;
//         this.menu = menu;
//         this.orders = orders;
//     }
//     addOrder(order){
//         let check = true;
//         for (let i = 0; i < this.menu.length; i++) {
//             if(order === this.menu[i].name){
//                 this.orders.push(order);
//                 check = false;
//                  return "Order added"
//
//             }
//         }
//         if(check){
//              return ("This item is currently unavailable!");
//         }
//     }
//     fulfillOrder(){
//         if(this.orders.length === 0){
//             return "All orders have been fulfilled!";
//         }
//         for (let i = 0; i < this.orders.length; i++) {
//             return `The ${this.orders.shift()} is ready!`;
//         }
//     }
//     listOrders(){
//         if(this.orders.length !== 0){
//             return this.orders;
//         }
//         return [];
//     }
//     dueAmount(){
//         let amount = 0;
//         for (let i = 0; i < this.orders.length; i++) {
//             for (let j = 0; j < this.menu.length; j++) {
//                 if(this.orders[i] === this.menu[j].name){
//                     amount += this.menu[j].price;
//                 }
//             }
//         }
//         return amount;
//     }
//     cheapestItem(){
//         let arr = [];
//         for (let i = 0; i < this.menu.length; i++) {
//             arr.push(this.menu[i].price);
//         }
//         let min = Math.min(...arr);
//         for (let i = 0; i < this.menu.length; i++) {
//             if(this.menu[i].price === min){
//                 return this.menu[i].name;
//             }
//         }
//     }
//     drinksOnly(){
//         const drinksOnly = [];
//         for (let i = 0; i < this.menu.length; i++) {
//             if(this.menu[i].type === "drink"){
//                 drinksOnly.push(this.menu[i].name);
//             }
//         }
//         return drinksOnly;
//     }
//     foodOnly(){
//         const foodsonly = [];
//         for (let i = 0; i < this.menu.length; i++) {
//             if(this.menu[i].type === "food"){
//                 foodsonly.push(this.menu[i].name);
//             }
//         }
//         return foodsonly;
//     }
// }
//
//
//
// let menuType = [
//     {type:"drink",name:"orange juice",price:500},
//     {type:"drink",name:"orange juice",price:500},
//     {type:"food",name:" ham and cheese sandwich",price:2000},
//     {type:"food",name:"hamburger",price:3000},
//     {type:"drink",name:"cranberry juice",price:150},
//     {type:"food",name:"bacon and egg",price:2050},
//     {type:"drink",name:"pineapple juice",price:450},
//     {type:"food",name:"cinnamon roll",price:1500},
//     {type:"drink",name:"lemon iced tea",price:1000},
//     {type:"food",name:"tuna sandwich",price:1500},
//     {type:"drink",name:"vanilla chai latte",price:1500},
//     {type:"drink",name:"hot chocolate",price:100},
//     {type:"food",name:"steak",price:200},
//     {type:"drink",name:"iced coffee",price:50},
// ]
//
// let CoffeHouse = new CoffeeShop("CoffeHouse",menuType);
//
// CoffeHouse.addOrder("hot cocoa");
// CoffeHouse.addOrder("iced tea");
// CoffeHouse.addOrder("cinnamon roll");
// CoffeHouse.addOrder("iced coffee");
//
// CoffeHouse.listOrders();
//
// CoffeHouse.fulfillOrder();
// CoffeHouse.fulfillOrder();
// CoffeHouse.fulfillOrder();
//
// CoffeHouse.listOrders();
//
// CoffeHouse.dueAmount();
//
// CoffeHouse.cheapestItem();
//
// CoffeHouse.drinksOnly();
//
// CoffeHouse.foodOnly();

//Exercise 3 Abstract class
// class Abstract {
//     constructor(name,age,gender) {
//         if(new.target === Abstract){
//             throw new Error(">>>");
//         }
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
// }
//
//
// let A1 = new Abstract();

//Exercise 4 Class hierarchy
// class Character {
//     constructor(name,type,health = 100,level = 1,attack,defense) {
//         this.name = name;
//         this.type = type;
//         this.health = health;
//         this.level = level;
//         if(this.name.length < 2 || this.name.length > 10 || typeof(type) !== "string"){
//             throw new Error("...");
//         }
//         if(this.name === "Bowman"){
//             this.attack = 25;
//             this.defense = 25;
//         }
//         if(this.name === "Swordsman"){
//             this.attack = 40;
//             this.defense = 10;
//         }
//         if(this.name === "Magician"){
//             this.attack = 10;
//             this.defense = 40;
//         }
//         if(this.name === "Undead"){
//             this.attack = 25;
//             this.defense = 25;
//         }
//         if(this.name === "Zombie"){
//             this.attack = 40;
//             this.defense = 10;
//         }
//         if(this.name === "Daemon"){
//             this.attack = 10;
//             this.defense = 40;
//         }
//     }
//     levelUp(){
//         if(this.health === 0 ){
//             throw new Error("Error");
//         }
//         this.level++;
//         this.attack += 20*(this.attack/100);
//         this.defense += 20*(this.defense/100);
//         this.health = 100;
//     }
//     damage(points){
//         if(this.health >= 0){
//             this.health -= points * (1 - this.defense / 100);
//         }
//
//     }
// }
//
//
// let D1 = new Character("Daemon","good");

//Exercise 5. OOP Structure
// class City {
//     static buildings = [];
// }
//
// class Building {
//     constructor(cars = 0) {
//         this.cars = cars;
//         City.buildings.push(this);
//     }
// }
//
// class Cars {
//     constructor(type) {
//         this.type = type;
//     }
// }
//
// class PoliceCar extends Cars{
//     constructor(type = "Patrol") {
//         super(type);
//     }
// }
//
// class AmbulanceCar extends Cars{
//     constructor(type = "103") {
//         super(type);
//     }
// }
// let AmbCar = new AmbulanceCar();
// let PolCar = new PoliceCar();
//
//
// class Hospital extends Building{
//     constructor(cars = [],) {
//         super(cars);
//         for (let i = 0; i < 10; i++) {
//             this.cars.push(AmbCar);
//         }
//     }
// }
//
// class PoliceDepartment extends Building{
//     constructor(cars = [],) {
//         super(cars);
//         for (let i = 0; i < 20; i++) {
//             this.cars.push(PolCar);
//         }
//     }
// }
// const nairiHospital = new Hospital();
// const erebuniHospital = new Hospital();
// const centralPoliceDepartment = new PoliceDepartment();
//
// console.log(City.buildings);

//Exercise 6. TV Class
// class TV {
//     constructor(brand,channel = 1,volume = 50) {
//         this.brand = brand;
//         this.channel = channel;
//         this.volume = volume;
//         this.reset = function () {
//             this.channel = 1;
//             this.volume = 50;
//         }
//     }
//     volumeIncrease(){
//         if(this.volume > 100){
//             return "You can`t increase volume";
//         }
//         this.volume += 1;
//     }
//     volumeDecrease(){
//         if(this.volume < 0){
//             return "You can`t decrease volume";
//         }
//         this.volume -=1;
//     }
//     setChannel(channel){
//         if(channel < 50 && channel > 0){
//             this.channel = channel;
//         }
//     }
//     status(){
//         return `${this.brand} at channel ${this.channel}, volume ${this.volume}`
//     }
// }
//
//
// let tv1 = new TV("Panasonic",8,75);
//
// tv1.status();
// tv1.volumeIncrease();
// tv1.volumeDecrease();

//Exercise 7. Shopping Cart
// class Product {
//     constructor(name,type,price) {
//         this.name = name;
//         this.type = type;
//         this.price = price;
//     }
// }
//
// let p1 = new Product("Kleopatra","pencil",150);
//
// class ShoppingCart {
//     #count;
//     constructor(products = [],amount = 0) {
//         this.products = products;
//         this.amount = amount;
//         this.#count = 0;
//
//     }
//
//     addProduct(product){
//         this.products.push(product);
//         let count = 0;
//         for (let i = 0; i < this.products.length; i++) {
//             if(product.type === this.products[i].type && this.products[i].bonus !== true){
//                 count++;
//             }
//         }
//         if(count % 3 === 0){
//             let clonedProduct = Object.assign({},product);
//             clonedProduct.bonus = true;
//             this.products.push(clonedProduct);
//         }
//     }
//     removeProduct(product){
//         return this.products = this.products.filter(function (value) {
//             return value !== product;
//         })
//     }
//     totalPrice(){
//         let sum = 0;
//         for (let i = 0; i < this.products.length; i++) {
//             if(this.products[i].bonus !== true){
//                 sum = sum + this.products[i].price;
//             }
//         }
//         if(this.products.length >= 5){
//             sum = sum - 10*(sum/100);
//         }
//         return sum;
//     }
//     replace(productName, replacementProduct){
//         for (let i = 0; i < this.products.length; i++) {
//             if(this.products[i].name !== productName){
//                 replacementProduct = new Product(productName);
//                 this.products.push(replacementProduct);
//             }
//         }
//     }
// }
//
// let card1 = new ShoppingCart();