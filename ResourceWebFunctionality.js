var i = setInterval(function() {
    if(document.body.style.backgroundColor === "darkred") {
    document.body.style.backgroundColor = "darkblue";
    } else {
        document.body.style.backgroundColor = "darkred";
    }
 }, 1000);

function command() {
let userInputValue = document.getElementById("commandInput").value;
const testBox1BackgroundColor = document.getElementById("testBox1").style.backgroundColor;
colorChanged = userInputValue.replace('/','').replace('c', '').replace('o','').replace('l','').replace('o','').replace('r','').replace(' ','');
backgroundColorChanged = userInputValue.replace('/','').replace('b', '').replace('a','').replace('c','').replace('k','').replace('g','').replace('r','').replace('o','').replace('u','').replace('n','').replace('d','').replace('-','').replace('c','').replace('o','').replace('l','').replace('o','').replace('r','').replace(' ','');
if(testBox1BackgroundColor === colorChanged) {
alert("Color Already In Use!");
}
if(userInputValue.includes("/color")) {
document.getElementById("testBox1").style.backgroundColor = colorChanged;
} else if(userInputValue.includes("/background-color")) {
document.body.style.backgroundColor = backgroundColorChanged;
} else if(userInputValue === "/background-flash off") {
    clearInterval(i);
}
}   
