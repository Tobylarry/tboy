let image = document.querySelectorAll('.image');
let show = document.querySelector('.show');
let main = document.querySelector('.mainProduct');
let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');
let namee = document.querySelector('.name');
let price = document.querySelector('.price');
const x = document.querySelector('.x')
let minus = document.querySelector('.minus');
let addition  = document.querySelector('.addition');
let qty = document.querySelector('.qty');
let add = document.getElementById('add');
let det = document.querySelector('.det');
let notification = document.querySelector('.notification');
let size = document.querySelector('#sizes');


//SETTING GLOBAL VARIABLES SO WE CAN ACCESS THEM FROM INSIDE THE FUNCTIONS.
let value = 0;


/** image[0].addEventListener('click', function(){
    show.style.display = "block";
    main.src = "./image/blsckTop.jpg"
    img1.src = "./image/trend10.jpeg"
    img2.src = "./image/trend11.jpg"
    img3.src = "./image/trend12.jpg"
    namee.innerHTML = 'Boogy Boyz Black Tshirt';
    price.innerHTML = '$50.00 USD';
})
*/
image[1].addEventListener('click', function(){
    show.style.display = "block";
    main.src = "./image/black.JPG"
    img1.src = "./image/trend1.jpg"
    img2.src = "./image/trend2.jpg"
    img3.src = "./image/trend10.jpeg"
    namee.innerHTML = 'Boogy Boyz star cap Red';
    price.innerHTML = '$30.00 USD';
})

image[2].addEventListener('click', function(){
    show.style.display = "block";
    main.src = "./image/black.JPG"
    img1.src = "./image/trend2.jpg"
    img2.src = "./image/trend9.jpg"
    img3.src = "./image/trend10.jpeg"
    namee.innerHTML = 'Boogy Boyz star cap Blue';
    price.innerHTML = '$35.00 USD';
})

image[3].addEventListener('click', function(){
    show.style.display = "block";
    main.src = "./image/black.JPG"
    img1.src = "./image/trend7.jpg"
    img2.src = "./image/trend8.jpg"
    img3.src = "./image/trend10.jpeg"
    namee.innerHTML = 'Boogy Boyz star cap Black';
    price.innerHTML = '$30.00 USD';
})

image[4].addEventListener('click', function(){
    show.style.display = "block";
    main.src = "./image/black.JPG"
    img1.src = "./image/trend5.jpg"
    img2.src = "./image/trend6.jpg"
    img3.src = "./image/trend10.jpeg"
    namee.innerHTML = 'Boogy Boyz star cap Orange';
    price.innerHTML = '$30.00 USD';
})

x.addEventListener('click', function(){
    show.style.display = 'none';
})

minus.addEventListener('click', function(){
    if(qty.innerHTML == 0){
        qty.innerHTML = value;
    }
    else{
        value--;
        qty.innerHTML = value;
    }
})

addition.addEventListener('click', function(){
    value++;
    qty.innerHTML = value;
    add.value = 'ADD TO CART';
})


let products = JSON.parse(localStorage.getItem('products'));
let cart = JSON.parse(localStorage.getItem('cart'));


//fetch data from json file
    fetch("data.json")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        localStorage.setItem('products', JSON.stringify(data));
        if(!localStorage.getItem('cart')){
            localStorage.setItem('cart', '[]');
        }
    })


  
//ADDING THE PRODUCT IN THE CART

add.addEventListener('click', function(){
   if(qty.innerHTML == 0){
    add.value = "Add Quantity";
   }
   else{
    show.style.display = 'none';
    notification.style.display = 'block';

    let nameee  = namee.innerHTML;
    
    let product = products.find(function(product){
        return product.name == nameee;
    })

    if(cart.length == 0){
        cart.push(product);
    }
    else{
        let res = cart.find(function(element){
            return element.name == nameee;
        });
        console.log(res)
        if(res === undefined){
            cart.push(product);
        }
    }

    for(let product of cart){
        if(product.name === nameee){
            product.quantity = qty.innerHTML;
            var x = document.getElementById("sizes").selectedIndex;
            var y = document.getElementById("sizes").options;
            product.size = y[x].text;
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    value = 0;
    qty.innerHTML = 0;
  
   }
})

window.onload = function(){
    if(cart.length > 0){
        notification.style.display = 'block';
    }
}