import { crearPublicidad } from "./dinamicas.js";

const $divTabla = document.getElementById("divTabla");
const autos = JSON.parse(localStorage.getItem("autos")) || [];
console.log(autos);

if(autos.length != 0){
    crearPublicidad(autos);
}