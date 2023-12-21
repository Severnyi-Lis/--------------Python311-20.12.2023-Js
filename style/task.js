window.onload = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI);
};
 
function calculateBMI() {
    let height = parseInt(document
            .querySelector("#height").value);

    let weight = parseInt(document
            .querySelector("#weight").value);

    let result = document.querySelector("#result");

    if (height === "" || isNaN(height)) 
        result.innerHTML = "Введите значение роста!";

    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Введите значение веса!";

    else {
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
        if (bmi < 18.6) result.innerHTML =
            `Недостаток веса : <span>${bmi}</span>`;
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `Норма : <span>${bmi}</span>`;
        else result.innerHTML =
            `Избыточный вес : <span>${bmi}</span>`;
    }
} 
function calcbmr() {
  var age = document.getElementById("age").value;
  var height_1 = document.getElementById("height_1").value;
  var weight_1 = document.getElementById("weight_1").value;
  var a = document.getElementById("a").value;

  var weight_1=parseInt(weight_1);
  var age=parseInt(age);
  var height_1= parseInt(height_1)
  if (document.getElementById('gender').checked){
   var result= ((10 * weight_1) + (6.25 * height_1) - (5 * age) + 5) * a ;
  }else if(document.getElementById('gender_2').checked){
   var result= ((10 * weight_1) + (6.25 * height_1) - (5 * age) - 161) * a;
  }
  normal.innerHTML = result;
  return result; 
}

