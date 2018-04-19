let flipcards = {}
let isFrontside = true
let currentFlipcard = -1

ajax('GET', 'http://localhost:8000/api/get-flipcard', function(res){
    flipcards = JSON.parse(res)
    nextFlipcard();
    console.log(flipcards)
})