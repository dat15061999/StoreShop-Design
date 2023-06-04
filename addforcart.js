let newProducts = JSON.parse(localStorage.getItem(('totalItem')));

// ------ renderCart-----
renderCart(newProducts)
function renderCart(data) {
    let html = data.map(function (product, index) {
        return `
                <tr>
                    <td>${index + 1}</td>
                    <td>
                        <div class="cart-info">
                            <img src="${product.ProductImg}" alt="">
                            <div>
                                <h3>${product.ProductName}</h3>                            
                            </div>
                        </div>
                    </td>
                    <td>
                    <select>
                    <option>${product.ProductSize[0]}</option>
                    <option>${product.ProductSize[1]}</option>
                    <option>${product.ProductSize[2]}</option>
                    <option>${product.ProductSize[3]}</option>
                    </select>
                    </td>                
                    <td><input  id='valueDetal${index}' type="number" value="${product.ProductAmount}"></td>
                    <td><strong id='priceDetal${index}'>${product.ProductTotal}</strong></td>
                    <td><button class="btn-1" onclick='deleteValue(${index})'>Delete</button></td>
                </tr>
            `;
    }).join('');
    document.getElementById('returntocart').innerHTML = html;
    updateSubtotal()
    getSubtotal()
    for (let i = 0; i < data.length; i++) {
        document.getElementById(`valueDetal${i}`).addEventListener('change', () => {
            changePrice(i)
            updateSubtotal()
            getSubtotal()
        });
    }
}

// ------change Price ------
function changePrice(index) {
    let amount = +document.getElementById(`valueDetal${index}`).value
    let prices = Number(newProducts[index].ProductPrice);
    let totalPrices = amount * prices;
    if (amount <= 0) {
        alert('Gia tri mua khong de am');
        totalPrices = 0;
    } else if (amount > 50) {
        alert('So luong hang hoa co han');
        totalPrices = 0;
    }
    newProducts[index].ProductAmount = amount;
    newProducts[index].ProductTotal = totalPrices;
    window.localStorage.setItem('totalItem', JSON.stringify(newProducts));
    document.getElementById(`priceDetal${index}`).innerText = totalPrices.toFixed(2);
}
// ----delete -----

function deleteValue(index) {
    newProducts.splice(index, 1)
    let news = localStorage.setItem('totalItem', JSON.stringify(newProducts));
    location.reload();
    renderCart(news);
}
//  ----subtotal
function updateSubtotal() {
    let subtotal = 0;
    for (let i = 0; i < newProducts.length; i++) {
        let price = Number(document.getElementById(`priceDetal${i}`).innerText);
        subtotal += price;
    }
    document.getElementById('subtotal').innerHTML = subtotal.toFixed(2);
}

for (let i = 0; i < newProducts.length; i++) {
    document.getElementById(`valueDetal${i}`).addEventListener('input', updateSubtotal);
}
// ---- math Subtotal----
function getSubtotal() {
    let total = 0;
    let priceSubtotal = +document.getElementById('subtotal').innerText;
    let priceShip = +document.getElementById('subtotal-ship').innerText;
    total = priceSubtotal + priceShip;
    document.getElementById('total').innerHTML = total;
    return total;
}
// ----- form user -----

function Userlist(index) {
    this.userObject = [];
    this.add = function (order) {
        this.userObject[index].push(order)
    }
}
function Order(products, nameuser, phoneuser, boduser, address, totallist) {
    this.products = products;
    this.nameuser = nameuser;
    this.phoneuser = phoneuser;
    this.boduser = boduser;
    this.address = address;
    this.totallist = totallist;
}

function sendOrder() {
    let username = document.getElementById('inforname').value;
    let userphone = Number(document.getElementById('inforphone').value);
    let userbod = document.getElementById('inforbod').value;
    let useraddress = document.getElementById('inforaddress').value;
    let totallist = getSubtotal();
    if (userphone < 10000000000 && userbod != '' && useraddress != '' && username != '') {
        let products = JSON.parse(localStorage.getItem('totalItem'));
        let order = new Order(products, username, userphone, userbod, useraddress, totallist);
        // let listOrder = [];
        localStorage.setItem('orderList', JSON.stringify(order));
        let userOrders = JSON.parse(localStorage.getItem('orderlist')) || [];
        userOrders.push(order);
        localStorage.setItem('orderlist', JSON.stringify(userOrders).toString());

        localStorage.removeItem('totalItem');
        let confirms = confirm('Order Successful!');
        if (confirms) {
            location.reload();
        }
    } else {
        alert(' You need to add the correct information to the form!')
    }
}
