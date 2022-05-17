// Code your solution in this file!

//Blocks
function distanceFromHqInBlocks(street) {
    if (street > 42) {
        return (street - 42);
    } else {
        return (42 - street);
    }
}

//Feet
function distanceFromHqInFeet(street) {
    if (street > 42) {
        return ((street - 42) * 264);
    } else {
        return ((42 - street) * 264);
    }
}

//Traveled in Feet
function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return ((start - destination) * 264);
    } else {
        return ((destination - start) * 264);
    }
}

//Fares
function calculatesFarePrice(start, destination) {
     const distanceInFeet = ((Math.abs(start - destination)) * 264);
     
     if (distanceInFeet < 400) {
        return 0;
     } else if (distanceInFeet < 2000) {
        return ((distanceInFeet - 400) * .02);
     } else if (distanceInFeet < 2500) {
        return 25;
     } else {
        return 'cannot travel that far';
     }
    }