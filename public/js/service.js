/**
 * GLOBAL VARIABLES
 */ 

const URL = 'https://flipcard.io';
const URL_GET_FLIPCARD = URL + '/api/get-flipcard'
const URL_ADD_NEW_FLIPCARD = URL + '/api/add-new-flipcard'
const URL_GET_FLIPCARD_SHUFFLED = URL + '/api/get-flipcard-shuffle'
const URL_DEL_NEW_FLIPCARD = URL + '/api/remove-flipcard'
const URL_SIGNIN = URL + '/auth/signin'
const URL_SIGNUP = URL + '/auth/signup'

let service = {
    cards: {
        set:function(username, elems){
            window.localStorage.removeItem('fc_cards_'+username)
            window.localStorage.setItem('fc_cards_'+username, JSON.stringify(elems))
        },
        get:function(username){
            return JSON.parse(window.localStorage.getItem('fc_cards_'+username))
        }
    },
    isFront: {
        init:function(){
            window.sessionStorage.setItem('fc_isFront', true)
        },
        set:function(){
            // convert string to boolean
            const isFront = (window.sessionStorage.getItem('fc_isFront') === 'true')
            if (isFront) {
                window.sessionStorage.setItem('fc_isFront', false)
            } else {
                window.sessionStorage.setItem('fc_isFront', true)
            }
        },
        get:function(){
            // convert string to boolean
            return (window.sessionStorage.getItem('fc_isFront') === 'true')
        }
    },
    curr: {
        set:function(_curr){
            window.sessionStorage.setItem('fc_curr', _curr)
        },
        get:function(){
            // convert string to int
            return parseInt(window.sessionStorage.getItem('fc_curr'))
        }
    },
    jwt: {
        set:function(_jwt){
            window.sessionStorage.setItem('fc_jwt', _jwt)
        },
        get:function(){
            return window.sessionStorage.getItem('fc_jwt')
        }
    },
    currUser: {
        set:function(_currUser){
            window.sessionStorage.setItem('fc_currUser', _currUser)
        },
        get:function(){
            return window.sessionStorage.getItem('fc_currUser')
        }
    }
}

let user = {
    username: '',
    password: ''
}

// if (window.sessionStorage.getItem('jwt')) {
//     service.jwt = window.sessionStorage.getItem('jwt')
// }

