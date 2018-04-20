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
        if (service.curr + 1 === service.cards.length){
            service.curr = 0 
            service.cards = _.shuffle(service.cards)
            router.renderView()
        } else {
            service.curr += 1
        }
        
        if (!service.isFront)
            document.getElementById("displayText").innerHTML = service.cards[service.curr].backside
        else
            document.getElementById("displayText").innerHTML = service.cards[service.curr].frontside
    },
    favoriteFlipcard: function () {

    },
    insertNewCard() {
        const frontside_value = document.getElementById('input-frontside').value
        const backside_value = document.getElementById('input-backside').value
        const user = 'hojoong'
        const req_body = {
            frontside: frontside_value,
            backside: backside_value,
            username: user
        }

        util.ajax('POST', URL_ADD_NEW_FLIPCARD, req_body, function (res) {
            if (res !== null) {
                service.cards.push(JSON.parse(res.responseText))
                document.getElementById('input-frontside').value = null
                document.getElementById('input-backside').value = null
            }
        })
    },
    deleteFlipCard(_id) {
        if(confirm("Do you want to delete this item?")){
            // add mongo _id to request query params
            const URL = URL_DEL_NEW_FLIPCARD + "?_id=" + _id

            util.ajax('GET', URL, null, function (res) {
                if (res.status === 200) {
                    // deleting the DOM element
                    const domElem = document.querySelectorAll('[data-mongoid="' + _id + '"]')
                    domElem[0].parentNode.removeChild(domElem[0])

                    // delete the corresponding card data from the memory
                    const index = _.pluck(service.cards, '_id').indexOf(_id)
                    if (index > -1) service.cards.splice(index, 1)

                    // adjust the global variables
                    if (service.curr > service.cards.length -1)
                        service.curr = service.cards.length - 1

                    router.renderView()
                }
            })
        }
    }
}