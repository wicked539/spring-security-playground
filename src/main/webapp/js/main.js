(function main() {
    // make some request
    var request = new XMLHttpRequest();
    request.onload = function() {
        document.getElementById('result').textContent = this.responseText;
    };
    request.open('get', '/foobar', true);
    request.setRequestHeader('Authorization', 'Basic ' + btoa('user' + ':' + 'password'));
    request.send();
})();