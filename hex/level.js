

// 寫出 printBmi 函式，並印出對應狀態

// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重」
// printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖」
// printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖」
// printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖」
// printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」

function printBmi(height,weight){
// let weight = 100;
// let height = 176;
let bmi =(weight / ((height / 100) * (height / 100))).toFixed(2);
console.log(bmi);
if (bmi < 18.5) {
    console.log("您的體重過輕");
}
else if (18.5 <= bmi && bmi < 24) {
    console.log("您的體重正常");
} else if (24 <= bmi && bmi < 27) {
    console.log("您的體重過重");
}
else if (27 <= bmi && bmi < 30) {
    console.log("您的體重輕度肥胖");
}
else if (30 <= bmi && bmi < 35) {
    console.log("您的體重中度肥胖");
}
else if (bmi >= 35) {
    console.log("您的體重重度肥胖");
}
else{
    console.log("您的數值輸入錯誤,請重新輸入")
}    
};

printBmi(178,20);
// console.log("您的體重過輕");
printBmi(178,70);
// console.log("您的體重正常");
printBmi(178,85);
// console.log("您的體重過重");
printBmi(178,90);
// console.log("您的體重輕度肥胖");
printBmi(178,110);
// console.log("您的體重中度肥胖");
printBmi(178,130);
// console.log("您的體重重度肥胖");
printBmi("身高","體重");
// console.log("您的數值輸入錯誤");


function printBmi(height,weight){
    // let weight = 100;
    // let height = 176;
    let bmi =(weight / ((height / 100) * (height / 100))).toFixed(2);
    let state;
    if (bmi=="Nan" || bmi<0) {
        console.log("您的數值輸入錯誤，請重新輸入,");
        return;
    }
    else if (bmi<18.5) {
        state=("overThin");
    }
    else if (bmi < 24) {
        state=("normal");
    } else if (bmi < 27) {
        state=("overWeight");
    }
    else if (bmi < 30) {
        state=("mildFat");
    }
    else if (bmi < 35) {
        state=("moderateFat");
    }
    else {
        state=("severeFat");
    } 
    }
    bmiHistoryData.push({bmi,state});
    console.log('您的體重 ${bmiStatesData[state].state}, 健康指數為${bmiStatesData[state].color}`);

    printBmi(178, 20);
    printBmi(178, 70);
    printBmi(178, 85);
    
    function showHistoryData(){
        let state=bmiHistoryData[bmiHistoryData.length-1].state;
        console.log(`您總共計算3次BMI紀錄,最後一次BMI指數為26.83,體重過重!健康指數為橙色!`);
    }

// 第二階段：請程式碼裡加入此變數，並嘗試運用此變數裡的資訊。
// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖，健康指數為黃色」
// printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖，健康指數為黑色」
// printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖，健康指數為綠色」
// printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」




// 第三階段：儲存每筆計算資料，多一個變數為 bmiHistoryData，並賦予空陣列來儲存計算物件資料，若數值輸入錯誤，則不儲存。

// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// showHistoryData() >> 印出 console.log 文字為「您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！」