// --------------1----------------,
// function format() {
//     if(string.length<=9){
//         let phoneNumber = "(" + string.slice(0, 3) +
//         ") " + string.slice(3, 6) + "-" 
//         + string.slice(6,9);
//         return alert(phoneNumber);

//     }
//     else{
//       alert('Invalid numbers')
//     }
//   }

//   const string = prompt('Enter a number');
//   format();

// -----------2----------
// function hellobye() {
//     if (pet == '1') {
//       return 'Hello ' + name.charAt(0).toUpperCase() + name.slice(1);
//     } else {
//       return 'Вуе ' + name.charAt(0).toUpperCase() + name.slice(1);
//     }
//   }

//   const name = prompt('Write a name');
//   const pet = prompt('Write a number');

// alert(hellobye())

// ----------------3-------------------
// function symmetry() {

//     const split = string.split('').reverse().join('');

//     if (string == split ) {

//         alert('true')
//     } else {
//         alert('false')

//     }
// }

// const string = prompt('Enter a palidrome');

// symmetry();

// --------------4--------------
// function countUsers() {
//     const userList = prompt('Enter a list of user names, separated by commas:');
//     const users = userList.split(',');
//     const count = users.length;

//     if (count == 0) {
//         return 'There is nobody online';
//     } else if (count == 1) {
//         return users[0] + ' is online';
//     } else if (count == 2) {
//         return users[0] + ' and ' + users[1] + ' are online';
//     } else {
//         const remain = count - 2;
//         return users[0] + ', ' + users[1] + ', and ' + remain + ' more are online';
//     }
// }

// const result = countUsers();
// alert(result);

// ----------------5----------------

// function countTrue() {
//     const tflist = prompt('Enter a list ');
//     const tf = tflist.split(',');

//     let count = 0
//     for (let i = 0; i < tf.length; i++) {
//         if (tf[i] == 'true') {
//             count++
//         }
//     }
//     return count
// }

// alert(countTrue());