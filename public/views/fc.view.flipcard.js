function view_flipcard() {
    const html =     
        `
        <div class="card card-block d-flex" style="width: 22rem; height: 12rem; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" v-on:click.native="flip">
            <div>
                <a class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored float-right" style="margin-right:10px; margin-top:6px" " onclick="favoriteFlipcard()">
                    <i class="material-icons">star</i>
                </a>
            </div>
            <div class="card-body align-items-center d-flex justify-content-center">
                <h4 id="displayText" style="font-family:Tajawal;"></h4>
            </div>
            <div>
                <a class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored float-right" style="margin-right:10px; margin-bottom:6px" onclick="nextFlipcard()">
                    <i class="material-icons">fast_forward</i>
                </a>
                <a class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored float-right" style="margin-right:10px; margin-bottom:6px" onclick="flipFlipcard()">
                    <i class="material-icons">loop</i>
                </a>
    
            </div>
        </div>
        `

    return html
}

function flipFlipcard(){
    if (currentFlipcard < flipcards.length){
        if(isFrontside){
            isFrontside = false
            document.getElementById("displayText").innerHTML = flipcards[currentFlipcard].backside
        } else if(!isFrontside){
            isFrontside = true
            document.getElementById("displayText").innerHTML = flipcards[currentFlipcard].frontside
        }
    }
}

function nextFlipcard(){
    console.log('nextFlipcard() triggered')
    currentFlipcard += 1
    if (currentFlipcard > flipcards.length - 1){
        document.getElementById("displayText").innerHTML = 
        `
            <a> All flipcards are reviewed. </a>
            <a href=""> Reload flipcards </a>
        `
    } else {
        if(!isFrontside)
        document.getElementById("displayText").innerHTML = flipcards[currentFlipcard].backside
    else if(isFrontside)
        document.getElementById("displayText").innerHTML = flipcards[currentFlipcard].frontside
    }
}

function favoriteFlipcard(){
    console.log('favorite')
}