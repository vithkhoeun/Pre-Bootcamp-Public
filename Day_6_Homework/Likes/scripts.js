var neil = document.querySelector(".neil")
var nichole = document.querySelector(".nichole")
var jim = document.querySelector(".jim")

function increaseNeil(){
    var likeAmount = parseInt(neil.innerText);
    neil.innerText= likeAmount + 1
}
function increaseNichole(){
    var likeAmount = parseInt(nichole.innerText);
    nichole.innerText= likeAmount + 1
}
function increaseJim(){
    var likeAmount = parseInt(jim.innerText);
    jim.innerText= likeAmount + 1
}