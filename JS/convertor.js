let show = false;
let data;
function showConvertor() {
    show = !show;
    if (show) {
        document.querySelector(".right").style.display = "block";
    } else {
        document.querySelector(".right").style.display = "none";
    }
}

async function getCurrencyList() {
    let res = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
    data = await res.json();
    let currencyList = Object.keys(data.rates);
    currencyList.forEach((currency) => {
        let option = document.createElement("option");
        option.value = currency;
        option.innerText = currency;
        document.getElementById("inputCurrency").appendChild(option);
        let option2 = document.createElement("option");
        option2.value = currency;
        option2.innerText = currency;
        document.getElementById("outputCurrency").appendChild(option2);
    });

}

function convert() {
    let input = document.getElementById("input").value;
    let inputCurrency = document.getElementById("inputCurrency").value;
    let outputCurrency = document.getElementById("outputCurrency").value;
    let output = input * data.rates[outputCurrency] / data.rates[inputCurrency];
    document.getElementById("output").value = output;
}
getCurrencyList();
