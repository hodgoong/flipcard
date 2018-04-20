function view_manage() {
    const insertItem = function (data) {
        let result = ''
        if (data !== null){
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
        `<div>` + insertItem(service.cards) + `</div><br><br><br><br><br>`

    return html
}