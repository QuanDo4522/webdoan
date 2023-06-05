let foods = [
    {
        id: 1,
        image: "./images/bánh mì.jpeg",
        name: "Bánh Mì Thịt Nướng Ông Linh",
        price: 30000,
        quantity:  1
    },
    {
        id: 2,
        image: "./images/bún ốc sườn.jpg",
        name: "Bún Ốc Sườn Ông Tân",
        price: 35000,
        quantity:  1
    },
];  

function Render(){
    let total = 0;
    foods.forEach(element => {
        total += element.price * element.quantity;
    });

    let products = document.getElementById('cart-products');
    let products_list = foods.map(element =>`
        <li class="cart-products__product">
        <div class="cart-products__inner">
            <div class="cart-products__img">
                <a href="#">
                    <img src="${element.image}" alt="${element.name}">
                </a>
            </div>
            <div class="cart-products__content">
                <div class="cart-products__content--inner">
                    <div class="cart-products__desc">
                        <a class="cart-products__name" href="#">${element.name}</a>
                        <p class="cart-products__badge"></p>
                        <p class="cart-products__actions">
                            <span class="cart-products__del">Xóa</span>
                            <span class="cart-products__buy-later">Để dành mua sau</span>
                        </p>
                    </div>
                    <div class="cart-products__details">
                        <div class="cart-products__pricess">
                            <p class="cart-products__real-prices">${element.price}đ</p>
                        </div>
                        <div class="cart-products__qty">
                            <div class="CartQty__StyledCartQty-o1bx97-0 iaIXXn">
                                <span class="qty-decrease qty-disable">-</span>
                                <label>${element.quantity}</label>
                                <span class="qty-increase ">+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
    `)
    products.innerHTML = products_list;

    // plus and minus produce
    let  remove = document.querySelectorAll('.cart-products__del');
    let minus = document.querySelectorAll(".qty-decrease");
    let plus = document.querySelectorAll(".qty-increase");

    for(let i = 0; i < remove.length; i++){
        remove[i].addEventListener('click',()=>{
            Remove(i);
        });

        plus[i].addEventListener('click', ()=>{
            UpdateQuantify(i, foods[i].quantity + 1);
        })
        
        minus[i].addEventListener('click', ()=>{
            UpdateQuantify(i, foods[i].quantity - 1);
        })
    }
    function Remove(index){
        foods.splice(index, 1);
        Render();
    }
    function UpdateQuantify(index, quantity){
        if(quantity < 1){
            return false;
        }else{
            foods[index].quantity = quantity;
            Render();
        }
    }
    // total price
    let totalPrice = document.getElementsByClassName("prices__value");
    let arr = [...totalPrice];
    for (let i=0; i<arr.length;i++) {
        if(i==1){
            arr[i].innerHTML = `${total}<i>(Đã bao gồm VAT nếu có)</i>`;
        }else{
            arr[i].innerHTML = `${total}`;
        }
    }
}
Render();
