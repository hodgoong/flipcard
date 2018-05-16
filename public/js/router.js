/**
 * ROUTER
 */

const router = {
    selectView: function (hash) {
        if (service.jwt.get() !== null) {
            if (hash === '#') hash = '#flipcard'
            switch (hash) {
                case '#flipcard':
                    return view_flipcard();
                case '#insert':
                    return view_insert();
                case '#modify':
                    return view_modify();
                case '#manage':
                    return view_manage();
                case '#signout':
                    location.reload()
                    window.sessionStorage.clear()
                default:
                    return view_flipcard();
            }
        } else if (service.jwt.get() === null) {
            window.location.hash = '';
            return view_signin();
        }
    },
    renderView: function () {
        const hash = window.location.hash;
        document.getElementById('mainView').innerHTML = router.selectView(hash);
        if (service.jwt.get()){
            document.getElementById('navBar').innerHTML = navBar();
        }
    }
}

window.onhashchange = router.renderView;
util.addLoadEvent(router.renderView);