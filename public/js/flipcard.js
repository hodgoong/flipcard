/**
 * CARD BEHAVIOR FUNCTIONS
 */ 

const flipcard = {
    flipFlipcard: function () {
        if (service.curr < service.cards.length) {
            if (service.isFront) {
                service.isFront = false
                document.getElementById("displayText").innerHTML = service.cards[service.curr].backside
            } else if (!service.isFront) {
                service.isFront = true
                document.getElementById("displayText").innerHTML = service.cards[service.curr].frontside
            }
        }
    },
    nextFlipcard: function () {
        ((service.curr + 1 === service.cards.length) ? service.curr = 0 : service.curr += 1)
        if (!service.isFront)
            document.getElementById("displayText").innerHTML = service.cards[service.curr].backside
        else if (service.isFront)
            document.getElementById("displayText").innerHTML = service.cards[service.curr].frontside
    },
    favoriteFlipcard: function () {
        console.log('favorite')
    }
}

