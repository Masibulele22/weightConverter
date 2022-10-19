function weightCalculation() {

    var weightInputData = document.getElementById('weightInput').value;    

    var pounds = weightInputData * 2.20462262185;
    document.getElementById("poundsDisplay").innerHTML = pounds.toFixed(2);

    var ounces = weightInputData * 35.27396195;
    document.getElementById("ouncesDisplay").innerHTML = ounces.toFixed(2);

    var grams = weightInputData * 1000;
    document.getElementById("gramsDisplay").innerHTML = grams.toFixed(0);
};

