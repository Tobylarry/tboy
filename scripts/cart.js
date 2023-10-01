let qy = document.querySelector('.qty');
let clearCart = document.querySelector('.cc');
let dett = document.querySelector('.det');
let subTotal = document.querySelector('.subTotal');
let cartItems = JSON.parse(localStorage.getItem('cart')) //get cart  items.....
let shopMore = document.querySelector('.shopMore');
let checkTrend = document.querySelector('.checkTrend');


// Display cart items.....
    if(cartItems.length > 0){
        let obj = JSON.parse(localStorage.getItem('cart'))
       
       let showItem = obj.map((item) =>{
        if(item != ','){
           return `
           <div class='it'>
           <div class='detailImg'>
           <img src="${item.image}" style='height:80px; width: 50px;' alt="image"/>
           </div>

           <div class='secondPart'>

           <div>
           <p class='nam' >${item.name}</p>
           <span>${"$" + item.price}</span>
           <span>${item.size}</span>
           </div>

           <div class='pqt'>
            <div>
            <label>Quantity</label><br>
            <p>${item.quantity}<p>
            </div>

           <div>
           <label>Price</label><br>
           <p>${"$" + item.price * item.quantity}</p> </br>
           </div>
           <button  placeholder='Remove' class='remove' value = '${item.id}'><i class="fa fa-trash-o"></i></button>
           </div>
           </div>

           </div>
    
           `
        }
        })
        dett.innerHTML = showItem;
    }

    //remove button... remove an item from shopping cart......
    let arr = document.querySelectorAll('.remove');
    for(let i = 0; i < arr.length; i++){
        let cart = JSON.parse(localStorage.getItem('cart'))
        const remov = arr[i];
        remov.addEventListener('click', function(){
            cart = cart.filter(item => item.id != remov.value)
            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload();
        })
    }


//Whe user clicks on shop more redirects to product page....
shopMore.addEventListener('click', function(){
    location.href = '../products.html'
})

//When user clicks check trend redirects to trend page.....
checkTrend.addEventListener('click', ()=>{location.href = '../trends.html'})

//clear cart.....
clearCart.addEventListener('click', function clearCartItems(){
    localStorage.setItem('cart', '[]');
    dett.innerHTML ='EMPTY CART! PLEASE PLACE AN ORDER TO PROCEED';
    subTotal.innerHTML = "Total $" + 0;
}
) 

//get order price total..... method hoisted
function getTotal(){
    let temp = cartItems.map(function(item){
        return parseInt(item.price ) * item.quantity;
    })

    let sum = temp.reduce(function(prev, next){
        return prev + next;
    }, 0);

    subTotal.innerHTML = "Total $" + sum;
}
getTotal() //Get total price......


