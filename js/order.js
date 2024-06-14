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
  
     var ordered = orders.find(element => element.id == idTable);

    var menu = ordered ? [...ordered.items] : [];

  // ban nay ho dat roi   
     food.forEach(element => {
         const quantity = parseInt(element.querySelector(".quantity-food").value);
          if ( quantity > 0) {
               const idFood = element.querySelector(".id-food").innerText;
               const index = menu.findIndex(element => element.idFood == idFood);
               if(index != -1) {
                  menu[index].quantity += quantity;
               } else {
                menu.push({
                  "idFood": idFood,
                  "quantity": quantity
                 })
               }
          }
     })
      if(menu.length > 0) {
  
        const order = {
          "id": idTable,
          "items" : menu
        }
        if(ordered) {
           edit(urlOrder,idTable,order);
        }else {
            add(urlOrder,order);
        }
      }
  })

function cart(id) {

  var cart =  orders.find(element => element.id == id);
  var table = document.getElementById("cart");
  var stt = 1;
  var total = 0;
   table.innerHTML = "" ;

       cart.items.forEach( element => {
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
    
  table.innerHTML += `     <tfoot>
                        <th scope="col" colspan="4">Total</th>
                        <th scope="col">$${total}</th>
                      </tfoot>`;
}