let x = [];
let y = [];

async function getData(fileName) {
    const response = await fetch(fileName);
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    let idx = 0;
    rows.forEach((elem) => {
        if (!(idx+1 == rows.length-1)){
            const row = elem.split(",");
            const schoolName = row[1];
            const numOfCourses = row[2];

            x[idx] = schoolName;
            y[idx] = parseInt(numOfCourses);
            idx++;
        }
    });

}

async function makeChart(idName, fileName) {
    await getData(fileName);

    const ct = document.getElementById(idName);
    new Chart(ct, {
        type: 'line',
        data: {
            labels: x,
            datasets: [{
                label: 'Number of CS Courses',
                data: y,
                borderWidth: 1,
                borderColor: 'rgb(254, 181, 197)'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 2
                    }
                }
            }
        }
    });
}

makeChart("chart_one", "2016-2017_CS_Reports.csv");
