//Qs No 1 -KilometerToMeter
function kilometerToMeter(kilometer) {
    var meter = 0;
    if (kilometer < 0) {
        return "Negative Values Not Allow"
    }
    else {
        meter = (kilometer * 1000)
    }
    return meter;
}
var meter = kilometerToMeter(77);
console.log(meter);