/**
 * CARD BEHAVIOR FUNCTIONS
 */

const flipcard = {
    flipFlipcard: function () {
        const currUser = service.currUser.get()
        const flipcards = service.cards.get(currUser)

        if (service.curr.get() < flipcards.length) {
            if (service.isFront.get()) {
                service.isFront.set()
                document.getElementById("displayText").innerHTML = flipcards[service.curr.get()].backside
            } else if (!service.isFront.get()) {
                service.isFront.set()
                document.getElementById("displayText").innerHTML = flipcards[service.curr.get()].frontside
            }
        }
    },
    nextFlipcard: function () {
        const currUser = service.currUser.get()
        const flipcards = service.cards.get(currUser)

        if (service.curr.get() + 1 === flipcards.length) {
            service.curr.set(0)
            service.cards.set(currUser, _.shuffle(flipcards))
            router.renderView()
        } else {
            service.curr.set(service.curr.get() + 1)
        }

        if (!service.isFront.get())
            document.getElementById("displayText").innerHTML = flipcards[service.curr.get()].backside
        else
            document.getElementById("displayText").innerHTML = flipcards[service.curr.get()].frontside
    },
    favoriteFlipcard: function () {

    },
    insertNewCard() {
        const currUser = service.currUser.get()
        const frontside_value = document.getElementById('input-frontside').value
        const backside_value = document.getElementById('input-backside').value
        const req_body = {
            frontside: frontside_value,
            backside: backside_value,
            username: currUser
        }

        util.ajax('POST', URL_ADD_NEW_FLIPCARD, req_body, function (res) {
            if (res.status === 200) {
                let flipcards = service.cards.get(currUser)
                const newCard = JSON.parse(res.responseText)
                flipcards.push(newCard)
                service.cards.set(currUser, flipcards)
                document.getElementById('input-frontside').value = null
                document.getElementById('input-backside').value = null
            }
        })
    },
    deleteFlipCard(_id) {
        if (confirm("Do you want to delete this item?")) {
            // add mongo _id to request query params
            const URL = URL_DEL_NEW_FLIPCARD + "?_id=" + _id
            const currUser = service.currUser.get()
            let flipcards = service.cards.get(currUser)

            util.ajax('GET', URL, null, function (res) {
                if (res.status === 200) {
                    // deleting the DOM element
                    const domElem = document.querySelectorAll('[data-mongoid="' + _id + '"]')
                    domElem[0].parentNode.removeChild(domElem[0])

                    // delete the corresponding card data from the memory
                    const index = _.pluck(flipcards, '_id').indexOf(_id)
                    flipcards.splice(index, 1)
                    if (index > -1) service.cards.set(currUser, flipcards)

                    // adjust the global variables
                    if (service.curr.get() > flipcards.length - 1)
                        service.curr.set(flipcards.length - 1)

                    router.renderView()
                }
            })
        }
    }
}