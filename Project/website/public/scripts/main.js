/**
 * @fileoverview
 * Provides interactions for all pages in the UI.
 *
 * @author 
 */

/** globals */
variableName = "";


/* Main */
$(document).ready(() => {
	console.log("Ready");
});


$('#searchButton').on('click', function(event){
	age = $("#age").val();
	gender = $("#gender").val();
	race = $("#race").val();

	console.log('race :', race);
	console.log('ag8e :', age);
	console.log('gender :', gender);

	num = "5.23*10^-12"
	if(gender == 'Female')
	{
		if(race == 'White')
		{
			if(age == '0 - 24')
			{
				num = ".1130"
			}
			else if(age == '25 - 34')
			{
				num = ".726"
			}
			else if(age == '35 - 44')
			{
				num = ".683"
			}
			else if(age == '45 - 54')
			{
				num = ".602"
			}
			else if(age == '55+')
			{
				num = "0.0240"
			}
		}
		else if(race == 'Black')
		{
			if(age == '0 - 24')
			{
				num = "0.0960"
			}
			else if(age == '25 - 34')
			{
				num = ".619"
			}
			else if(age == '35 - 44')
			{
				num = ".581"
			}
			else if(age == '45 - 54')
			{
				num = ".415"
			}
			else if(age == '55+')
			{
				num = "0.0200"
			}
		}
		else if(race == 'Hispanic')
		{
			if(age == '0 - 24')
			{
				num = "0.0520"
			}
			else if(age == '25 - 34')
			{
				num = ".335"
			}
			else if(age == '35 - 44')
			{
				num = ".313"
			}
			else if(age == '45 - 54')
			{
				num = ".277"
			}
			else if(age == '55+')
			{
				num = ".110"
			}
		}
	}
	if(gender == 'Male')
	{
		if(race == 'White')
		{
			if(age == '0 - 24')
			{
				num = ".246"
			}
			else if(age == '25 - 34')
			{
				num = "1.587"
			}
			else if(age == '35 - 44')
			{
				num = "1.489"
			}
			else if(age == '45 - 54')
			{
				num = "1.314"
			}
			else if(age == '55+')
			{
				num = ".522"
			}
		}
		else if(race == 'Black')
		{
			if(age == '0 - 24')
			{
				num = ".209"
			}
			else if(age == '25 - 34')
			{
				num = "1.352"
			}
			else if(age == '35 - 44')
			{
				num = "1.269"
			}
			else if(age == '45 - 54')
			{
				num = "1.119"
			}
			else if(age == '55+')
			{
				num = ".444"
			}
		}
		else if(race == 'Hispanic')
		{
			if(age == '0 - 24')
			{
				num = ".113"
			}
			else if(age == '25 - 34')
			{
				num = ".730"
			}
			else if(age == '35 - 44')
			{
				num = ".684"
			}
			else if(age == '45 - 54')
			{
				num = ".604"
			}
			else if(age == '55+')
			{
				num = ".24"
				
			}
		}
	}

	$("#modal-body").html("You are "+num+" times more likely to overdose on opioids compared to the average individual.");



});
