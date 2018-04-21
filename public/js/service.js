/**
 * GLOBAL VARIABLES
 */ 

const URL = 'http://localhost:8000' // 'https://flipcard.io';
const URL_GET_FLIPCARD = URL + '/api/get-flipcard'
const URL_ADD_NEW_FLIPCARD = URL + '/api/add-new-flipcard'
const URL_GET_FLIPCARD_SHUFFLED = URL + '/api/get-flipcard-shuffle'
const URL_DEL_NEW_FLIPCARD = URL + '/api/remove-flipcard'
const URL_SIGNIN = URL + '/auth/signin'
const URL_SIGNUP = URL + '/auth/signup'

let service = {
    cards: {},
    isFront: true,
    curr: -1,
    jwt: null,
    currUser: ''
}

let user = {
    username: '',
    password: ''
}

if (window.sessionStorage.getItem('jwt')) {
    service.jwt = window.sessionStorage.getItem('jwt')
}

