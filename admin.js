let listProducts = JSON.parse(localStorage.getItem('listProduct'));
// --------render Cart ----
renderProducts(listProducts)
function renderProducts(data) {
    let tbles = data.map(function (product, index) {
        return `       
            <tr>
                    <td>${index + 1}</td>
                    <td>
                        <div class="cart-info">
                            <img src="${product.image}" alt="">
                            <div>
                                <h3>${product.name}</h3>                            
                            </div>
                        </div>
                    </td>
                    <td>${product.type}</td>
                    <td>
                        <small>Price: $${product.price}</small>
                    </td>                
                        <td><button class="btn" onclick="editValue(${index})">Edit</button></td>
                        <td><button class="btn" onclick="remoteValue(${index})">Remove</button></td>
                </tr>`
    })
    document.getElementById('returnProducts-admin').innerHTML = tbles.join('')
}

// -----add product ------

function addcart() {
    let id = document.getElementById('idadmin').value;
    let name = document.getElementById('idname').value;
    let price = document.getElementById('idprice').value;
    let image = document.getElementById('idiamge').value;
    let amount = document.getElementById('idamount').value;
    let total = document.getElementById('idtotal').value;
    if (!isNaN(id) && name !== '' && !isNaN(price) && !isNaN(amount) && !isNaN(total)) {
        let product = { id, name, price, image, amount, total };
        console.log(product);
        let listProducts = JSON.parse(localStorage.getItem('listProduct')) || [];
        listProducts.push(product);
        localStorage.setItem('listProduct', JSON.stringify(listProducts));
        localStorage.setItem('products', JSON.stringify(listProducts));
        let confirms = confirm('Product added to cart!');
        if (confirms) {
            renderProducts(listProducts);
            // location.reload();
        } else {
            alert('Please enter valid product information!');
        }
    }
};


// -----remote products-----
function remoteValue(index) {
    listProducts.splice(index, 1)
    renderProducts(listProducts)
}
// -----GetOder------
localStorage.setItem('products', JSON.stringify(listProducts));
// -----getoder list------
let orderlist = JSON.parse(localStorage.getItem('orderlist'))
let orderTable = document.createElement('tbody');
renderOrderList(orderlist)
function renderOrderList(data) {
    if (data.length > 0) {
        data.forEach((order, index) => {
            let html = `
                <tr style='border-top:1px solid #ff532b'>
                    <td>
                        <h3>${index + 1}.</h3>
                    </td>
                    <td>
                        <p>Name Order: <strong>${order.nameuser}</strong></p>
                    </td>
                    <td>
                        <p>Phone Order: <strong>${order.phoneuser}</strong></p>
                    </td>
                    <td>
                        <p>Address Order: <strong>${order.address}</strong></p>
                    </td>
                    <td>
                        <p>Bod Order: <strong>${order.boduser}</strong></p>
                    </td>
                </tr> `;
            let html2 = '';
            if (Array.isArray(order.products)) {
                order.products.forEach(function (product) {
                    html2
                        += `<tr>
                <td></td>
                <td><img src="${product.ProductImg}" alt=""></td>
                <td>
                    <p>Name product <h2>${product.ProductName}</h2></p>
                </td>
                <td>
                    <p>Amount <h3>${product.ProductAmount}</h3></p>
                </td>
                <td>
                    <p>Price <h3>${product.ProductTotal}$</h3></p>
                </td>`
                });
            };

            let html3 = `                 
                <tr>
                    <td colspan="4">                        
                    </td>
                    <td style='border-top:1px solid #ff532b'>
                        <p>Fee Ship <h3>$30</h3></p>
                    </td>
                </tr>
                <tr>
                <td colspan="4">                    
                </td>
                <td>
                    <p>Price Total <h3>${order.totallist}$</h3></p>
                </td>
            </tr>
                <tr> 
                    <td></td>
                    <td colspan="" id='sumit${index}'><button class="btn-1" onclick='confirmOrder(${index})'>Submit</button></td>
                    <td colspan=""><button id='done${index}'class="btn-1" onclick='confirmremote(${index})'>Done</button></td>
                </tr>`
            orderTable.innerHTML += html + html2 + html3;
        });
    };
};
let returnProducts = document.getElementById('returnproducts');
if (returnProducts.childElementCount === 0) {
    returnProducts.appendChild(orderTable);
} else {
    let newDiv = document.createElement('div');
    newDiv.appendChild(orderTable);
    returnProducts.appendChild(newDiv);
}
// ----- submit ----- 
function confirmOrder(index) {
    document.getElementById(`sumit${index}`).innerHTML = `<button id='sumit_${index}'class="btn-1" style='background:Green' onclick='confirmOrder_(${index})'>Submit</button>`
}
function confirmremote(index) {
    orderlist.splice(index, 1)
    let news2 = localStorage.setItem('orderlist', JSON.stringify(orderlist));
    location.reload();
    renderOrderList(news2);
}



















