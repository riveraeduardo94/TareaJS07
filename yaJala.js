console.log("Tarea JS-07 API Fetch");
let boton = document.getElementById("leerInternauta");

const url = 'https://reqres.in/api/users?delay=3'

boton.addEventListener("click",() =>{fetch(url)
    .then(response => response.json() )
    .then(datos => {
        let element = document.getElementById('element')
        element.innerHTML = `
        <table class="table table-dark">
                <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">/</th>
                <th scope="col">Profile picture</th>
                </tr>
                </thead>
            <table class="table table-primary">
                <thead>
                <tr>
                <th scope="col"><p>${datos.data[0].id}</p></th>
                <th scope="col"><p>${datos.data[0].first_name}</p></th>
                <th scope="col"><p>${datos.data[0].last_name}</p></th>
                <th scope="col"><p>${datos.data[0].email}</p></th>
                <th scope="col"><p><img src='https://reqres.in/img/faces/1-image.jpg' class='rounded-circle'></img></th>
                </tr>
                </thead>
                </table>
            <br>
            <table class="table table-secondary">
                <thead>
                <tr>
                <th scope="col"><p>${datos.data[1].id}</p></th>
                <th scope="col"><p>${datos.data[1].first_name}</p></th>
                <th scope="col"><p>${datos.data[1].last_name}</p></th>
                <th scope="col"><p>${datos.data[1].email}</p></th>
                <th scope="col"><img src='https://reqres.in/img/faces/2-image.jpg' class='rounded-circle'></img></th>
                </tr>
                </thead>
                </table>
            <br>
            <table class="table table-danger">
                <thead>
                <tr>
                <th scope="col"><p>${datos.data[2].id}</p></th>
                <th scope="col"><p>${datos.data[2].first_name}</p></th>
                <th scope="col"><p>${datos.data[2].last_name}</p></th>
                <th scope="col"><p>${datos.data[2].email}</p></th>
                <th scope="col"><img src='https://reqres.in/img/faces/3-image.jpg' class='rounded-circle'></img></th>
                </tr>
                </thead>
                </table>
            <br>
            <table class="table table-warning">
                <thead>
                <tr>
                <th scope="col"><p>${datos.data[3].id}</p></th>
                <th scope="col"><p>${datos.data[3].first_name}</p></th>
                <th scope="col"><p>${datos.data[3].last_name}</p></th>
                <th scope="col"><p>${datos.data[3].email}</p></th>
                <th scope="col"><img src='https://reqres.in/img/faces/4-image.jpg' class='rounded-circle'></img></th>
                </tr>
                </thead>
                </table>
            <br>
            <table class="table table-info">
                <thead>
                <tr>
                <th scope="col"><p>${datos.data[4].id}</p></th>
                <th scope="col"><p>${datos.data[4].first_name}</p></th>
                <th scope="col"><p>${datos.data[4].last_name}</p></th>
                <th scope="col"><p>${datos.data[4].email}</p></th>
                <th scope="col"><img src='https://reqres.in/img/faces/5-image.jpg' class='rounded-circle'></img></p></th>
                </tr>
                </thead>
                </table>
            <br>
            <table class="table table-light">
                <thead>
                <tr>
                <th scope="col"><p>${datos.data[5].id}</p></th>
                <th scope="col"><p>${datos.data[5].first_name}</p></th>
                <th scope="col"><p>${datos.data[5].last_name}</p></th>
                <th scope="col"><p>${datos.data[5].email}</p></th>
                <th scope="col"><img src='https://reqres.in/img/faces/6-image.jpg' class='rounded-circle'></img></th>
                </tr>
                </thead>
                </table>
            <br>
            `;
            console.log(datos)
            }
        )
    } 
);

console.log("localizado")

function localizado(){ 
let objId = document.getElementById("id");
let objFirstName = document.getElementById("first_name");
let objLastName = document.getElementById("last_name");
let objEmail = document.getElementById("email");

objId.value = localizado.id;
objFirstName.value = localizado.first_name;
objLastName.value = localizado.last_name;
objEmail.value = localizado.email;

localStorage.setItem("id", objId.value );
localStorage.setItem("first_name", objFirstName.value);
localStorage.setItem("last_name", objLastName.value);
localStorage.setItem("email", objEmail.value);
}