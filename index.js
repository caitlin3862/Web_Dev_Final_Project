let x = [];
let y = [];

async function getData() {
    const response = await fetch("index.csv");
    const data = await response.text(); 
    const rows = data.split("\n").slice(1)
    var num = 0;
    rows.forEach((elem) => {
        const row = elem.split(",");
        x[num] = row[0];
        y[num] = row[1];
    });

function makeChart(){
    const ct = document.getElementById('lineChart');
    new Chart(ct, {
    type: 'line',
    data: {
        labels: x,
        datasets: [{
        label: 'Data for Data',
        data: y,
        borderWidth: 4,
        borderColor: 'rgb(254, 181, 197)'
        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
    });
}
