function view_flipcard() {
    const html =
        `
        <div class="card card-block d-flex" style="width: 22rem; height: 12rem; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);">
            <div>
                <a class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored float-right" style="margin-right:10px; margin-top:6px" " onclick="flipcard.favoriteFlipcard()">
                    <i class="material-icons">star</i>
                </a>
            </div>
            <div class="card-body align-items-center d-flex justify-content-center">
                <h4 id="displayText" style="font-family:Tajawal;" onClick="flipcard.flipFlipcard()">`
                + 
                    (function(){
                        let flipcards = service.cards.get(service.currUser.get())
                        if (flipcards!== null){
                            service.curr.get() === -1 ? service.curr.set(0) : null
                            if (flipcards.length > 0) {
                                if (service.isFront.get()) {
                                    return flipcards[service.curr.get()].frontside
                                } else {
                                    return flipcards[service.curr.get()].backside
                                }
                            } else {
                                return 'No cards in the DB. <br> Please add cards.'
                                console.log('fetching from local first')
                            }
                        }
                    })() 
                + 
                `</h4>
            </div>
            <div>
                <a class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored float-right" style="margin-right:10px; margin-bottom:6px" onclick="flipcard.nextFlipcard()">
                    <i class="material-icons">fast_forward</i>
                </a>
                <a class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored float-right" style="margin-right:10px; margin-bottom:6px" onclick="flipcard.flipFlipcard()">
                    <i class="material-icons">loop</i>
                </a>
            </div>
        </div>
        `

    return html
}
