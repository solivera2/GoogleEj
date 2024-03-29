var categoriesArray = [];

function showCategoriesList(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let category = array[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + category.imgSrc + `" alt=" " class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ category.name +`</h4>
                        <small class="text-muted">` + category.productCount + ` artículos</small>
                    </div>
                <p>`+ category.description +`</p>
                </div>
            </div>
        </div>
        `

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
}

function nombre(){
    var name = sessionStorage.getItem('usuario');
    let contenido = "";
    contenido += `
    <h2>Listado</h2>
    <p> ` + name + ` </p>
    <input type="button" onclick="signOut();">
    `

    document.getElementById("titulo").innerHTML = contenido;
}
function signOut() {
    /*var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });*/
    window.location.href = "https://solivera2.github.io/GoogleEj/ejercicio1/login.html";
  }

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(LIST_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data;
            //Muestro las categorías ordenadas
            showCategoriesList(categoriesArray);
        }
    });
    nombre();
});

