// console.log('External JavaScript file loaded successfully.');


// a = 20;
// console.log(a);

// console.log(typeof (a));

// a = "Hello";
// console.log(a);
// console.log(typeof (a));


// let sname = "Nivin";
// console.log(sname);
// console.log(typeof (sname));


// const pi = 3.14;
// console.log(pi);
// console.log(typeof (pi));


// pi = 2.25;
// console.log(pi);



/* this is
a 
multi-line comment */

// let sname = "Nivin";

// let sname = "ziya";
// console.log(sname);
// console.log(typeof (sname));


// function greet() {
//     console.log("Hello " + sname);

//     let employee = "Ziya";
// }

// console.log(employee); // ReferenceError: employee is not defined

// greet();


// let company = "Quest";

// let company = "Quest Global"; // SyntaxError: Identifier 'company' has already been declared

// var student = "Nivin";

// var student = "Ziya"; // No error, var allows redeclaration

// let student;

// var age;

// const pi = 3.14;


// let companyName;

// let StudentRollNumber;


// let x;

// console.log(typeof x)


// let y = null;

// console.log(typeof y)


// let bigIntValue = 1234567890123456789012345678901234567890n;

// console.log(typeof bigIntValue)



// fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes",25];

// console.log(fruits);

// console.log(typeof fruits);


// let students = {'name': 'Nivin', 'age': 25, 'city': 'Kochi' };

// console.log(students);
// console.log(typeof students);



// let x = 25;

// console.log(typeof x);


// x = String(x);

// console.log(x);
// console.log(typeof x);



// console.log("abc" + 5);

// // conslole.log("5" - 5);

// console.log("5" * 5);

// console.log("20" / 5);



// a = 5;
// // a++;
// // a--;
// ++a;
// console.log(a);




// let age = 2;

// if ( age >= 18){
//     console.log("You are eligible for voting...")
// }else{
//     console.log("You are not eligible")

// }


// let input = prompt("Enter any string :")
// console.log(input)


// let result = confirm("Are you sure you want to delete this file?");
// console.log(result)



// let day = Number(prompt("Enter a number between one and seven:"));

// switch (day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid input. Please enter a number between one and seven.");
// }

// console.log(day);
// console.log(typeof day);



// for(let i=0; i <= 20; i++){ 
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }



// ()



// for (let i = 0; i <= 20; i++) {
//     console.log(i);
// }



// let i = 0;
// // entry controlled loop
// while(i <= 20){
//     console.log(i);
//     i+=2;
// }


// let i = 5;

// do{
//     console.log(i);
//     i++;
// }while(i>6); // 5>6 False



let student = 'Nivin';


// for(let i=0; i< student.length;i++){
//     console.log(student[i])
// }

// for(let i of student ){
//     console.log(i)
// }


// let fruits = ['apple','orange','banana']

// for (let f of fruits){
//     console.log(f)
// }


// let company = {
//     name:'Quest',
//     place:'calicut',
//     course : ['Python','Java','DA','DS']
// }

// // console.log(company['course'])


// for(let k in company){
//     console.log("Key:",k," value :",company[k])
    

// }



// function greet() {
//     // console.log("Hello Good morning...")
//     return "Hello good morning"
// }

// result = greet()
// console.log(result)

// console.log(greet())



// function add(a ,b ){
//     return a + b
// }

// console.log(add(20,30))
// console.log(add(5,8))




// details("Ziya");


// function details(name= "Sanika"){
//     console.log("name :",name)
// }



// const result = function add(a, b){ 
//     return a + b 
// };

// console.log(result(20,30))
// ()



// const add = (a, b) =>{ return a + b }

// console.log(add(20,30));

// result = add(30,35)

// console.log(result)


// const greet = () => {"Hello"};

// console.log(greet())



// function calculate(a, b , func){
//     return func(a , b) // add(30,50)
// }


// const largest = (a,b,c) => {
//     if (a>b && a>c){
//         return "largest number is "+a
//     }

//     else if(b > a && b>c){
//         return "largest number is "+b
//     }

//     else{
//         return "largest number is "+c
//     }
// }


// console.log(largest(300,78,99))


// const add = (a,b) => a+b;

// const multiply = (x,y) => x*y;


// console.log(calculate(30,50, add))

// console.log(calculate(30,50,multiply))



// let length = Number(prompt("Enter length:"));
// let width = Number(prompt("Enter width:"));


// const area = (length,width) => { return length * width}

// console.log(area(length,width))



// let value = Number(prompt("Enter  a number:"));

// const check = (value) => { 
//     if (value === 0){
//         return "Zero"
//     }

//     else if (value  > 0){
//         return "positive"
//     }

//     else{
//         return "Negative"
//     }
// }






// console.log(stack[2])
// console.log(stack[-1])

// console.log(stack.includes('thon'))

// console.log(stack.indexOf('p'))

// console.log(stack.lastIndexOf('p'))

// console.log(stack.startsWith('py'))

// console.log(stack.endsWith('on'))


// let stack = 'python java';

// console.log(stack.slice(6,-2))

// console.log(stack.substring(6,-2))

// console.log(stack.toUpperCase())

// console.log(stack.toLowerCase())

// console.log(stack.split('y',))
// console.log(stack.slice(2,20));

// let newstack = stack.replaceAll('python','JAVA')

// console.log(newstack)




let students = ['navaneetha','Nidhu','sanika','ziyu',[200,3000]]


let s = students.join(' ')

console.log(s)

// students.unshift('sayana', 'sree')

// console.log(students)

// console.log(students.length)

// students.splice(1,4)

// students.push('sayana')

// students.pop()

// console.log(students)

// console.log(students.length)

// console.log(students[4][1])

// console.log(students)

// console.log(typeof students)