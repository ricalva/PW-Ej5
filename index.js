function enviar(){
    var select = document.getElementById("Edad").value;
    //Mensaje
   //Solo letras y teclas especiales en la aja de texto 
   
    //Radio Button
    if (document.getElementById('M').checked) {
        var selectS = document.getElementById('M').value;
    }
    if (document.getElementById('F').checked) {
        var selectS = document.getElementById('F').value;
    }
    const btn = document.querySelector('#btn');
        btn.addEventListener('click', (event) => {
            let checkboxes = document.querySelectorAll('input[name="color"]:checked');
            let values = [];
            checkboxes.forEach((checkbox) => {
                values.push(checkbox.value);
            });
            //alert("\n Sus Hobbies son: " + values);
        //});
    //Mostrar Mensaje
    alert("Su nombre es: "+document.getElementById("Nombre").value+"\ntiene: "+(select)+" años"+"\nTipo de Sexo: "+(selectS))
    alert("\n Sus Hobbies son: " + values);
});
}

//Permite solo colocar letras en el input text Nombre
function Nombre() {
    if ((event.keyCode != 32) && (event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122))
     event.returnValue = false;
   }


   //Letras especiales 
function letras(e){
    var key = e.keyCode || e.which,
    tecla = String.fromCharCode(key).toLowerCase(),
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
    especiales = [8, 37, 39, 46],
    tecla_especial = false;

    for (var i in especiales) {
        if (key == especiales[i]) {
        tecla_especial = true;
        break;
        }
      }
  
      if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
      }
}
