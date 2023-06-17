// 1)
//создайте пустой обьект 3мя способами
const person = {}
const person3 = new Object()
const person2 = Object.create

// 2)
//создайте обьект с вашими персональными данными 
//пример: 
let obj = {
name: 'Alex',
age: 24
}
let obj2 = {
name: 'Omar',
surname:'Gamarli',
age: 13
}

// 3)
//чем является name в обьекте ниже?
let obj3 = {
name: 'Alex',
age: 24
}
// Свойством

// 4)
//чем является 'Alex' в обьекте ниже?
let obj4 = {
name: 'Alex',
age: 24
}

// Значение свойства

// 5)
//создайте пустой обьект и добавте в него данные о человеке из ткста ниже в виде ключ/значения
/*
Здравствуйте меня зовут Самуил. Я родился 4 мая 1998го года. Мне 24 года.
Я вышел победителем в конкурсе Мистер Будующее.
У меня 2 награды по высшей математике.
Я люблю много читать и много программировать.
*/

const person4 ={}
person4.name='Samui'
person4.bornmonth='4 may'
person4.bornyear='1998'
person4.year=24
person4.award=2


// 6)
//выведите в консоли значение name из обьекта
let obj5 = {
name: 'Alex',
age: 24,
isMarried: false,
hasCar: false,
hasJob: true,
job: 'Programmer',
childs: ['Hanz', 'Marry'],
awards: {
    itMaster: 'Legend rang',
    driver: 'Fast man'
}
}
console.log(obj5.name);

// 7)
//выведите в консоли значение age из обьекта
let obj6 = {
name: 'Alex',
age: 24,
isMarried: false,
hasCar: false,
hasJob: true,
job: 'Programmer',
childs: ['Hanz', 'Marry'],
awards: {
    itMaster: 'Legend rang',
    driver: 'Fast man'
}
}

console.log(obj6.age);

// 8)
//выведите в консоли значение isMarried из обьекта
let obj7 = {
name: 'Alex',
age: 24,
isMarried: false,
hasCar: false,
hasJob: true,
job: 'Programmer',
childs: ['Hanz', 'Marry'],
awards: {
    itMaster: 'Legend rang',
    driver: 'Fast man'
}
}
console.log(obj7.isMarried);


// 9)
//выведите в консоли имя первого ребенка из обьекта
let obj8 = {
name: 'Alex',
age: 24,
isMarried: false,
hasCar: false,
hasJob: true,
job: 'Programmer',
children: ['Hanz', 'Marry'],
awards: {
    itMaster: 'Legend rang',
    driver: 'Fast man'
}
}
console.log(obj8.children[0]);


// 10)
//выведите в консоли имена всех детей с помощью for из обьекта
let obj9 = {
name: 'Alex',
age: 24,
isMarried: false,
hasCar: false,
hasJob: true,
job: 'Programmer',
childs: ['Hanz', 'Marry'],
awards: {
    itMaster: 'Legend rang',
    driver: 'Fast man'
}
};
for (let i = 0; i < obj9.childs.length; i++) {
    console.log(obj9.childs[i]);
  }

// 11)
//выведите в консоли значение itMaster из обьекта
let obj10 = {
name: 'Alex',
age: 24,
isMarried: false,
hasCar: false,
hasJob: true,
job: 'Programmer',
childs: ['Hanz', 'Marry'],
awards: {
    itMaster: 'Legend rang',
    driver: 'Fast man'
}
}
console.log(obj10.awards.itMaster)


// 12)
//выведите в консоли все свойства с помощью for...in из обьекта
let obj11 = {
name: 'Alex',
age: 24,
isMarried: false,
hasCar: false,
hasJob: true,
job: 'Programmer',
childs: ['Hanz', 'Marry'],
awards: {
    itMaster: 'Legend rang',
    driver: 'Fast man'
}
}
for(let x in obj11){
    console.log(x)
    
}

// 13)
//выведите в консоли значение всех свойств с помощью for...in из обьекта
let obj12 = {
name: 'Alex',
age: 24,
isMarried: false,
hasCar: false,
hasJob: true,
job: 'Programmer',
childs: ['Hanz', 'Marry'],
awards: {
    itMaster: 'Legend rang',
    driver: 'Fast man'
}
}
for(let x in obj12){
    console.log(obj12[x])
}

// 14)
//поменяйте имя дочери на 'Linda' в обьекте ниже
let obj13 = {
name: 'Alex',
age: 24,
isMarried: false,
hasCar: false,
hasJob: true,
job: 'Programmer',
childs: ['Hanz', 'Marry'],
awards: {
    itMaster: 'Legend rang',
    driver: 'Fast man'
}
}
obj13.childs[1]='Linda'
// 15)
//поменяйте значение 'job' на 'menedjer' в обьекте ниже
let obj14 = {
name: 'Alex',
age: 24,
isMarried: false,
hasCar: false,
hasJob: true,
job: 'Programmer',
childs: ['Hanz', 'Marry'],
awards: {
    itMaster: 'Legend rang',
    driver: 'Fast man'
}
}
obj14.job='menedjer'
// 16)
//выведите в консоли значение itMaster из обьекта c помощью квадратных скобок
let obj15 = {
name: 'Alex',
age: 24,
isMarried: false,
hasCar: false,
hasJob: true,
job: 'Programmer',
childs: ['Hanz', 'Marry'],
awards: {
    itMaster: 'Legend rang',
    driver: 'Fast man'
}
}
console.log(obj14['awards']['itMaster'])

// 17)
//выведите в консоли значение name из обьекта c помощью квадратных скобок
let obj16 = {
name: 'Alex',
age: 24,
isMarried: false,
hasCar: false,
hasJob: true,
job: 'Programmer',
childs: ['Hanz', 'Marry'],
awards: {
    itMaster: 'Legend rang',
    driver: 'Fast man'
}
}
console.log(obj16['name'])

// 18)
//удалите job из обьекта и поменяйте значение hasJob на 'false'
let obj17 = {
name: 'Alex',
age: 24,
isMarried: false,
hasCar: false,
hasJob: true,
job: 'Programmer',
childs: ['Hanz', 'Marry'],
awards: {
    itMaster: 'Legend rang',
    driver: 'Fast man'
}
}
delete obj17.job
obj17.hasJob=false


// 19)
//удалите name из обьекта
let obj18 = {
name: 'Alex',
age: 24,
isMarried: false,
hasCar: false,
hasJob: true,
job: 'Programmer',
childs: ['Hanz', 'Marry'],
awards: {
    itMaster: 'Legend rang',
    driver: 'Fast man'
}
}
delete obj18.name
// 20)
//удалите job из обьекта c помощью квадратных скобок и поменяйте значение hasJob на 'false'
let obj19 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
delete obj19['job']
obj19.hasJob=false