console.log(typeof({}));
const myObject ={
    name:"amy",
    age:18,
    tel:"0912-345-678",
    isAdmin:false
}
console.log(myObject);

const myObject2={
name:"bob",
age:20,
tel:"0912-333-444",
isAdmin:true
}
console.log("myObject",myObject);
console.log(myObject.isAdmin);
console.log(myObject.name);
console.log("myOjbect2",myObject2);
console.log(myObject2.isAdmin);
console.log(myObject2["tel"]);

myObject.age=999;
console.log("myObject",myObject);
myObject.tel=55688;
console.log("55688",myObject);