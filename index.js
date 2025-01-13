async function getData() {
    const response = await fetch("insert dataset");
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    let idx = 0;
    rows.forEach((elem) => {
            const row = elem.split(",");
            const XX = row[0];
            const XXX = row[1];

            XXX[idx] = XX
            XXX[idx] = XXX
            idx++;
    });
}

async function displayChart(chartId) {
    getData()
    const idName = chartId
    const ctx = document.getElementById(idName);
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: XXX , 
            datasets: [{
                label: 'insert title',
                data: XXX,
                borderColor: 'find color',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 50
                    }
                },
                
            }
        }
    });
}

displayChart("chart_one")
displayChart("chart_two")