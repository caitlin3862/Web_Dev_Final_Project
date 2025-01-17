let x = [];
let y = [];

async function getData(fileName, num) {
    const response = await fetch(fileName);
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    let idx = 0;
    rows.forEach((elem) => {
        if (!(idx+1 == rows.length-1)){
            const row = elem.split(",");
            const schoolName = row[1];
            const numOfCourses = row[num];

            x[idx] = schoolName;
            y[idx] = parseInt(numOfCourses);
            idx++;
        }
    });

}

async function makeChart(idName, fileName, chartTitle, num2) {
    await getData(fileName, num2);

    const ct = document.getElementById(idName);
    new Chart(ct, {
        type: 'line',
        data: {
            labels: x,
            datasets: [{
                label: chartTitle,
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

makeChart("chart_one", "2016-2017_CS_Reports.csv", "Number of CS Courses in Schools", 2);
makeChart("chart_two", "2016-2017_CS_Reports.csv", "Number of AP CS Courses in Schools", 3);
makeChart("chart_three", "2016-2017_CS_Reports.csv", "Number of Full CS Courses in Schools", 4);
makeChart("chart_four", "2016-2017_CS_Reports.csv", "Number of Partial CS Courses in Schools", 5);


