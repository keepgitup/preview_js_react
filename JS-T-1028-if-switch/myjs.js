function helloFun(){
// console.log("helloFun test1");
// console.log("helloFun test2");
// console.log("helloFun test3");
let spanObj=window.document.getElementById("spanID");
spanObj.innerHTML="Hello";
spanObj.style.color="lightpink";
let spanEndObj=window.document.getElementById("spanEndID");
spanEndObj.style.color="red";
}

function toggleMenu(){
    console.log("toggleMenu");
let menuObj=document.getElementById("menu");
menuObj.classList.toggle("hide");

}