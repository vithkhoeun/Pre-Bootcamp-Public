
            //  Alert Timer

// setTimeout(function(){
//     alert("Get 15% off now using promo code ILoveJS25")
// }, 5000)

            // Search form, get to alert text

var form = document.querySelector("form");

function searchAlert(event){
    event.preventDefault();
    var searchForm = new FormData(form);
    alert(searchForm.get("search-bar"));
}

form.addEventListener('submit', searchAlert);

            // increase number in cart

var cart = document.querySelector("span")

function increaseCart(){
    var cartAmount = parseInt(cart.innerText);
    cart.innerText= cartAmount + 1
}