function $(id){
    return document.getElementById(id);
}

function countVowels_click() {
    var userWord = "";
    var userVowels = "";
    
        for(;!isNaN(userWord);) {
            userWord = prompt("Enter a string or *** to exit");
        }
        
        userWord = userWord.toLowerCase();
        if (userWord == "***") {
            alert("Thanks for using the vowel counter!");
            clear();
        }
        userVowels = countVowels1(userWord);
    
    $("resultBox").value = userVowels;
    countVowels_click();
 }
    

function countVowels1(userWord) {
    var insideVowels = userWord.match(/[aeiou]/gi);
    return insideVowels.length;
}



function clear() {
    $("resultBox").value = "";
}
