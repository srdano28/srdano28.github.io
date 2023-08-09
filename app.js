import { data } from "./notes.js";
let controlpreguntas=false;
let StringPrevio = "";
let historial = [];

window.abrir_categoria=(cat)=>
{
    if (controlpreguntas)
    {
        let contenedor = document.querySelector("#disp");
        while (contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild);
        }    
    } 

    data.forEach(element => {
        if (element['identifier'] == cat)
        {
            let indexRespuesta=0;
            let preg = document.createElement("h1");
            preg.appendChild(document.createTextNode(element['question']));
            document.getElementById("disp").appendChild(preg);

            element['choices'].forEach(respuesta => {
                let childelement = document.createElement("h3");
                childelement.appendChild(document.createTextNode(respuesta));
                childelement.setAttribute('onclick', 'add_comment(' + indexRespuesta + ')');
                childelement.setAttribute('id', "Response" + indexRespuesta);
                document.getElementById("disp").appendChild(childelement);

                indexRespuesta++;
            })
        }
    })
    controlpreguntas=true;

}
window.add_comment=(res_index)=>
{
    let TextoRespuesta = document.querySelector("#Response" + res_index).innerText;
    StringPrevio += " " + TextoRespuesta;
    document.querySelector("#nota").value = StringPrevio;
    historial.push(TextoRespuesta);
    console.log(historial)
}
window.delete_comment=()=>
{
    historial.pop();
    StringPrevio = historial.join(" ");
    document.querySelector("#nota").value = StringPrevio;
}
window.copy_comment=()=>
{
    document.querySelector("#nota").select();
    document.execCommand('copy');
}