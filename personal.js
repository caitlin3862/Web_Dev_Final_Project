function makeChart(){
    const ct = document.createElement("canvas");
    const div = document.getElementById("chartSet");
    div.appendChild(ct);
    new Chart(ct, {
    type: 'line',
    data: {
        labels: xValues,
        datasets: [{
        label: '',
        data: yValues,
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

document.getElementById("add").addEventListener("click", function() {
    const container = document.getElementById("chartSet");

    const input1 = document.createElement("input");
    input1.placeholder = "Enter x values"
    const input2 = document.createElement("input");
    input2.placeholder = "Enter y values"

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";

    container.appendChild(input1);
    container.appendChild(input2);
    container.appendChild(submitBtn);


    submitBtn.addEventListener("click", function() {
        const value1 = input1.value;
        const value2 = input2.value;
        if (value1 && value2) {
            container.innerHTML = ""; 
            const xValues = value1.split(',');
            const yValues = value2.split(',');
            makeChart()

        } else {
            alert("Please fill in both inputs. Use commas to seperate the data.");
        }
    });

});
