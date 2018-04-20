function view_insert() {
    const html =
    `
    <div class="card" style="width: 22rem; height: 12rem; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" v-if="isVisible">
        <div class="card-body">

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Frontside</span>
                </div>
                <input id="input-frontside" type="text" class="form-control" placeholder="word...">
            </div>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Backside</span>
                </div>
                <input id="input-backside" type="text" class="form-control" placeholder="meaning...">
            </div>
        </div>
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick="flipcard.insertNewCard()">
        SUBMIT
        </button>
    </div>
    `

    return html
}
