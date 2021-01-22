//Qs No 1 -KilometerToMeter
function kilometerToMeter(number_kilo){
    var meter = 0;
    if(number_kilo<0){
        console.log("Negative Value's not accepted");
       
    }
    else{
         meter =number_kilo * 1000;
         return meter;
        
    }
}
console.log(kilometerToMeter(77));

//Qs no-2(budgetCalculator)

function budgetCalculator(watch, phone, laptop){
    var  watchCost,  phoneCost, laptopCost;
    watchCost = 0;
    phoneCost = 0;
    laptopCost = 0;
    if(watch>0){
        watchCost= watch*50;
    }
    if(watch<0){
        console.log("Negative Value's not accepted");
    }
    if(phone>0){
        phoneCost= phone*100;
    }
    if(phone<0){
        console.log("Negative Value's not accepted");
    }
    if(laptop>=0){
        laptopCost=laptop*500;
    }
    if(laptop<0){
        console.log("Negative Values not accepted");
    }
    var totalCost =  watchCost + phoneCost + laptopCost;
    return totalCost;
}

console.log(budgetCalculator(5, 3, 3));

//Qs no-3(hotelCost)

function hotelCost(number_of_night){
    var totalAmountNight;
    totalAmountNight = 0;
    if(number_of_night<0){
        console.log("Negative Value is not accepted");
    }
    else{
        if(number_of_night>=0 && number_of_night<=10){
            totalAmountNight = number_of_night * 100;
        }
        else if(number_of_night<=20){
            var night20 = number_of_night - 10;
            totalAmountNight = (number_of_night-night20)*100 + night20*80;
        }
        else{
            var nigth20plus = number_of_night - 20;
            totalAmountNight = (number_of_night-10-nigth20plus)*100 + (number_of_night-10-nigth20plus)*80 + nigth20plus*50;
        }
        return totalAmountNight;
    }
}
console.log(hotelCost(89));


//Qs no-4(megafriend)

function megaFriend(names){

    if(names.length>0){
        var biggestLength = "";
        for(var i=0; i<names.length; i++){
            if (names[i].length > biggestLength.length){
                biggestLength = names[i];
            }
        }
        return biggestLength;
    }
    else{
        console.log("Array is an Empty");
    }
}
var names = ["saad", "sakib", "sadi"];
var output = megaFriend(names);
console.log(output);