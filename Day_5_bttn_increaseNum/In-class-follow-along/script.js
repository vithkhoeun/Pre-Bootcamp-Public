console.log("Working");


function clicked(element){
    // console.log(element);
    element.innerText = "clicked"
}
function increaseAge(element) {
    console.log(typeof element.innerText);
    var age = parseInt(element.innerText)
    element.innerText = age += 1;
}

var header = document.querySelector("h1");
function changeHeader(){
    // header.innerText = "The header changed";
    header.remove();
}
function removeHeader(){
    header.remove();
}