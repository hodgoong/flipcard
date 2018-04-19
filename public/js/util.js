/**
 * UTILS
 */ 

const util = {
    ajax: function (requestType, url, callback) {
        var xhr = new XMLHttpRequest();
        console.log(url)
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                callback(this.responseText);
            }
        };
    
        xhr.open(requestType, url, true)
        xhr.send();
    },
    
    // ref: https://www.htmlgoodies.com/beyond/javascript/article.php/3724571/Using-Multiple-JavaScript-Onload-Functions.htm
    
    addLoadEvent: function (func) {
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
}