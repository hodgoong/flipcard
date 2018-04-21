function view_signin() {
    const html =
    `
    <div style="text-align:center; width: 22rem">
    <p style="font-size: 17px;">Welcome to <b>flipcard.io</b>! <b>flipcard</b> is a web version of a paper card, that you used to use to memorize words. 
    </div>
    <div>

        <div class="card" style="width: 22rem; height: 12rem; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5)">
            <div class="card-body">
                <div class="mb-3">
                    <input id="input-id" type="text" class="form-control" placeholder="ID   (sign in with 'guest' to have a look)">
                </div>
                <div class="mb-3">
                    <input id="input-pw" type="password" class="form-control" placeholder="PASSWORD">
                </div>
                <div>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick="auth.signin()">
                        Sign In
                    </button>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick="auth.signup()">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
        <br>
        <div style="text-align:center; width: 22rem;">
            <p style="font-size: 17px;">Through <b>flipcard.io</b>, you will store words in the cloud, and call it back whenever you want to memorize it. Sign up, and have a try. You will like it. :)
        </div>
        <br>
    </div>
    `

    return html
}
