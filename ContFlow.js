let radius = 5;
const pI = 3.1415;
const area = pI * radius * radius;
console.log(area);
//==================================================
//area=78.53750000000001
//===================================================

const areaPerPlant = 0.8;
let maxNumberOfPlant = area / areaPerPlant;

console.log(maxNumberOfPlant);

//max number of plants in growing area 98.171875

//area starting with 20 plants

//plants double in number every week

//if starting with 20 plants and plants double every week;
//scaler would be weekly multiplier

let startingPlnts = 20;

let scaler = 2;

let numOfPlantsWk1 = startingPlnts * scaler;

console.log(numOfPlantsWk1);// end of wk1 40 plants

let numOfPlantsWk2 = numOfPlantsWk1 * scaler;

console.log(numOfPlantsWk2); //80 plants

let numOfPlantsWk3 = numOfPlantsWk2 * scaler;

console.log(numOfPlantsWk3); // 160 plants


let weeklyPlants = 0;

switch( weeklyPlants) {
    case 40:
        console.log('40' + " " + 'plant, keep planting');
        break;
    case 80:
        console.log('80' + " " + 'plants, keep an eye and monitor because area is 18 plants shy of max capacity.')  ;
        break;
    case 160:  
        console.log('160' + " " + 'plants. Above planting capacity. prune, trim, uproot, monitor and maintain.');
        break;
        default:
            console.log('Please, no planting beyond end of week three. Just monitor and maintain');
}

//===============Part2=====================================================

//100 / 20 = 5 more starter gardens
console.log(area); // 78.53750000000001
//regular area for 5 more starter gardens
let newStart5 = area * 5;
console.log(newStart5); // 392.6870000000006
//wk1 = 200
//wk2 = 400
//wk3 = 800
//wk4 = 1600
//wk5 = 3200
//wk6 = 6400
//wk7 = 12800
//wk8 = 25600
//wk9 = 51200
//wk10 = 102400

let numOfNewGard = 102400 / maxNumberOfPlant;
console.log(numOfNewGard); //1043.068597803597
let totAreaNeeded = area * numOfNewGard;
console.log(totAreaNeeded); //81920 m^2

// pi.r^2 = 81920
//r = square root of (81920/pi)


//===================Part 3============
try {
    if(100 > 20) throw "Beyond capacity";
}

catch(err){
    
}
