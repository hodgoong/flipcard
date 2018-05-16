function view_manage() {
    const insertItem = function (data) {
        let result = ''
        if (data.length === 0){
            result = 
            `
                <a style="width: 22rem; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);" class="list-group-item list-group-item-action">No cards in the DB. Please add cards.</a>
            `
        } 
        else if (data.length > 0){
            data.forEach(function (elem) {
                result +=
                `
                    <a style="width: 22rem; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);" onClick="(function(){flipcard.deleteFlipCard('`+ elem._id + `')})()" class="list-group-item list-group-item-action" data-mongoid="` + elem._id + `">` + elem.frontside + ' <br> ' + elem.backside + ` </a>
                `
            })
        }
        return result
    }

    const html =
        `<div>` + 
        
        insertItem(service.cards.get(service.currUser.get())) + 
        
        `</div>
        <br>
        <div style="text-align:center; width: 22rem">
            <p style="font-size: 13px;">Tap the item above to delete the data
        </div>
        <br><br><br><br><br>`

    return html
}

