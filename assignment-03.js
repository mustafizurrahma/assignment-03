// System to convert kilometers to meters via JavaScript 

function kilomiterTomiters(meter) {
    var kiloMiter = meter * 1000;
    return kiloMiter;
}
var totalMiter = kilomiterTomiters(1);
console.log(totalMiter);

// System to convert kilometers to meters via JavaScript


// Budget Calculator

function budgetCalculator(watch, mobile, laptop) {
    watch = watch * 50;
    mobile = mobile * 100;
    laptop = laptop * 500;
    var total = watch + mobile + laptop;
    return total;
}
var totalBudget = budgetCalculator(1, 2, 3);
console.log(totalBudget);

// Budget Calculator


// Hotel Er Total Cost

function hotelTotalCost(perDay) {
    var dailyCost = 0;

    if (perDay <= 10) {
        dailyCost = perDay * 100;
    } else if (perDay <= 20) {
        var firstPert = 10 * 100;
        var remaining = perDay - 10
        var secondPert = remaining * 80;
        dailyCost = firstPert + secondPert;
    } else {
        var firstPert = 10 * 100;
        var remaining = perDay - 10
        var secondPert = remaining * 50;
        dailyCost = firstPert + secondPert;
    }

    return dailyCost;
}

var totalCost = hotelTotalCost(50);
console.log(totalCost);

// Hotel Er Total Cost


//Mega Friend List
var myFriendList = ['mustafizur', 'rayek', 'monyr', 'arafat', 'sohan', 'rakibul', 'anis', 'nayem', 'shuvoKhan'];
var frinds = '';

function megaFriend(frinds) {
    for (var i = 0; i < myFriendList.length; i++) {

        if (myFriendList[i].length > frinds.length) {
            frinds = myFriendList[i];
        }
    }
    return frinds;
}
var myFriendList = megaFriend(myFriendList);
console.log(myFriendList);

//Mega Friend List