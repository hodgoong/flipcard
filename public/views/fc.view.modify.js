function view_modify() {
    const html =
    `
    <div class="card" style="width: 22rem; height: 12rem; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" v-if="isVisible">
        <div class="card-body">
            <h5 class="card-title">Modify</h5>
            <form action="#">
                <div>
                    <input type="text" id="sample3">
                </div>
            </form>
            <form action="#">
                <div>
                    <input type="text" id="sample3">
                </div>
            </form>
        </div>
        <button>
            <i>Modify</i>
        </button>   
    </div>
    `

    return html;
}
