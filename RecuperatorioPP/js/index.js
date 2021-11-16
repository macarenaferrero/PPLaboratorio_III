import { crearPublicidad } from "./dinamicas";

const $divTabla = document.getElementById("divTabla");
const anuncios = JSON.parse(localStorage.getItem("anuncios")) || [];
console.log(anuncios);

if(anuncios.length != 0){
    crearPublicidad(anuncios);
}
