//Pobieranie elementu
const button = document.querySelector('button');

//nasłuchiwanie na zdarzenie 
button.addEventListener('click', draw);


function draw(){
    const div = document.createElement('div');
    
    document.body.appendChild(div);
}