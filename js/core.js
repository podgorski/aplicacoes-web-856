var cesta_frutas = [];

function adicionar_cesta(){
    //var item = document.getElementById("item").value;
    var item = $("#item").val();
    cesta_frutas.push(item);
    //alert(cesta_frutas);
    //var cesta = document.getElementById("cesta");
    //cesta.innerHTML = cesta_frutas;
    if (item === "x"){
        $("#cesta").slideUp();
    }else{
        $("#cesta")
        .append("<p id='item_" + cesta_frutas.length + "'>"+item+"</p>")
        .slideDown(3000);
    }
    

    
}



