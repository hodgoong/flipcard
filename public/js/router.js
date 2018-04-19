/**
 * ROUTER
 */ 

const router = {
    selectView: function (hash) {
        if (hash === '#') hash = '#flipcard'
        switch (hash) {
            case '#flipcard':
                return view_flipcard();
            case '#insert':
                return insert;
            case '#modify':
                return view_modify();
            case '#manage':
                return view_manage();
            default:
                return view_flipcard();
        }
    },
    renderView: function () {
        const hash = window.location.hash;
        document.getElementById('mainView').innerHTML = router.selectView(hash);
        document.getElementById('navBar').innerHTML = navBar;
    }
}

window.onhashchange = router.renderView;
util.addLoadEvent(router.renderView);