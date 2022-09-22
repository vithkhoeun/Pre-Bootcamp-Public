console.log("working")

// function clicked(){
//     alert("I Love JS");
// }

function clicked(element){
    // console.log(element);
    element.innerText = "Clicked"
}

function increaseAge(element){
    // console.log(typeof element.innerText);
    var age = Number(element.innerText)
    element.innerText = age += 1
}

var header = document.querySelector("h3")
function changeHeader(){
    header.innerText = "The header changed"
    console.log(header);
    // header.remove(); (to remove header)
}

var header = document.querySelector("h4")
function removeheader(){
    header.remove();    
    // console.log(header);
}