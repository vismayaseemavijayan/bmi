function calculateBMI() {
    var height = document.getElementById("height").value
  
    var weight = document.getElementById("weight").value
  
    // console.log(height);
    // console.log(weight);
  
    //validating height and width
    if (height === "" || weight === "") {
      alert("Please enter both height and weight.")
    }else{
  
    //converting cm to m
    var hm = height / 100;
  
    //calculating BMI
    var bmi = (weight / hm ** 2).toFixed(2)
    console.log(bmi)
    var result1 = document.getElementById("result")
  
    result1.innerHTML = `YOUR BMI: ${bmi}`;
  
    if (bmi >= 18.5 && bmi <= 25.0) {
      var result2 = document.getElementById("message")
      result2.innerHTML = " You are having a healthy BMI range."
    } else if (bmi < 18.5) {
      var result3 = document.getElementById("message")
      result3.innerHTML = " You are underweight, Try to maintain a healthy weight"
    } else if (bmi >= 25.0 && bmi <= 30.0) {
      var result4 = document.getElementById("message")
      result4.innerHTML = "You are overweight."
    } else if (bmi >= 30.0 && bmi <= 35.0) {
      var result5 = document.getElementById("message")
      result5.innerHTML = " You are obese."
    } else {
      var result6 = document.getElementById("message")
      result6.innerHTML = " Please contact your doctor for further assistance because you're morbid obese"
    }
  }
  }