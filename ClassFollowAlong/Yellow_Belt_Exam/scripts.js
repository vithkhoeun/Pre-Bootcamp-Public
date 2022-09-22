var form = document.querySelector("form");
var cart = document.querySelector('span');

// Pop-up alert after 20 seconds
setTimeout(function(){
    alert("Get 15% off now using promo code ILoveJS25")
}, 10000)

// When the user clicks "Search", an alert pops up with the text that is typed in the search bar (add line 1 var form)

function searchAlert(event){
    event.preventDefault();
    var searchForm = new FormData(form);
    alert(searchForm.get("search-Bar"));
}

form.addEventListener('submit', searchAlert)

// Anytime someone click on "Add to Cart" buyton the shopping cart number increments (added line 2 in this js)

// REWATCH VIDEO 1hr 20min in
function increaseCart(){
    var cartAmount = parseInt(cart.innerText);
    cart.innerText = cartAmount + 1
}