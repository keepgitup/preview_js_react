// const nameElement=document.getElementByName("name");
// const name=nameElement.ariaValueMax;
// const emailElement=document.getElementByName("password");
// const email=emailElement.ariaValueMax;
// alert("your email is "+email+"\n password is" +password);

const form=document.getElementById("myForm");
const num1Input=document.getElementById("num1");
const num2Input=document.getElementById("num2");
const optionInput=document.getElementById("option");
const resultBtn=document.getElementById("result");
// const resultTest=document.getElementById("resulttest");
form.addEventListener("submit",function(e){
e.preventDefault();
// 加這行e.preventDefault()就是不要閃的 
// 也就是預防表單重新整理的
// console.log("submit",e);
console.log(num1Input.value);
console.log(num2Input.value);
console.log(optionInput.value);
// calResult=parseInt(numInput.value)+parseInt(num2Input.value);
// console.log(typeof(calResult));
// console.log(calResult);

// this.previousElementSibling.innerText ="Result:"+calResult;
}
)