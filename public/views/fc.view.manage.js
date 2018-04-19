function view_manage() {
    let insertItem = function(data){
        let result = ''
        data.forEach(function(elem){
            result += `<a href="#" class="list-group-item list-group-item-action">` + elem.frontside + ' // ' + elem.backside + `</a>`
        })
        return result
    }

    const html = 
        `<div>` + insertItem(flipcards) + `</div>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>`
  return html
}