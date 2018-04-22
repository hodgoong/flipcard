const auth = {
    signin: function (signinType) {
        if(signinType === 'guest'){
            user.username = 'guest'
            user.password = 'guest'
        }
        else{
            user.username = document.getElementById('input-id').value
            user.password = document.getElementById('input-pw').value
        }
        util.ajax('POST', URL_SIGNIN, user, function (res) {
            if (res.status === 200) {
                service.jwt.set(JSON.parse(res.responseText).jwt)
                service.currUser.set(user.username)

                util.ajax('POST', URL_GET_FLIPCARD_SHUFFLED, user, function (res) {
                    if (res.status === 200){
                        service.cards.set(user.username, JSON.parse(res.responseText))
                        service.curr.set(0)
                        service.isFront.init()
                        router.renderView()
                    }
                })
            }
            else {
                alert(JSON.parse(res.responseText).message)
            }
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