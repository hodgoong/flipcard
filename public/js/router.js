window.onhashchange = this.renderView;

function renderView(){
    const hash = window.location.hash;
    document.getElementById('mainView').innerHTML = selectView(hash);
    document.getElementById('navBar').innerHTML = navBar;
  }

function selectView(hash){
    if (hash == '#') hash = '#flipcard'
    switch(hash){
        case'#flipcard':
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
}