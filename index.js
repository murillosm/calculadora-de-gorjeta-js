function formatMoney(value) {
    value = Math.ceil(value * 100) / 100;
    value = value.toFixed(2);
    return "$ " + value;
}

function formatSplit(value) {
    if (value == 1) return value + " person";
    return value + " people";
}


function update() {
    let yourBill = Number(document.getElementById("yourBill").value);
    let tipInput = document.getElementById("tipInput").value;
    let splitInput = document.getElementById("splitInput").value;

    let tipValue = yourBill * (tipInput / 100);
    let totalWithTip = yourBill + tipValue;
    let billEach = totalWithTip / splitInput;

    document.getElementById("tipPercent").innerHTML = tipInput + "%";
    document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
    document.getElementById("totalWithTip").innerHTML = formatMoney(totalWithTip);

    document.getElementById("splitValue").innerHTML = formatSplit(splitInput);
    document.getElementById("billEach").innerHTML = formatMoney(billEach);

}
