const calculateBtn = document.getElementById('calculateBtn');

calculateBtn.addEventListener('click', function() {
    event.preventDefault();
	const weight = document.getElementById('weightInput').value;
	const height = document.getElementById('heightInput').value / 100;
	const bmi = weight / (height * height);
	const result = document.getElementById('result');
	const bodyconditions = document.getElementById('Conditions');
	result.innerHTML = 'Your BMI is: '+bmi.toFixed(2);

    if(bmi <18.5){
      bodyconditions.innerHTML = "You are under Wight"
    } else if(bmi >18.4 && bmi < 25){
        bodyconditions.innerHTML = "You Wight are normal"
    }else{
        bodyconditions.innerHTML = "You Are Overwight"
    }
});
