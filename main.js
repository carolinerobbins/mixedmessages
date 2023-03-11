console.log("Trip Generator");
let destination = ['Hawaii', 'Lake Tahoe', 'Switzerland', 'Fiji', 'New York City', 'Sydney']
let transportation = ['walking','airplane','boat','car','train','biking']
let activity = ['diving', 'surfing','skiing','hiking','seeing a show','eating at amazing food']
function createSillyVacation(){
    let randomDest = destination[Math.floor(Math.random()*6)];
    let randomTrans = transportation[Math.floor(Math.random()*6)];
    let randomAct = activity[Math.floor(Math.random()*6)];
    console.log(`You are going on a trip to ${randomDest}. You will get there by ${randomTrans} and you will be ${randomAct}.`;
}

createSillyVacation();
