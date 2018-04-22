function view_signin() {
    const html =
    `
    <div style="text-align:center; width: 22rem">
    <p style="font-size: 17px;">Welcome to <b>flipcard</b>! <b>flipcard</b> is a web version of a paper card. You can use <b>flipcard</b> for memorizing the foreign vocabulary, quotes, and anything else you need to memorize in a text base. Store the card in the cloud, and recall it from anywhere when you need it. <br>Try it with the <i>guest ID</i>!
    </div>
    <div>

        <div class="card" style="width: 22rem; height: 12rem; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5)">
            <div class="card-body">
                <div class="mb-3">
                    <input id="input-id" type="text" class="form-control" placeholder="ID   (try with 'guest' to have a look)">
                </div>
                <div class="mb-3">
                    <input id="input-pw" type="password" class="form-control" placeholder="PASSWORD (put 'guest' for the pw)">
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
            <p style="font-size: 14px;">Sign up! You only need to insert the User ID and the Password. Make it simple, so that you can remember it later easily ;)
        </div>
        <br>
    </div>
    `

    return html
}
