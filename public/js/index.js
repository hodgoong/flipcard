// ref: https://www.htmlgoodies.com/beyond/javascript/article.php/3724571/Using-Multiple-JavaScript-Onload-Functions.htm

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function () {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

function ajax(requestType, URL, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          callback(this.responseText);
      }
  };

  xhr.open(requestType, URL, true)
  xhr.send();
}

addLoadEvent(renderView);
addLoadEvent(nextFlipcard);