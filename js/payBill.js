// Click button paybill s
var listdish = document.getElementById("listdish");

 function changepaybill() {
   
   var idtable = document.getElementById("paybill_select").value;

   var listpay = orders.filter(element => element.idTables == idtable);


  var stt = 1;
  var total = 0;
   listdish.innerHTML = "" ;

  listpay.forEach(order => {
      
       order.item.forEach( element => {

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
  })
  listdish.innerHTML += `     <tfoot>
                        <th scope="col" colspan="4">Total</th>
                        <th scope="col">$${total}</th>
                      </tfoot>`;
}


