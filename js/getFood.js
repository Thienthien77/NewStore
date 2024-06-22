function getFood() {

    fetch("http://localhost:3000/food")
      .then((response) => response.json())
      .then((data) => displayFood(data))
      .catch((error) => console.error("Lỗi:", error));

 }

 var dish = []; // dữ liệu toàn cục

 function displayFood(data) {

       var food = document.querySelector(".food");
           dish = data;

         data.forEach(element => {

            const item = document.createElement("div");

            item.classList.add("col");

             item.innerHTML =  `
             <div class="card shadow p-2 mt-2">
             <div class="box-top">
                 <p class="id-food">${element.id}</p>
                 <h5>${element.name}</h5>
                 <i class="fa-solid fa-pen-to-square"></i>
             </div>
               <div class="card-img food-img">
                 <img src="${element.img}" class="card-img-top" alt="...">
               </div>
             <h6>$${element.price}</h6>
             <div class="box-end">
                 <i class="fa-solid fa-circle-minus"></i>
                 <input type="text" value="0" class="quantity-food" >
                 <i class="fa-solid fa-circle-plus"></i>
             </div>
           </div> `;
           food.appendChild(item);
           var quantity = item.querySelector(".quantity-food");
           var plus = item.querySelector(".fa-circle-plus");
           var minus = item.querySelector(".fa-circle-minus");

           plus.addEventListener("click", () => {
               quantity.value = parseInt(quantity.value) +  1;           
           })

           minus.addEventListener("click", () => {
            if (parseInt(quantity.value) > 0 ) {
              quantity.value = parseInt(quantity.value) -  1;   
            }
          
           })
           
           
         });
 }

 getFood();