
export const crearTabla = (data)=>{

    const tabla = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const cabecera = document.createElement("tr");
    cabecera.style.backgroundColor = "rgb(0, 119, 170)";


    //Cargo el thead
    for (const key in data[0]) {
        
        if(key !== "id")
        {    
        const th = document.createElement("th");
        //metodo
        const contenido = document.createTextNode(key);    
        th.appendChild(contenido);
        cabecera.appendChild(th)
        }
    }
    thead.appendChild(cabecera);
    tabla.appendChild(thead);

    //Cargo el tbody
    data.forEach((element, index) => {
        const tr = document.createElement("tr");
        for (const key in element) {
            if(key === "id"){
                tr.setAttribute("data-id",element[key]);
            }
            else{            
           const td = document.createElement("td");
           td.textContent = element[key];
           tr.appendChild(td);
        }
    }
        tbody.appendChild(tr);
        if(index % 2)
        {
            tr.setAttribute("style", "background-color: #ccc");
        }
        
    });
        tabla.appendChild(tbody);

        return tabla;

}

export const crearPublicidad = (data)=>{

    const $principal = document.getElementById("principal");

    data.forEach((element, index) => {
        
        const $article = document.createElement("article");
        $article.classList.add("article");

        const $titulo = document.createElement("h3");
        $titulo.classList.add("texto");
        $titulo.textContent = element.titulo;
        $article.appendChild($titulo);

        const $descripcion = document.createElement("p");
        $descripcion.classList.add("texto");
        $descripcion.textContent = element.descripcion;
        $article.appendChild($descripcion);

        const $precio = document.createElement("p");
        $precio.classList.add("precio");
        $precio.textContent = element.precio;
        $article.appendChild($precio);

        const $ul = document.createElement("ul");
        const $lista = document.createElement("li");
        const $imagenPuerta = document.createElement("img");
        
        $imagenPuerta.setAttribute("src", "./puerta.png.png");
        $imagenPuerta.setAttribute("width", "25px");
        $imagenPuerta.setAttribute("alt", "puertas");


        $imagenPuerta.classList.add("iconos");
        $lista.appendChild($imagenPuerta);
        $ul.appendChild($lista);

        const $listaII = document.createElement("li");
        const $imagenKm = document.createElement("img");
        $imagenKm.setAttribute("src", "./km.png.png");
        $imagenKm.setAttribute("width", "25px");
        
        $imagenKm.setAttribute("alt", "km");
        $imagenKm.classList.add("iconos");
        $listaII.appendChild($imagenKm);
        $ul.appendChild($listaII);

        const $listaIII = document.createElement("li");
        const $imagenPotencia = document.createElement("img");
        $imagenPotencia.setAttribute("src", "./velocidad.png.png");
        $imagenPotencia.setAttribute("width", "25px");

        $imagenPotencia.setAttribute("alt", "potencia");
        $imagenPotencia.classList.add("iconos");
        $listaIII.appendChild($imagenPotencia);
        $ul.appendChild($listaIII);

        $article.appendChild($ul);

        const $a = document.createElement("a");
        $a.setAttribute("href", "#");
        $a.textContent = "Ver Vehiculo";

        $article.appendChild($a);

        $principal.appendChild($article);

    });
}