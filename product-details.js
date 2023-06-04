let id = +window.location.href.split('id=')[1]
console.log(id);
let html = '';
let detailElement = document.getElementById('resultProduct-detail')
products.map((product) => {
    if (product.id == id) {
        return html = `
            <div class="col-2">
                <img src="${product.image}" alt="" width="100%" id="ProductImg">                
            </div>
            <div class="col-2">
                <p>Home / ${product.type}</p>
                <h1 onchance="priceCart()">${product.name}</h1>
                <h4>$50</h4>
                <select name="" id="">
                    <option value="">--Select size</option>
                    <option value="">${product.size[0]}</option>
                    <option value="">${product.size[1]}</option>
                    <option value="">${product.size[2]}</option>
                    <option value="">${product.size[3]}</option>                   
                </select>
                <input class='valueCart' type="number" value="${product.amount}">
                <button href="" class="btn">Add To Cart</button>
                <h3>Product Details <i class="fa fa-bars"></i></h3>
                <br />
                <p>Accusantium rerum vitae eligendi ipsum consequatur id natus hic molestias accusamus tenetur quia,
                    culpa quasi modi, quam, velit maiores soluta esse aspernatur labore minus omnis provident fuga
                    debitis est? Maiores.</p>
            </div>`
    }
})
detailElement.innerHTML = html

// ------change Price-Cart-----
// function priceCart() {
//     let changePrice = document.getElementsByClassName('valueCart')

// }