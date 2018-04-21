/**
 * UTILS
 */

const util = {
  ajax: function (requestType, url, content, callback) {
    var xhr = new XMLHttpRequest();

    xhr.open(requestType, url, true)
    if (service.jwt) xhr.setRequestHeader('Authorization', 'Bearer ' + service.jwt)
    if (requestType === 'POST') xhr.setRequestHeader("Content-type", "application/json")

    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        callback(this);
      }
    };
    xhr.send(JSON.stringify(content));
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