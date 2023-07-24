const form = document.getElementById("myForm");
const user1={
    name:"kai",
    level:2
}
const myArr=[1,2,3,4]
console.log(myArr);
console.log(typeof(myArr));

const drinks={

}
const item1 = {
    itemName1: "拿鐵",
    itemPrice1: 150,
    itemCount1: 0,
    itemTotal1: 0,
}

const item2 = {
    itemName2: "星冰樂",
    itemPrice2: 200,
    itemCount2: 0,
    itemTotal2: 0,
}

const item3 = {
    itemName3: "每日咖啡",
    itemPrice3: 100,
    itemCount3: 0,
    itemTotal3: 0,
}

const drink={
    arr1:[1,2,3],
    err2:[5,7]
}

const itemName1 = document.getElementById("itemName1");
const itemPrice1 = document.getElementById("itemPrice1");
const itemCount1 = document.getElementById("itemCount1");
const itemTotal1 = document.getElementById("itemTotal1");

const itemName2 = document.getElementById("itemName2");
const itemPrice2 = document.getElementById("itemPrice2");
const itemCount2 = document.getElementById("itemCount2");
const itemTotal2 = document.getElementById("itemTotal2");

const itemName3 = document.getElementById("itemName3");
const itemPrice3 = document.getElementById("itemPrice3");
const itemCount3 = document.getElementById("itemCount3");
const itemTotal3 = document.getElementById("itemTotal3");

const resultBtn = document.getElementById("resultBtn");
const pResult = document.getElementById("pResult");

// form input text 放入 item1 obj data
// itemNameValue="55688";
itemName1.value = item1.itemName1;
itemPrice1.value = item1.itemPrice1;
itemCount1.value = item1.itemCount1;
itemTotal1.value = item1.itemTotal1;

itemName2.value = item2.itemName2;
itemPrice2.value = item2.itemPrice2;
itemCount2.value = item2.itemCount2;
itemTotal2.value = item2.itemTotal2;

itemName3.value = item3.itemName3;
itemPrice3.value = item3.itemPrice3;
itemCount3.value = item3.itemCount3;
itemTotal3.value = item3.itemTotal3;

form.addEventListener("submit", function (e) {
    // console.log(e);
    //預防表單重新整理的預設行為
    e.preventDefault();
    calResult = parseInt(itemPrice1.value) * parseInt(itemCount1.value);
    itemTotal1.value = calResult;
    calResult = parseInt(itemPrice2.value) * parseInt(itemCount2.value);
    itemTotal2.value = calResult;
    calResult = parseInt(itemPrice3.value) * parseInt(itemCount3.value);
    itemTotal3.value = calResult;
    total = parseInt(itemTotal1.value) + parseInt(itemTotal2.value) + parseInt(itemTotal3.value);

    pResult.innerText = "Result : " + total;
    console.log(pResult.innerText = "Result : " + total);
}
)





// const form = document.getElementById("myForm");

// const itemName1 = document.getElementById("itemName1");
// const itemPrice1 = document.getElementById("itemPrice1");
// const itemCount1 = document.getElementById("itemCount1");
// const itemTotal1 = document.getElementById("itemTotal1");

// const itemName2 = document.getElementById("itemName2");
// const itemPrice2 = document.getElementById("itemPrice2");
// const itemCount2 = document.getElementById("itemCount2");
// const itemTotal2 = document.getElementById("itemTotal2");

// const itemName3 = document.getElementById("itemName3");
// const itemPrice3 = document.getElementById("itemPrice3");
// const itemCount3 = document.getElementById("itemCount3");
// const itemTotal3 = document.getElementById("itemTotal3");

// const resultBtn = document.getElementById("resultBtn");
// const pResult = document.getElementById("pResult");

// form.addEventListener("submit",function(e){
//     // console.log(e);
//     //預防表單重新整理的預設行為
//     e.preventDefault();
//     calResult = parseInt(itemPrice1.value) * parseInt(itemCount1.value);
//     itemTotal1.value = calResult;
//     calResult = parseInt(itemPrice2.value) * parseInt(itemCount2.value);
//     itemTotal2.value = calResult;
//     calResult = parseInt(itemPrice3.value) * parseInt(itemCount3.value);
//     itemTotal3.value = calResult;
//     total = parseInt(itemTotal1.value) + parseInt(itemTotal2.value)  + parseInt(itemTotal3.value)  ;

//     pResult.innerText = "Result : " + total;
//     }
// )