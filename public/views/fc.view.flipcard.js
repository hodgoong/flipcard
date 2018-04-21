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
                        service.curr === -1 ? service.curr = 0 : null
                        if (service.cards.length > 0) {
                            if (service.isFront) {
                                return service.cards[service.curr].frontside
                            } else {
                                return service.cards[service.curr].backside
                            }
                        } else {
                            console.log('fetching from local first')
                            if (window.sessionStorage.getItem(service.currUser)){
                                if (service.isFront) {
                                    return window.sessionStorage.getItem(service.currUser)[service.curr].frontside
                                } else {
                                    return window.sessionStorage.getItem(service.currUser)[service.curr].backside
                                }
                            } else {
                                return 'No cards in the DB. <br> Please add cards.'
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
