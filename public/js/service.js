/**
 * GLOBAL VARIABLES
 */ 

const URL = 'http://localhost:8000' // 'https://flipcard.io';
const URL_GET_FLIPCARD = URL + '/api/get-flipcard'
const URL_ADD_NEW_FLIPCARD = URL + '/api/add-new-flipcard'
const URL_GET_FLIPCARD_SHUFFLED = URL + '/api/get-flipcard-shuffle'
const URL_DEL_NEW_FLIPCARD = URL + '/api/remove-flipcard'

let service = {
    cards: {},
    isFront: true,
    curr: -1,
}

util.ajax('GET', URL_GET_FLIPCARD_SHUFFLED, null, function (res) {
    service.cards = JSON.parse(res.responseText)
})