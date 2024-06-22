function getBills() {

  fetch("http://localhost:3000/bills")
    .then((response) => response.json())
    .then((data) => displayBills(data))
    .catch((error) => console.error("Lỗi:", error));

}

getBills();

function displayBills (data) {

    var dataBills = [];
    data.forEach(bill => {  
        const index = dataBills.findIndex(element => element.idTable == bill.idTable);
               if(index != -1) {
                  dataBills[index].totalAmount += bill.totalAmount;
               } else {
                dataBills.push({
                  "idTable": bill.idTable,
                  "totalAmount": bill.totalAmount
                 })
               }
    });

    console.log(dataBills);
    
    var tableLabels = dataBills.map(element => `Table ${element.idTable}`);
    var totalbills = dataBills.map(element => element.totalAmount);

    console.log(tableLabels);
    console.log(totalbills);
    const ctx = document.createElement("canvas");
    document.querySelector(".bar-chart").appendChild(ctx);

    new Chart(ctx, {
        type: "bar",
        data: {
          labels: tableLabels ,
          datasets: [
            {
              label: "REVENUE TOTAL",
              data: totalbills,
              backgroundColor: "#c5487a",
              borderColor: "#c5487a",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });

      const piece = document.createElement("canvas");
    document.querySelector(".pie-chart").appendChild(piece);

    new Chart(piece, {
      type: "pie", // Use 'pie' for creating a pie chart
      data: {
        labels: tableLabels,
        datasets: [
          {
            label: "TOTAL REVENUE",
            data: totalbills,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 0, 0, 0.6)",
              "rgba(0, 255, 0, 0.6)",
              "rgba(0, 0, 255, 0.6)",
              "rgba(128, 0, 128, 0.6)",
              "rgba(0, 128, 128, 0.6)",
              "rgba(128, 128, 0, 0.6)",
              "rgba(255, 165, 0, 0.6)",
              "rgba(0, 255, 255, 0.6)",
              "rgba(255, 0, 255, 0.6)",
              "rgba(128, 0, 0, 0.6)",
              "rgba(0, 128, 0, 0.6)",
              "rgba(0, 0, 128, 0.6)",
              // You can add more colors here if needed
            ],
            borderColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 0, 0, 0.6)',
              'rgba(0, 255, 0, 0.6)',
              'rgba(0, 0, 255, 0.6)',
              'rgba(128, 0, 128, 0.6)',
              'rgba(0, 128, 128, 0.6)',
              'rgba(128, 128, 0, 0.6)',
              'rgba(255, 165, 0, 0.6)',
              'rgba(0, 255, 255, 0.6)',
              'rgba(255, 0, 255, 0.6)',
              'rgba(128, 0, 0, 0.6)',
              'rgba(0, 128, 0, 0.6)',
              'rgba(0, 0, 128, 0.6)',
              // You can add more colors here if needed
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
}