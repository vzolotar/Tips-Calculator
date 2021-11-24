/*
 - 1.01
-
-
-
-----------------------------------------------------------------------*/

/* Variables-----------------------------------------------------------------------*/
var invalidPop = "#invalid";
var slide = { transition: "slideup" };
var answerOne = "#answerPop";

/*initialize function to calculate bmi---------------------------------------------*/
function my_tip_calc(x,y,z){
	var x;
	var y;
	var z;
	x = document.getElementById('bill');
	y = document.getElementById('percent');
	z = document.getElementById('people_num');
	/*var xSelect = selector.options[selector.options.selectedIndex].value;*/
	
	/*Form validation  **Checks to see if fields are empty, or if anything other than numbers is entered
	Returns a pop up if incorrect*/
	
	if(isNaN(x.value && y.value && z.value)){
		$.mobile.changePage(invalidPop, slide);
		return false;
		/*document.getElementById('warning').innerHTML = "This entry is not a number!";*/
	}
	if(x.value === "" || x.value === null){
		$.mobile.changePage(invalidPop, slide);
		return false;
		/*document.getElementById('warning').innerHTML = "Please enter a number!";*/
	}
	if(y.value === "" || y.value === null){
		$.mobile.changePage(invalidPop, slide);
		return false;
	}
	if(z.value === "" || z.value === null){
		$.mobile.changePage(invalidPop, slide);
		return false;
	}
	/*End Form validation---------------------------------------------------------*/
	
	/* This checks to see which selection is made and performs correct calculation */

	
	/* This checks to see which selection is made and performs correct calculation */
	
	/*	answer = 26825.84;*/
tip_amt = ((x.value/100)*y.value); 		
total_amt = x.value*1+((x.value/100)*y.value); 
per_person_amt = ((x.value*1+((x.value/100)*y.value))/z.value);

		
	/* End form selection--------------------------------------------------------- */
	
	/*Creates pop up answer window, and displays output */
	$.mobile.changePage(answerOne, slide);
/*	document.getElementById('answer').innerHTML = answer;*/
	document.getElementById('tip_amt').innerHTML = tip_amt.toFixed(2);
	document.getElementById('total_amt').innerHTML = total_amt.toFixed(2);
	document.getElementById('per_person_amt').innerHTML = per_person_amt.toFixed(2);
	return false;
	/*End------------------------------------------------------------------------- */
	
	/*Checks the output and determines Level of BMI------------------------------  */
/*	if(answer <= 15.99){
		document.getElementById('answerOut').innerHTML = "F5.6 - F8 - F11, Shutter 30, ISO 200"
		
		return false;
	}
	if(answer >= 16.00 && answer <= 16.99){
		document.getElementById('answerOut').innerHTML = "Moderate Thinness";	
		
		
		return false;		
	}
	if(answer >= 17.00 && answer <= 18.49){
		document.getElementById('answerOut').innerHTML = "Mild Thinness";
		
		
		return false;
	}
	if(answer >= 18.50 && answer <= 24.99){
		document.getElementById('answerOut').innerHTML = "Normal Weight";
			
		return false;
	}
	if(answer >= 25.00 && answer <= 29.99){
		document.getElementById('answerOut').innerHTML = "Overweight";	
		return false;
	}
	if(answer >= 30.00 && answer <= 34.99){
		document.getElementById('answerOut').innerHTML = "Obese Class I";	
		return false;
	}
	if(answer >= 35.00 && answer <= 39.99){
		document.getElementById('answerOut').innerHTML = "Obese Class II";	
		return false;
	}	
	if(answer >= 40.0){
		document.getElementById('answerOut').innerHTML = "Obese Class III";	
		return false;
	}              */
	/*End Check----------------------------------------------------------------  */
		
}
/*End bmiE function--------------------------------------------------------------*/
