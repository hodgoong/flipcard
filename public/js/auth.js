const auth = {
    signin: function () {
        user.username = document.getElementById('input-id').value
        user.password = document.getElementById('input-pw').value

        util.ajax('POST', URL_SIGNIN, user, function (res) {
            service.jwt = JSON.parse(res.responseText).jwt
            service.currUser = user.username
            window.sessionStorage.setItem('jwt', service.jwt)
            window.sessionStorage.setItem('username', service.currUser)

            util.ajax('POST', URL_GET_FLIPCARD_SHUFFLED, user, function (res) {
                service.cards = JSON.parse(res.responseText)
                window.sessionStorage.setItem(user.username, service.cards)
                router.renderView()
            })
        })
    },
    signup: function () {
        user.username = document.getElementById('input-id').value
        user.password = document.getElementById('input-pw').value

        util.ajax('POST', URL_SIGNUP, user, function (res) {
            alert(JSON.parse(res.responseText).message)
        })
    }
}