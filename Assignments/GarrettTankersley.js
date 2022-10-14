function vowelCount()

{

var string = prompt("Please enter a string", "");

if(string === "***")

{

alert("Thanks for using the vowel counter.");

}

else{

var vowels = 0;

string = string.toLowerCase();

for(i=0;i<string.length;i++)

{

if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u')

vowels++;

}

document.getElementById("output").innerHTML = "Vowel count in string "+string+" is "+vowels;

vowelCount();

}

}
