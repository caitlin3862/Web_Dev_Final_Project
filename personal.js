var xValues = [];
var yValues = [];
var title = "";
const div = document.getElementById("chartSet");
const inputs = document.getElementById("inputs");

function makeChart(){
    var ctx = document.createElement("canvas");
    new Chart(ctx, {
    type: 'line',
    data: {
        labels: xValues,
        datasets: [{
        label: title,
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
    div.appendChild(ctx);
}

document.getElementById("add").addEventListener("click", function() {

    const input1 = document.createElement("input");
    input1.placeholder = "Enter x values"
    const input2 = document.createElement("input");
    input2.placeholder = "Enter y values"

    const titleInput = document.createElement("input");
    titleInput.placeholder = "Add a title"


    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";

    inputs.appendChild(input1);
    inputs.appendChild(input2);
    inputs.appendChild(titleInput);
    inputs.appendChild(submitBtn);


    submitBtn.addEventListener("click", function() {
        const value1 = input1.value;
        const value2 = input2.value;
        title = titleInput.value;
        if (value1 && value2) {
            inputs.innerHTML = ""; 
            xValues = value1.split(',');
            yValues = value2.split(',');
            console.log(xValues)
            console.log(yValues)
            console.log(title)
            makeChart()
        } else {
            alert("Please fill in both inputs. Use commas to seperate the data.");
        }
    });

});
