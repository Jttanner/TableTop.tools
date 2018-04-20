function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function calculate_rollDie(sides) {
    return getRndInteger(1, sides + 1 );
}

function rollDie(sides) {
    var rolls = parseInt(document.getElementById("ta_d" + sides).value)
    if (rolls.length < 1 || isNaN(rolls)) { //TODO: instead disable rolling 
        rolls = 1;
    } 
    var i;
    var total = 0;
    for (i = 0; i < rolls; ++i) {
        //TODO: post each roll to another result window
        var result = calculate_rollDie(sides);
        total += result;
    }
    var label_answer = "label_d" + sides + "Answer";
    var answer = document.getElementById(label_answer);
    answer.textContent = total;
}

function rollDie_ndx() {
    var rolls = document.getElementById("ta_ndx_nValue").textContent;
    var sides = parseInt(document.getElementById("ta_ndx_xValue").value);
    var result = calculate_rollDie(sides);
    var answer = document.getElementById("label_ndxAnswer")
    answer.textContent = result;
}