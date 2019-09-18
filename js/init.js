const LIST_URL = "https://api.myjson.com/bins/tpyd7";


var showSpinner = function(){
  document.getElementById("spinner-wrapper").display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").display = "none";
}

var getJSONData = function(url){
    var result = {};
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        return result;
    });
}