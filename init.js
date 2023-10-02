document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("btn").addEventListener("click", (event) => {

        event.preventDefault();

    
        const nombre = document.getElementById("na").value;
        const lastName = document.getElementById("ap").value;
        const birthday = document.getElementById("bth").value;

    

        const datos = {
            nombre: nombre,
            apellido: lastName,
            nacimiento: birthday,
        }

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.json();
        })
        .then(json => {
            console.log(json);
            alert("Datos enviados con éxito: " + JSON.stringify(json));
            
        })
        .catch(err => {
            console.log(err);
            alert("Hubo un error al enviar los datos. Por favor, revisa la consola para más detalles.");
        });
    });
});


  
  