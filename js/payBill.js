// Click button paybill s
var listdish = document.getElementById("listdish");

var idbill ;
 function changepaybill() {
   
   var idtable = document.getElementById("paybill_select").value;

   idbill = idtable ;

   var listpay = orders.find(element => element.id == idtable);
    
  var stt = 1;
  var total = 0;
   listdish.innerHTML = "" ;   
       listpay.items.forEach( element => {

           var mon = dish.find(a => a.id == element.idFood);
           total += mon.price*element.quantity;
           listdish.innerHTML += `
                     <tr>
                       <th scope="row">${stt++}</th>
                       <td> <img src="${mon.img}" alt="" style="width:50px" ></td>
                       <td>${mon.name}</td>
                       <td>${element.quantity}</td>
                       <td>$${mon.price}</td>
                     </tr>
           `;
       })
  listdish.innerHTML += `     <tfoot>
                        <th scope="col" colspan="4">Total</th>
                        <th scope="col">$${total}</th>
                      </tfoot>`;
}

// reset after paypill
function paybill () {
      
    var updateTable = {
      id: idbill,
      customerName: "",
      quantity: 0,
      status: false
    }

    edit(urlTable,idbill,updateTable);

    const bill = {
      idTable : idbill,
      totalAmount: calculateTotalAmount(idbill),
      time : new Date().toISOString()
    }
    
  add(urlBill,bill);

  deleted(urlOrder,idbill);

}

function calculateTotalAmount(id) {
  var listpay = orders.find(element => element.id == id);
  var total = 0;
  listpay.items.forEach(order => {
    var mon = dish.find(a => a.id == order.idFood);
    total += mon.price * order.quantity;
  });
  return total;
}