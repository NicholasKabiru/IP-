var akanObj ={
    gender : "",
//Declaring days of the week in an array
    daysOfWeek : ["Sunday","Monday","Teusday","Wednesday","Thursday","Friday","Satuarday"],
//Names
    male_names : ["Kwasi", "Kwadwo", "Kwabena", "Kwaku","Yaw", "Koffi", "Kwame"],
    female_names : ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"], 
//Form Display Manipulation
//On click male buttons
    form_display_male : function (){
        document.getElementById("inputform").style.display = "block";
        document.getElementById("container").style.opacity = "0.2";
        akanObj.gender="male";},
//On click female buttons
    form_display_female : function (){
        document.getElementById("inputform").style.display = "block";
        document.getElementById("container").style.opacity = "0.2";
        akanObj.gender = "female";},  
    date_confirmation : function (){  
        document.getElementById("containerinfo").style.display = "flex";
        document.getElementById("inputform").style.display = "none";
        document.getElementById("container").style.display = "none";                
        var dday = document.getElementById("bday").value;
        // converting input value to date format
        bdate = new Date(dday);
        //Getting the numerical value of the day
        var numDay = bdate.getDay();       
        //getting elements
        var akanName = document.getElementById("akanname");
        //Name logic
        //Verifying input
        if(akanObj.gender == "male"){
            akanName.innerHTML = akanObj.male_names[numDay];
        }else if(akanObj.gender == "female"){
            akanName.innerHTML = akanObj.female_names[numDay];
        }else if(typeof(parseInt(akanObj.dday)) == "NaN"){
            akanName.innerHTML = "Enter a valid Date";
            alert("Insert a valid date");
        }
        document.getElementById("bday").value = "";
    },    
}
 
