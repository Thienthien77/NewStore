function getTables() {

  fetch("http://localhost:3000/tables")
    .then((response) => response.json())
    .then((data) => displayTables(data))
    .catch((error) => console.error("Lỗi:", error));

}


function displayTables(data) {
  var select = document.getElementById("table_select");
  var tables = document.querySelector(".tables");
  var selectpay = document.getElementById("paybill_select");

  data.forEach(element => {

    if (element.status) {
      select.innerHTML += ` <option value="${element.id}">Table ${element.id}</option> `;
      selectpay.innerHTML += ` <option value="${element.id}">Table ${element.id}</option> `;
    }
    var img = element.status ? "../img/dinner-table.png" : "../img/7268411.png";

    var button = element.status ? `   <a href="#" class="btn btn-success" onclick=addFood(${element.id})><i class="fa-solid fa-circle-plus"></i> ADD</a>
            <a href="#" class="btn btn-danger"onclick=cart(${element.id}) data-bs-toggle="modal" data-bs-target="#cardModal"><i class="fa-solid fa-cart-plus"></i> CART</a>` : `<button type="button" onclick=clickById(${element.id}) data-bs-toggle="modal" data-bs-target="#bookingTable" class="btn btn-warning text-white"><i class="fa-regular fa-calendar-plus"></i> BOOKING</button>`;

    tables.innerHTML +=
      `   <div class="col">
            <div class="card shadow p-2 mt-2">
                <p>${element.id}</p>
                  <div class="card-img">
                    <img src="${img}" class="card-img-top" alt="...">
                  </div>
                <div class="card-body">
                      ${button}
                </div>
              </div>
          </div> `;
  });
}

getTables();


var idEdit = null;

function clickById(id) {
  idEdit = id;
}

document.getElementById("btn--booking").addEventListener("click", () => {

    var customer = document.getElementById("CustomerName").value;
    var quantity = document.getElementById("quantity").value;
  
   
  
    var tableNew =
    {
      "id": idEdit,
      "customerName": customer,
      "quantity": quantity,
      "status": true
    }
    fetch(`http://localhost:3000/tables/${idEdit}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tableNew),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
  
      })
      .catch(error => console.error('Error creating post:', error));
  
  
  })


//chuyen page nut add"
function addFood(id) {

  var boxs = document.querySelectorAll(".box");
  var content = document.querySelectorAll(".left .content");
  var select = document.getElementById("table_select");

  boxs[1].style.display = "none";
  content[1].style.color = "white";

  boxs[2].style.display = "block";
  content[2].style.color = "black";

  select.value = id;
}




