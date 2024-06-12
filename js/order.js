function getOrder() {

    fetch("http://localhost:3000/orders")
      .then((response) => response.json())
      .then((data) => displayOrders(data))
      .catch((error) => console.error("Lỗi:", error));
  
  }

var orders = []; // dữ liệu toàn cục

function displayOrders(data) {
    orders = data ;
}



getOrder();

document.querySelector(".btn-order").addEventListener("click", () => {
 
    var idTable = document.getElementById("table_select").value;
  
    var food = document.querySelectorAll(".food .col");
  
    var menu = [];
     food.forEach(element => {
         const quantity = parseInt(element.querySelector(".quantity-food").value);
          if ( quantity > 0) {
               const idFood = element.querySelector(".id-food").innerText;
             menu.push({
              "idFood": idFood,
              "quantity": quantity
             })
          }
     })
      if(menu.length > 0) {
  
        const order =   {
          "idTables": idTable,
          "item" : menu
        }
      
        fetch('http://localhost:3000/orders', {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(order),
      })
      then((response) => response.json())
          .then((data) => {
              console.log('Đơn hàng đã được thêm', data);
              currenOderId++;
          })
          .catch(error => console.error('Lỗi khi thêm đơn hàng', error));
      }
  })

function cart(id) {

    console.log(dish);
  var cart =  orders.filter(element => element.idTables == id);
  var table = document.getElementById("cart");
  var stt = 1;
  var total = 0;
   table.innerHTML = "" ;

  cart.forEach(order => {
      
       order.item.forEach( element => {

           var mon = dish.find(a => a.id == element.idFood);
           total += mon.price*element.quantity;
           table.innerHTML += `
                     <tr>
                       <th scope="row">${stt++}</th>
                       <td> <img src="${mon.img}" alt="" style="height:50px" ></td>
                       <td>${mon.name}</td>
                       <td>${element.quantity}</td>
                       <td>$${mon.price}</td>
                     </tr>
           `;
       })
  })
    
  table.innerHTML += `     <tfoot>
                        <th scope="col" colspan="4">Total</th>
                        <th scope="col">$${total}</th>
                      </tfoot>`;
}