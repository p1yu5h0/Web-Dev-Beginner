console.log("This is a good tutorial");

let name = "Piyush";

console.log(name+" is a good boy");

// function greet(name){
//     console.log(name + " is a good boy" );
// }

let n="Piyush",m="Raju",o = "Shayam";

// greet(n);
// greet(m);
// greet(o);

function greet(name,greettext="this is a default value"){
    console.log(greettext + " " + name);
    console.log(name + " is a good boy");
}

let greettext="Good Afternoon";

greet(n,greettext);
greet(m,greettext);
greet(o,greettext);

let p = "baburao";
greet(p);

function sum(a,b,c){
    return a+b+c;
}

console.log(sum(1,2,3));

