let listProducts = JSON.parse(localStorage.getItem('products'));
//  ----- sort onchane select ----- 
function myFunction() {
    let changeprice = document.getElementById('myselect').value;
    if (changeprice == 'product') {
        location.reload();
    }
    if (changeprice == 'Price') {
        listProducts.sort((a, b) => a.price - b.price);
        renderProducts(listProducts);
    }
    if (changeprice == 'AZ') {
        listProducts.sort((a, b) => a.name.localeCompare(b.name));
        renderProducts(listProducts);
    }
    if (changeprice == 'ZA') {
        listProducts.sort((a, b) => b.name.localeCompare(a.name));
        renderProducts(listProducts);
    }
}

// ------rederProducts------
function renderProducts(data) {
    let tbles = data.map(function (product, index) {
        return `
    <div class="col-4">
               <img src="${product.image}" alt=""/>
                <h4>${product.name}</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-half-o"></i>
                </div>
                <p>$<span style="font-family: 'Times New Roman', Times, serif;">${product.price}</span>.00</p>
                <button class="btn-1" onclick='addtocart(${index})'>Add To Cart</button>
    </div>`
    })
    document.getElementById('returnProducts').innerHTML = tbles.join('')
}
renderProducts(listProducts)


//  ------- getObj
let listAdded = new ListCart();

let Cart = function (ProductId, ProductName, ProductImg, ProductPrice, ProductAmount, ProductSize, ProductTotal) {
    this.ProductId = ProductId;
    this.ProductName = ProductName;
    this.ProductImg = ProductImg;
    this.ProductPrice = ProductPrice;
    this.ProductAmount = ProductAmount;
    this.ProductSize = ProductSize;
    this.ProductTotal = ProductTotal;
}
function ListCart() {
    this.listCart = [];
    this.add = function (cart) {
        this.listCart.push(cart)
    }
}
// ----addtocart
function addtocart(index) {
    let productToAdd = listProducts[index];
    let checkEquals = false;
    for (let i = 0; i < listAdded.listCart.length; i++) {
        if (listAdded.listCart[i].ProductId == index) {
            listAdded.listCart[i].ProductAmount = parseInt(listAdded.listCart[i].ProductAmount)
            checkEquals = true
        }
    }

    if (!checkEquals) {
        listAdded.add(new Cart(index, productToAdd.name, productToAdd.image, productToAdd.price, productToAdd.amount, productToAdd.size, productToAdd.total));
    }
    localStorage.setItem('totalItem', JSON.stringify(listAdded.listCart))
    addToTable();
}

function addToTable() {
    let tables = renderCart(listAdded);
    document.getElementById('returntocart').innerHTML = tables.join('');
}

function renderCart(listAdded) {
    let listnew = JSON.parse(localStorage.getItem('totalItem'))

    return listnew.map(function (product, index) {
        if (listAdded.listCart.length > 0) {
            let tableproduct = document.getElementById('tableProduct');
            tableproduct.style.display = 'inline';

            return `
            <tr>
                <td>${index + 1}</td>
                <td>
                    <div class="cart-info">
                        <img src="${product.ProductImg}" alt="">                        
                        <h3>${product.ProductName}</h3>
                    </div>
                </td> 
                <td><strong style="font-family: 'Times New Roman', Times, serif;">${product.ProductPrice * product.ProductAmount}</strong></td>
                <td><button class="btn-1" onclick='deleteValue(${index})'>Delete</button></td>
            </tr>
        `;
        }
    });
}

// ------ delete-----
function deleteValue(index) {
    listAdded.listCart.splice(index, 1);
    localStorage.setItem('totalItem', JSON.stringify(listAdded.listCart))
    addToTable();
    if (listAdded.listCart.length == 0) {
        let tableproduct = document.getElementById('tableProduct');
        tableproduct.style.display = 'none';

    }

}

// ------ product-to-cart-----
let newProducts = JSON.parse(localStorage.getItem(('totalItem')));
renderCartNew()
function renderCartNew() {
    let html = newProducts.map(function (product, index) {
        return `
                <tr>
                    <td>${index + 1}</td>
                    <td>
                        <div class="cart-info">
                            <img src="${product.ProductImg}" alt="">
                            <h3>${product.ProductName}</h3>
                        </div>
                    </td>                    
                    <td><strong id='priceDetal${index}' style="font-family: 'Times New Roman', Times, serif;">${product.ProductPrice}</strong></td>
                    <td><button class="btn-1" onclick='deleteValue(${index})'>Delete</button></td>
                </tr>
            `;
    }).join('');
    document.getElementById('returntocart').innerHTML = html;
}